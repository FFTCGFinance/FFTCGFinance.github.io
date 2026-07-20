/* FFTCGFinance — static site v1 */
:root {
  --bg: #07090d;
  --panel: #10151e;
  --panel-2: #151c28;
  --line: #253044;
  --text: #f4f7fb;
  --muted: #9ca9bc;
  --blue: #1685ff;
  --blue-2: #52b7ff;
  --gold: #e6b85c;
  --green: #57d49b;
  --amber: #ffca68;
  --red: #ff7777;
  --radius: 18px;
  --shadow: 0 18px 48px rgba(0,0,0,.28);
  color-scheme: dark;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background:
    radial-gradient(circle at 88% -5%, rgba(22,133,255,.16), transparent 36rem),
    radial-gradient(circle at 10% 22%, rgba(230,184,92,.07), transparent 28rem),
    var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.58;
}
a { color: var(--blue-2); text-decoration: none; }
a:hover { text-decoration: underline; }
img { max-width: 100%; }
button, input { font: inherit; }
.wrap { width: min(1160px, calc(100% - 34px)); margin: 0 auto; }
.skip-link { position: fixed; left: 12px; top: -80px; z-index: 999; background:#fff; color:#000; padding:10px 14px; border-radius:10px; }
.skip-link:focus { top: 12px; }
.site-header {
  position: sticky; top: 0; z-index: 20;
  background: rgba(7,9,13,.86);
  border-bottom: 1px solid rgba(80,103,140,.34);
  backdrop-filter: blur(16px);
}
.header-inner { min-height: 72px; display:flex; align-items:center; justify-content:space-between; gap:22px; }
.brand { display:flex; align-items:center; gap:12px; color:var(--text); font-weight:800; letter-spacing:-.02em; }
.brand:hover { text-decoration:none; }
.brand img { width:43px; height:43px; border-radius:50%; object-fit:cover; box-shadow:0 0 0 1px rgba(255,255,255,.16); }
.brand span { font-size:1.13rem; }
.nav { display:flex; align-items:center; gap:8px; flex-wrap:wrap; justify-content:flex-end; }
.nav a { color:#cbd5e4; padding:9px 11px; border-radius:10px; font-size:.91rem; }
.nav a:hover, .nav a[aria-current="page"] { color:#fff; background:rgba(74,113,169,.18); text-decoration:none; }
.hero { padding:92px 0 64px; }
.hero-grid { display:grid; grid-template-columns:1.2fr .8fr; gap:54px; align-items:center; }
.kicker { color:var(--gold); text-transform:uppercase; letter-spacing:.15em; font-size:.76rem; font-weight:800; }
h1,h2,h3 { line-height:1.12; letter-spacing:-.035em; margin:0 0 18px; }
h1 { font-size:clamp(2.7rem, 6vw, 5.8rem); max-width:860px; }
h2 { font-size:clamp(1.9rem, 3.8vw, 3.25rem); }
h3 { font-size:1.24rem; }
.lede { color:#c1ccdb; font-size:clamp(1.06rem, 2vw, 1.3rem); max-width:760px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:30px; }
.btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:46px; padding:0 17px; border-radius:12px; border:1px solid var(--line); color:#fff; background:#121925; font-weight:750; }
.btn:hover { text-decoration:none; border-color:#4f6483; transform:translateY(-1px); }
.btn-primary { background:linear-gradient(135deg,#0d70eb,#25a4ff); border-color:transparent; box-shadow:0 10px 28px rgba(22,133,255,.22); }
.hero-mark { width:min(100%,460px); aspect-ratio:1; justify-self:end; border-radius:50%; object-fit:cover; filter:drop-shadow(0 26px 65px rgba(0,89,255,.28)); }
.status-strip { border-top:1px solid var(--line); border-bottom:1px solid var(--line); background:rgba(15,20,29,.72); }
.status-grid { display:grid; grid-template-columns:repeat(4,1fr); }
.status-item { padding:24px; border-right:1px solid var(--line); }
.status-item:last-child { border-right:0; }
.status-item strong { display:block; font-size:1.08rem; }
.status-item span { color:var(--muted); font-size:.88rem; }
.section { padding:76px 0; }
.section-muted { background:linear-gradient(180deg,rgba(17,23,33,.55),rgba(7,9,13,0)); }
.section-head { display:flex; align-items:end; justify-content:space-between; gap:26px; margin-bottom:28px; }
.section-head p { margin:0; color:var(--muted); max-width:650px; }
.grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
.grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
.card { background:linear-gradient(180deg,rgba(23,31,45,.88),rgba(15,20,29,.92)); border:1px solid var(--line); border-radius:var(--radius); padding:24px; box-shadow:var(--shadow); }
.card p:last-child { margin-bottom:0; }
.card-number { font-size:2.4rem; font-weight:850; letter-spacing:-.05em; }
.card-label { color:var(--muted); font-size:.88rem; }
.card-link { display:inline-flex; margin-top:15px; font-weight:750; }
.record-list { display:grid; gap:14px; }
.record { display:grid; grid-template-columns:1.2fr repeat(3,.6fr) .85fr; gap:14px; align-items:center; padding:18px 20px; background:rgba(17,23,34,.85); border:1px solid var(--line); border-radius:15px; }
.record-head { color:var(--muted); background:transparent; border-style:dashed; padding-top:10px; padding-bottom:10px; font-size:.78rem; text-transform:uppercase; letter-spacing:.08em; }
.record-name strong { display:block; }
.record-name span { color:var(--muted); font-size:.83rem; }
.metric strong { display:block; font-size:1.13rem; }
.metric span { color:var(--muted); font-size:.76rem; }
.badge { display:inline-flex; align-items:center; width:max-content; padding:5px 9px; border:1px solid rgba(87,212,155,.33); background:rgba(87,212,155,.09); color:#8cedbe; border-radius:999px; font-size:.74rem; font-weight:780; text-transform:uppercase; letter-spacing:.05em; }
.badge.pending { color:#ffd17d; border-color:rgba(255,202,104,.35); background:rgba(255,202,104,.08); }
.notice { border-left:3px solid var(--gold); background:rgba(230,184,92,.07); padding:16px 18px; border-radius:0 12px 12px 0; color:#d8deea; }
.page-hero { padding:70px 0 34px; }
.page-hero h1 { font-size:clamp(2.4rem,5vw,4.7rem); }
.page-hero p { color:#b7c3d4; font-size:1.12rem; max-width:790px; }
.toolbar { display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin:26px 0; }
.search { flex:1 1 320px; min-height:48px; border:1px solid var(--line); border-radius:13px; padding:0 15px; color:#fff; background:#0f151f; outline:none; }
.search:focus { border-color:var(--blue); box-shadow:0 0 0 3px rgba(22,133,255,.14); }
.table-wrap { overflow:auto; border:1px solid var(--line); border-radius:16px; background:rgba(14,19,28,.82); }
table { width:100%; border-collapse:collapse; min-width:760px; }
th,td { text-align:left; padding:15px 17px; border-bottom:1px solid var(--line); vertical-align:top; }
th { font-size:.76rem; text-transform:uppercase; letter-spacing:.08em; color:#aeb9c9; background:#111824; }
tbody tr:last-child td { border-bottom:0; }
tbody tr:hover { background:rgba(37,53,76,.25); }
.num { font-variant-numeric:tabular-nums; font-weight:800; }
.detail-grid { display:grid; grid-template-columns:1fr .75fr; gap:22px; align-items:start; }
.meta-list { display:grid; gap:0; margin:0; }
.meta-row { display:grid; grid-template-columns:170px 1fr; gap:18px; padding:13px 0; border-bottom:1px solid var(--line); }
.meta-row dt { color:var(--muted); }
.meta-row dd { margin:0; font-weight:650; }
.evidence-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.evidence-card { overflow:hidden; padding:0; }
.evidence-card img { width:100%; aspect-ratio:4/5; object-fit:contain; background:#000; border-bottom:1px solid var(--line); }
.evidence-body { padding:20px; }
.evidence-body p { color:#b8c4d4; }
.timeline { display:grid; gap:16px; }
.timeline-item { display:grid; grid-template-columns:110px 1fr; gap:20px; padding:22px; border:1px solid var(--line); border-radius:15px; background:rgba(16,22,32,.82); }
.timeline-item .date { color:var(--gold); font-weight:800; }
.prose { max-width:820px; }
.prose h2 { margin-top:54px; }
.prose h3 { margin-top:34px; }
.prose p, .prose li { color:#c2ccda; }
.prose li { margin:.4em 0; }
.code-block { overflow:auto; background:#0b0f16; border:1px solid var(--line); border-radius:13px; padding:17px; color:#d8e2ef; }
.site-footer { margin-top:70px; border-top:1px solid var(--line); padding:38px 0 50px; color:var(--muted); }
.footer-grid { display:grid; grid-template-columns:1fr auto; gap:26px; align-items:start; }
.footer-links { display:flex; flex-wrap:wrap; gap:14px; justify-content:flex-end; }
.small { font-size:.86rem; color:var(--muted); }
.hidden { display:none !important; }
.empty { padding:32px; text-align:center; color:var(--muted); }
@media (max-width:900px) {
  .hero-grid, .detail-grid { grid-template-columns:1fr; }
  .grid-4 { grid-template-columns:1fr 1fr; }
  .chart-head { align-items:flex-start; flex-direction:column; }
  .chart-controls { justify-content:flex-start; }
  .hero-mark { width:min(72vw,390px); justify-self:center; order:-1; }
  .status-grid { grid-template-columns:repeat(2,1fr); }
  .status-item:nth-child(2) { border-right:0; }
  .status-item:nth-child(-n+2) { border-bottom:1px solid var(--line); }
  .grid-3, .evidence-grid { grid-template-columns:1fr 1fr; }
  .record { grid-template-columns:1.2fr repeat(3,.55fr); }
  .record > :last-child { grid-column:1/-1; }
}
@media (max-width:650px) {
  .wrap { width:min(100% - 24px,1160px); }
  .header-inner { align-items:flex-start; padding:10px 0; flex-direction:column; gap:7px; }
  .nav { display:flex; width:100%; overflow-x:auto; flex-wrap:nowrap; justify-content:flex-start; padding-bottom:3px; scrollbar-width:none; }
  .nav::-webkit-scrollbar { display:none; }
  .nav a { white-space:nowrap; padding:7px 9px; }
  .hero { padding-top:46px; }
  h1 { font-size:2.75rem; }
  .hero-mark { width:min(86vw,350px); }
  .status-grid, .grid-3, .grid-4, .grid-2, .evidence-grid { grid-template-columns:1fr; }
  .status-item { border-right:0; border-bottom:1px solid var(--line); }
  .status-item:last-child { border-bottom:0; }
  .record, .record-head { grid-template-columns:1fr 1fr; }
  .record-name { grid-column:1/-1; }
  .record-head { display:none; }
  .meta-row { grid-template-columns:1fr; gap:2px; }
  .timeline-item { grid-template-columns:1fr; gap:8px; }
  .footer-grid { grid-template-columns:1fr; }
  .footer-links { justify-content:flex-start; }
}


/* Archive indexes and Treno Exchange */
.compact-table { min-width: 820px; }
.record-link { color: var(--text); }
.record-link:hover { color: var(--blue-2); }
.chart-card { background:linear-gradient(180deg,rgba(23,31,45,.9),rgba(12,17,25,.96)); border:1px solid var(--line); border-radius:var(--radius); padding:24px; box-shadow:var(--shadow); }
.chart-head { display:flex; align-items:flex-end; justify-content:space-between; gap:24px; margin-bottom:18px; }
.chart-head p { color:var(--muted); margin:0; max-width:660px; }
.chart-controls { display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end; align-items:center; }
.series-toggle, .range-control { display:inline-flex; align-items:center; gap:8px; min-height:42px; padding:0 12px; border:1px solid var(--line); border-radius:11px; background:#0f151f; color:#dce5f1; font-size:.86rem; font-weight:700; }
.series-toggle input { accent-color:var(--blue); }
.series-toggle span { width:10px; height:10px; border-radius:50%; display:inline-block; }
.series-toggle.true-wave span { background:var(--gold); }
.series-toggle.wave-two span { background:var(--blue-2); }
.range-control select { color:#fff; background:#0f151f; border:0; outline:none; }
.chart-frame { position:relative; width:100%; overflow:hidden; border:1px solid var(--line); border-radius:15px; background:radial-gradient(circle at 50% 0,rgba(22,133,255,.08),transparent 45%),#0a0f17; }
.market-chart { display:block; width:100%; height:auto; min-height:340px; touch-action:manipulation; }
.chart-grid { stroke:#263348; stroke-width:1; }
.chart-grid-vertical { stroke-dasharray:4 7; opacity:.55; }
.chart-axis-label { fill:#8f9db1; font-size:15px; font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
.chart-axis-title { fill:#aeb9c9; font-size:15px; font-weight:700; font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
.chart-hit { cursor:pointer; }
.chart-hit:focus { outline:none; stroke:#fff; stroke-width:2; }
.chart-tooltip { position:absolute; z-index:5; width:218px; display:grid; gap:2px; padding:12px 13px; border:1px solid #435675; border-radius:12px; background:rgba(7,9,13,.96); box-shadow:0 14px 30px rgba(0,0,0,.35); pointer-events:none; }
.chart-tooltip strong { font-size:1.12rem; color:#fff; }
.chart-tooltip span { font-size:.77rem; color:#b8c4d4; }
.chart-note { margin-top:16px; color:#acb8c8; font-size:.88rem; }
.market-links { margin-top:20px; }
.data-details { margin-top:20px; border:1px solid var(--line); border-radius:15px; background:rgba(14,19,28,.82); overflow:hidden; }
.data-details summary { cursor:pointer; padding:17px 20px; font-weight:800; color:#fff; }
.data-details[open] summary { border-bottom:1px solid var(--line); }
.data-details .table-wrap { border:0; border-radius:0; }
.market-status .status-item strong { font-size:1.35rem; }

@media (max-width:650px) { .chart-card { padding:14px; } .series-toggle, .range-control { width:100%; justify-content:flex-start; } .market-chart { min-width:700px; } .chart-frame { overflow-x:auto; } }
@media (max-width:900px) {
  .chart-head { align-items:flex-start; flex-direction:column; }
  .chart-controls { justify-content:flex-start; }
}
