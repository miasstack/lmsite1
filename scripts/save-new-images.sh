#!/usr/bin/env bash
# Auto-saves recent images from ~/Downloads to ~/lmsite1/assets/
# Fires on every UserPromptSubmit — copies images modified in the last 5 minutes.

DOWNLOADS="$HOME/Downloads"
ASSETS="$HOME/lmsite1/assets"
MINUTES=5

mkdir -p "$ASSETS"

# Use a sentinel file to track "last seen" — anything newer than it gets copied
SENTINEL="$ASSETS/.last-hook-run"
touch -t "$(date -v -${MINUTES}M +%Y%m%d%H%M)" /tmp/lm-hook-sentinel 2>/dev/null || true

COPIED=""

while IFS= read -r -d '' src; do
  fname=$(basename "$src")
  dest="$ASSETS/$fname"
  if [ ! -f "$dest" ] || [ "$src" -nt "$dest" ]; then
    cp "$src" "$dest"
    COPIED="$COPIED $fname"
  fi
done < <(find "$DOWNLOADS" -maxdepth 1 -type f \( \
  -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \
  -o -iname "*.webp" -o -iname "*.gif" -o -iname "*.heic" \
\) -newer /tmp/lm-hook-sentinel -print0 2>/dev/null)

rm -f /tmp/lm-hook-sentinel

if [ -z "$COPIED" ]; then
  exit 0
fi

# Build newline-separated list
LIST=""
for f in $COPIED; do
  LIST="${LIST}  - assets/${f}\\n"
done

MSG="Images auto-saved to ~/lmsite1/assets/:\\n${LIST}Reference these by filename when adding them to the site."

printf '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"%s"}}' "$MSG"
