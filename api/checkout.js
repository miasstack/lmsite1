// api/checkout.js — Vercel Serverless Function
// Handles checkout: creates Printful draft order, returns payment link
// Env vars needed in Vercel dashboard:
//   PRINTFUL_API_TOKEN  = your Printful API token
//   PRINTFUL_STORE_ID   = 12157875
//   PAYMENT_URL         = your PayPal.me or Venmo URL (e.g. https://paypal.me/latinomagic)
//   OWNER_EMAIL         = orders@latinomagic.com (optional, for logs)

const PRINTFUL_API = 'https://api.printful.com';

// Map site product IDs → Printful catalog variant IDs per size
const VARIANT_MAP = {
  // String Bikini (catalog product 667)
  'bikini-black-lm-bandidas': { XS:16554, S:16555, M:16556, L:16557, XL:16558 },
  'bikini-lm-blue':           { XS:16554, S:16555, M:16556, L:16557, XL:16558 },
  'bikini-pink':              { XS:16554, S:16555, M:16556, L:16557, XL:16558 },
  'bikini-purple-chimba':     { XS:16554, S:16555, M:16556, L:16557, XL:16558 },
  'bikini-black-bandidas':    { XS:16554, S:16555, M:16556, L:16557, XL:16558 },
  // One-Piece Swimsuit (catalog product 272)
  'swimsuit-onepiece': { XS:4880, S:4881, M:4882, L:4883, XL:4884 },
  // Padded Sports Bra (catalog product 387)
  'sports-bra-pink': { XS:9740, S:9741, M:9742, L:9743, XL:9744 },
  'sports-bra-red':  { XS:9740, S:9741, M:9742, L:9743, XL:9744 },
  // All-Over Print Leggings (catalog product 189)
  'leggings-bw':    { XS:3862, S:3863, M:3864, L:3865, XL:3866 },
  'leggings-red':   { XS:3862, S:3863, M:3864, L:3865, XL:3866 },
  'leggings-white': { XS:3862, S:3863, M:3864, L:3865, XL:3866 },
  // Women's Joggers (catalog product 401)
  'jogger-womens-baby-blue': { XS:10230, S:10231, M:10232, L:10233, XL:10234 },
  'jogger-womens-blue':      { XS:10230, S:10231, M:10232, L:10233, XL:10234 },
  'jogger-womens-green':     { XS:10230, S:10231, M:10232, L:10233, XL:10234 },
  // Men's Joggers (catalog product 400)
  'jogger-mens-green': { S:10220, M:10221, L:10222, XL:10223, XXL:10224 },
  // Women's Windbreaker (catalog product 619)
  'windbreaker-womens-baby-blue': { XS:15760, S:15761, M:15762, L:15763, XL:15764 },
  'windbreaker-womens-blue':      { XS:15760, S:15761, M:15762, L:15763, XL:15764 },
  'windbreaker-womens-green':     { XS:15760, S:15761, M:15762, L:15763, XL:15764 },
  // Men's Windbreaker (catalog product 615)
  'windbreaker-mens-baby-blue': { S:15720, M:15721, L:15722, XL:15723, XXL:15724 },
  'windbreaker-mens-blue':      { S:15720, M:15721, L:15722, XL:15723, XXL:15724 },
  'windbreaker-mens-green':     { S:15720, M:15721, L:15722, XL:15723, XXL:15724 },
  // Bomber Jacket (catalog product 390)
  'bomber-mens-baby-blue': { XS:9982, S:9983, M:9984, L:9985, XL:9986, XXL:9987 },
  'bomber-mens-green':     { XS:9982, S:9983, M:9984, L:9985, XL:9986, XXL:9987 },
  'bomber-green-monogram': { XS:9982, S:9983, M:9984, L:9985, XL:9986, XXL:9987 },
  // Track Jacket (catalog product 801)
  'tracksuit-latina':       { XS:20120, S:20121, M:20122, L:20123, XL:20124 },
  'tracksuit-bandera-mens': { S:20121, M:20122, L:20123, XL:20124, XXL:20125 },
};

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    productId, productName, price, size,
    customerName, customerEmail, customerAddress
  } = req.body;

  if (!productId || !size || !customerEmail || !customerName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const token = process.env.PRINTFUL_API_TOKEN;
  const storeId = process.env.PRINTFUL_STORE_ID || '12157875';
  const paymentBase = process.env.PAYMENT_URL || 'https://paypal.me/latinomagic';

  // Lookup Printful variant ID
  const variantIds = VARIANT_MAP[productId] || {};
  const variantId = variantIds[size] || variantIds[size.toUpperCase()];

  let printfulOrderId = null;

  // Log order details to console (visible in Vercel function logs)
  // Printful orders are created manually by owner after payment confirmation
  // because print files must be attached per-order in the Printful dashboard.
  // Steps after PayPal payment confirmed:
  //   1. Go to printful.com/dashboard → Orders → Create Order
  //   2. Select product + size (variant IDs in VARIANT_MAP above)
  //   3. Upload print file for the customer's order
  //   4. Ship directly to the customer address logged below
  console.log('NEW ORDER', JSON.stringify({
    ref: `pending-${Date.now()}`,
    product: productName,
    productId,
    size,
    variantId: variantId || 'UNMAPPED',
    price,
    customer: { name: customerName, email: customerEmail, address: customerAddress },
    ts: new Date().toISOString(),
  }));

  // Generate PayPal payment link
  const paymentUrl = `${paymentBase}/${price}`;

  // Order reference
  const ref = `LM-${Date.now().toString(36).toUpperCase()}`;

  return res.status(200).json({
    success: true,
    ref,
    paymentUrl,
    message: `Order received! Pay $${price} via PayPal to confirm. Ref: ${ref}`,
  });
}
