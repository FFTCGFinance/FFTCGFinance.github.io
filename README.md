# FFTCGFinance website — revision 3 / Plausible-enabled build

A deploy-ready static website for `fftcgfinance.com`.

## Edit data

Update `assets/data.js`. Population records, MA links, SUB links and Cloud market points are generated from this single file.

## Deploy on GitHub Pages

1. Upload every file and folder in this directory to the root of `FFTCGFinance.github.io`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. In the custom-domain box, enter `fftcgfinance.com`.
6. Add the GitHub Pages DNS records in Cloudflare when GitHub displays them.
7. Enable **Enforce HTTPS** after the certificate is ready.

The included `CNAME`, `robots.txt`, `sitemap.xml`, manifest and canonical tags are configured for `fftcgfinance.com`.

## Site sections

- Home
- Population Records
- Variant Guide
- Treno Exchange Market Records
- MA and SUB Archive Index
- Methodology

## Data treatment

The interactive Cloud chart uses the current TE-001 table. The native-GBP observation dated 7 October 2024 remains listed but is not plotted because no exchange-rate conversion is applied.

No external fonts, frameworks or chart libraries are required. Plausible analytics is enabled on every HTML page using the supplied site script.


## Plausible events

The site records privacy-friendly custom events for MA, SUB and TE record clicks; Reddit, YouTube, GitHub and contact clicks; Cloud chart series/range changes; chart-point taps; and opening the full market table.
