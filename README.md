# FFTCGFinance website — v8

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

## v8 focus

- Cloud population comparison is now PSA 10 versus Beckett 9.5+.
- The market chart no longer exposes a PSA 9 control.
- The homepage Easter egg uses the established Stellazzio coin treatment.
