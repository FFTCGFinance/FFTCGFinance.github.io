# FFTCGFinance website — v7

A deploy-ready static build for `fftcgfinance.com`.

## Important upload change

All files are intentionally stored at the repository root. Upload the contents of this folder directly to `FFTCGFinance.github.io`. This avoids the folder-flattening asset-path issue from the first deployment.

## Routine updates

Most factual updates now happen in `data.js`:

- population figures and review dates;
- MA, SUB and TE index links;
- Cloud market records;
- change-log entries.

Upload only `data.js` when the structure and design have not changed.

## Structural files

- `styles.css` — design
- `app.js` — search, tables, chart and analytics events
- HTML files — page structure

Plausible analytics remains enabled on every page.
