# FFTCGFinance website — Version 10 Revision 8

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

## Version 10 Revision 8 focus

- The mobile market chart uses a dedicated tall SVG coordinate system so its grid, axes and plotted data fill the chart frame.
- The desktop chart retains its wider research-dashboard layout.
- Market history remains separated by True Wave 1 and Mislabelled Wave 2.
- Cache-busting asset versions are applied to help mobile Safari load the current release.
