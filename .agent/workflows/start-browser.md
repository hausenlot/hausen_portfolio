---
description: Start Chrome in WSL with remote debugging for Antigravity browser control
---

# Start Browser for Antigravity

Since Windows Chrome remote debugging doesn't work well with WSL2 networking, use Chrome installed directly in WSL.

## Steps

// turbo
1. Kill any existing Chrome debug instances:
```bash
pkill -f "chrome.*remote-debugging" 2>/dev/null
```

// turbo
2. Start Chrome with remote debugging:
```bash
google-chrome --remote-debugging-port=9222 --remote-allow-origins=* --no-first-run --no-default-browser-check --user-data-dir=/tmp/chrome-debug &
```

// turbo
3. Verify Chrome is listening:
```bash
sleep 2 && curl -s http://localhost:9222/json | head -5
```

## Notes

- Chrome will open with a fresh profile in `/tmp/chrome-debug`
- The browser window will appear via WSLg on your Windows desktop
- Port 9222 is the standard remote debugging port
- If you need to use your regular Chrome extensions, you'll need to install them in the WSL Chrome profile
