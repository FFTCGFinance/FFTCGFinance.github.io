(function () {
  const data = window.FFTCG_DATA || {};
  const esc = value => String(value ?? '').replace(/[&<>'\"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[ch]));
  const displayPrice = value => Number.isFinite(Number(value)) ? '$' + Math.round(Number(value)).toLocaleString('en-US') : '—';
  const slug = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const badgeClass = status => /pending/i.test(status) ? 'pending' : /current|active|reviewed/i.test(status) ? '' : 'neutral';
  const evidenceUrls = {
    "TE-002":"https://www.reddit.com/r/FFTCGFinance/s/VLS8aXHmmr",
    "TE-004":"https://www.reddit.com/r/FFTCGFinance/s/AM9i5kzTa7",
    "TE-005":"https://www.reddit.com/r/FFTCGFinance/s/ms0i0yRZf8",
    "TE-006":"https://www.reddit.com/r/FFTCGFinance/s/YSKSpql22v",
    "TE-007":"https://www.reddit.com/r/FFTCGFinance/s/bptDUnhMhc",
    "TE-008":"https://www.reddit.com/r/FFTCGFinance/s/VkjSBALGQh",
    "TE-009":"https://www.reddit.com/r/FFTCGFinance/s/lHGzda9MjS",
    "TE-010":"https://www.reddit.com/r/FFTCGFinance/s/FO0OyV66rT",
    "TE-011":"https://www.reddit.com/r/FFTCGFinance/s/0ywiswq5m2",
    "TE-012":"https://www.reddit.com/r/FFTCGFinance/s/xiK11OMUMC",
    "TE-013":"https://www.reddit.com/r/FFTCGFinance/s/z7hlIxerse",
    "TE-021":"https://www.reddit.com/r/FFTCGFinance/s/6LdRFbhck9",
    "TE-025":"https://www.reddit.com/r/FFTCGFinance/s/5rchNveifv",
    "TE-026":"https://www.reddit.com/r/FFTCGFinance/s/T9tm1p86ML",
    "TE-028":"https://www.reddit.com/r/FFTCGFinance/s/AUCk62jddr",
    "TE-029":"https://www.reddit.com/r/FFTCGFinance/s/IDiTA3WD3z",
    "TE-030":"https://www.reddit.com/r/FFTCGFinance/s/xk6Whm1TCg",
    "TE-014":"https://www.reddit.com/r/FFTCGFinance/s/0Z0lCfYMqo",
    "TE-015":"https://www.reddit.com/r/FFTCGFinance/s/zYJXIrDOts",
    "TE-016":"https://www.reddit.com/r/FFTCGFinance/s/djdXh1B43t",
    "TE-017":"https://www.reddit.com/r/FFTCGFinance/s/7Qr8GyRgua",
    "TE-018":"https://www.reddit.com/r/FFTCGFinance/s/bJ98mAYu8t",
    "TE-019":"https://www.reddit.com/r/FFTCGFinance/s/DBlXiX2Say",
    "TE-020":"https://www.reddit.com/r/FFTCGFinance/s/ld47kk6mEm",
    "TE-031":"https://www.reddit.com/r/FFTCGFinance/s/mXKiZbcYnz",
    "TE-032":"https://www.reddit.com/r/FFTCGFinance/s/0jvNJJVQ78",
    "TE-033":"https://www.reddit.com/r/FFTCGFinance/s/elaiIT7EUE",
    "TE-034":"https://www.reddit.com/r/FFTCGFinance/s/oa65PAIKCS",
    "TE-027":"https://www.reddit.com/r/FFTCGFinance/s/nHDO73IQkS",
    "TE-035":"https://www.reddit.com/r/FFTCGFinance/s/zQhqapRqzz",
    "TE-036":"https://www.reddit.com/r/FFTCGFinance/s/OZoPEJLath",
    "TE-037":"https://www.reddit.com/r/FFTCGFinance/s/OoZCTpUAOq"  };

  document.querySelectorAll('[data-reviewed]').forEach(el => el.textContent = data.reviewed || '—');
  document.querySelectorAll('[data-revision]').forEach(el => el.textContent = data.revision || '—');

  const siteStatus = document.querySelector('[data-site-status]');
  if (siteStatus) {
    siteStatus.innerHTML = (data.siteStatus || []).map(item => `
      <div class="status-item">
        <div class="status-line"><strong>${esc(item.label)}</strong>${item.state === 'active' ? '<span class="badge">Active</span>' : ''}</div>
        <span>${item.state === 'date' ? esc(item.value) : 'maintained record series'}</span>
      </div>`).join('');
  }

  const popBody = document.querySelector('[data-population-body]');
  if (popBody) {
    popBody.innerHTML = (data.populations || []).map(r => `
      <tr id="pop-${slug(r.card)}" data-search-row="${esc([r.card,r.scope,r.record,r.status].join(' '))}">
        <td><strong>${esc(r.card)}</strong><div class="small">${esc(r.scope)}</div></td>
        <td class="num">${r.official}</td><td class="num">${r.exclusions}</td><td class="num">${r.adjusted}</td>
        <td><a href="${(data.archiveRecords || []).find(a => a.id === r.record)?.url || '#'}">${esc(r.record)}</a></td><td><span class="badge ${badgeClass(r.status)}">${esc(r.status)}</span></td>
      </tr>`).join('');
  }

  const homeRecords = document.querySelector('[data-home-records]');
  if (homeRecords) {
    homeRecords.innerHTML = `<div class="record record-head"><div>Card</div><div>Official</div><div>Exclusions</div><div>Adjusted</div><div>Status</div></div>${(data.populations || []).map(r => `
      <div class="record"><div class="record-name"><strong>${esc(r.card)}</strong><span>${esc(r.scope)}</span></div>
      <div class="metric"><strong>${r.official}</strong><span>official</span></div><div class="metric"><strong>${r.exclusions}</strong><span>excluded</span></div><div class="metric"><strong>${r.adjusted}</strong><span>adjusted</span></div><span class="badge ${badgeClass(r.status)}">${esc(r.status)}</span></div>`).join('')}`;
  }

  const cloud = data.cloudPopulation || {};
  document.querySelectorAll('[data-cloud-summary]').forEach(host => {
    host.innerHTML = [
      ['PSA 10 official', cloud.psa10Official, 'official basis'],
      ['PSA 10 adjusted', cloud.psa10Adjusted, `${cloud.psa10Exclusions} exclusions`],
      ['Beckett 9.5+', cloud.beckett95PlusTotal, `${cloud.beckett95PlusAdjusted} adjusted`],
      ['Combined high-grade', cloud.combinedHighGradeOfficial, `${cloud.combinedHighGradeAdjusted} adjusted`, true]
    ].map(([label,value,note,featured]) => `<div class="cloud-stat${featured?' featured':''}"><span>${esc(label)}</span><strong>${esc(value)}</strong><span>${esc(note)}</span></div>`).join('');
  });

  function renderBars(selector, rows) {
    document.querySelectorAll(selector).forEach(host => {
      const max = Math.max(...rows.map(r => r.count), 1);
      host.innerHTML = rows.map(r => `<div class="mini-bar"><span class="mini-bar-label">${esc(r.grade)}</span><span class="mini-bar-track"><span class="mini-bar-fill" style="width:${(r.count/max*100).toFixed(1)}%"></span></span><span class="mini-bar-value">${r.count}</span></div>`).join('');
    });
  }
  renderBars('[data-psa-treatment]', [
    {grade:'Official', count:cloud.psa10Official},
    {grade:'Excluded', count:cloud.psa10Exclusions},
    {grade:'Adjusted', count:cloud.psa10Adjusted}
  ]);
  renderBars('[data-beckett-high-grade]', cloud.beckett95PlusBreakdown || []);
  document.querySelectorAll('[data-cloud-notes]').forEach(host => {
    host.innerHTML = '<strong>Population treatment</strong><ul>' + (cloud.notes || []).map(n => `<li>${esc(n)}</li>`).join('') + '</ul>';
  });

  const maBody = document.querySelector('[data-ma-body]');
  if (maBody) maBody.innerHTML = (data.archiveRecords || []).map(r => `
    <tr data-ma-row="${esc([r.id,r.subject,r.role,r.status].join(' '))}"><td><a class="record-link" href="${esc(r.url)}"><strong>${esc(r.id)}</strong></a></td><td>${esc(r.subject)}</td><td>${esc(r.role)}</td><td><span class="badge ${badgeClass(r.status)}">${esc(r.status)}</span></td></tr>`).join('');

  const subBody = document.querySelector('[data-sub-body]');
  if (subBody) subBody.innerHTML = (data.submissions || []).map(r => `
    <tr data-sub-row="${esc([r.id,r.subject,r.status,r.result].join(' '))}"><td><a class="record-link" href="${esc(r.url)}"><strong>${esc(r.id)}</strong></a></td><td>${esc(r.subject)}</td><td><span class="badge ${badgeClass(r.status)}">${esc(r.status)}</span></td><td>${esc(r.result)}</td></tr>`).join('');

  const teBody = document.querySelector('[data-te-body]');
  if (teBody) teBody.innerHTML = (data.trenoRecords || []).map(r => `
    <tr data-te-row="${esc([r.id,r.subject,r.role,r.status].join(' '))}"><td><a class="record-link" href="${esc(r.url)}"><strong>${esc(r.id)}</strong></a></td><td>${esc(r.subject)}</td><td>${esc(r.role)}</td><td><span class="badge ${badgeClass(r.status)}">${esc(r.status)}</span></td></tr>`).join('');

  const marketBody = document.querySelector('[data-market-body]');
  if (marketBody) marketBody.innerHTML = (data.marketRecords || [])
    .filter(r => ['PSA 10','Beckett'].includes(r.gradeGroup))
    .sort((a,b) => new Date(b.date) - new Date(a.date))
    .map(r => `
    <tr><td>${esc(r.displayDate)}</td><td>${esc(r.category)}</td><td>${esc(r.grade)}</td><td class="num">${displayPrice(r.price)}</td><td>${esc(r.platform)}</td><td>${esc(r.status)}${r.plotted ? '' : '<div class="small">Not plotted: native GBP</div>'}</td><td>${evidenceUrls[r.id] ? `<a href="${evidenceUrls[r.id]}">${esc(r.id)}</a>` : `<span>${esc(r.id)}</span>`}</td></tr>`).join('');

  const trueCount = (data.marketRecords || []).filter(r => r.category === 'True Wave 1').length;
  const wave2Count = (data.marketRecords || []).filter(r => r.category === 'Mislabelled Wave 2').length;
  const plottedCount = (data.marketRecords || []).filter(r => r.plotted && Number.isFinite(r.price)).length;
  document.querySelectorAll('[data-true-count]').forEach(el => el.textContent = trueCount);
  document.querySelectorAll('[data-wave2-count]').forEach(el => el.textContent = wave2Count);
  document.querySelectorAll('[data-plotted-count]').forEach(el => el.textContent = plottedCount);

  document.querySelectorAll('[data-search]').forEach(input => {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      const selector = input.dataset.search;
      let visible = 0;
      document.querySelectorAll(selector).forEach(el => {
        const attrs = ['data-search-row','data-ma-row','data-sub-row','data-te-row'];
        const hay = (attrs.map(a => el.getAttribute(a)).find(Boolean) || el.textContent || '').toLowerCase();
        const show = !q || hay.includes(q);
        el.classList.toggle('hidden', !show);
        if (show) visible++;
      });
      const empty = document.querySelector(input.dataset.empty || '');
      if (empty) empty.classList.toggle('hidden', visible !== 0);
    });
  });

  initGlobalSearch();
  initAnalytics();
  initMarketChart();
  renderChangelog();

  function buildSearchIndex() {
    const rows = [...(data.searchPages || [])];
    (data.populations || []).forEach(r => rows.push({type:'Population',title:r.card,description:`${r.record} · official ${r.official}, adjusted ${r.adjusted}`,url:`populations.html#pop-${slug(r.card)}`,keywords:`${r.scope} ${r.status}`}));
    (data.archiveRecords || []).forEach(r => rows.push({type:'MA',title:`${r.id} — ${r.subject}`,description:r.role,url:r.url,keywords:r.status}));
    (data.submissions || []).forEach(r => rows.push({type:'SUB',title:`${r.id} — ${r.subject}`,description:`${r.status} · ${r.result}`,url:r.url,keywords:r.status}));
    (data.trenoRecords || []).forEach(r => rows.push({type:'TE',title:`${r.id} — ${r.subject}`,description:r.role,url:r.url,keywords:r.status}));
    return rows.map(r => ({...r,hay:`${r.type} ${r.title} ${r.description||''} ${r.keywords||''}`.toLowerCase()}));
  }

  function initGlobalSearch() {
    const index = buildSearchIndex();
    document.querySelectorAll('[data-global-search-wrap]').forEach(wrap => {
      const input = wrap.querySelector('[data-global-search]');
      const results = wrap.querySelector('[data-global-results]');
      if (!input || !results) return;
      const close = () => results.classList.add('hidden');
      const render = () => {
        const q = input.value.trim().toLowerCase();
        if (!q) return close();
        const matches = index.filter(item => item.hay.includes(q)).slice(0,8);
        results.innerHTML = matches.length ? matches.map(item => `<a class="global-result" role="option" href="${esc(item.url)}"><strong>${esc(item.title)}</strong><span>${esc(item.type)} · ${esc(item.description || '')}</span></a>`).join('') : '<div class="global-no-results">No matching records.</div>';
        results.classList.remove('hidden');
        if (window.FFTCG_TRACK && q.length >= 3) window.FFTCG_TRACK('Archive Search', {query:q,results:matches.length});
      };
      input.addEventListener('input', render);
      input.addEventListener('focus', render);
      document.addEventListener('click', e => { if (!wrap.contains(e.target)) close(); });
      input.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); input.blur(); } });
    });
  }

  function renderChangelog() {
    document.querySelectorAll('[data-changelog]').forEach(host => {
      host.innerHTML = (data.changelog || []).map(entry => `<div class="timeline-item"><div class="date">${esc(entry.date)}</div><div><h3>${esc(entry.title)}</h3><ul>${(entry.items||[]).map(item=>`<li>${esc(item)}</li>`).join('')}</ul></div></div>`).join('');
    });
  }

  function initAnalytics() {
    const track = (eventName, props = {}) => {
      if (typeof window.plausible === 'function') window.plausible(eventName, {props});
    };
    window.FFTCG_TRACK = track;

    document.addEventListener('click', event => {
      const coin = event.target.closest('[data-hidden-coin]');
      if (coin) {
        track('Hidden Coin Clicked', {location:'Footer'});
        return;
      }
      const link = event.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const label = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0,120);
      if (/reddit\.com\/r\/FFTCGFinance/i.test(href)) {
        const record = (label.match(/\b(?:MA|SUB|TE)-?\d{3}\b/i) || href.match(/\b(?:ma|sub|te)-?\d{3}\b/i) || [])[0] || 'General';
        if (/\bMA-?\d{3}\b/i.test(record)) track('MA Record Click', {record:record.toUpperCase(),label});
        else if (/\bSUB-?\d{3}\b/i.test(record)) track('SUB Record Click', {record:record.toUpperCase(),label});
        else if (/\bTE-?\d{3}\b/i.test(record)) track('TE Record Click', {record:record.toUpperCase(),label});
        else track('Reddit Click', {label});
        return;
      }
      if (/youtube\.com\/@FFTCGFinance/i.test(href)) track('Social Click', {platform:'YouTube'});
      else if (/github\.com\/FFTCGFinance/i.test(href)) track('Social Click', {platform:'GitHub'});
      else if (/^mailto:/i.test(href)) track('Contact Click', {address:href.replace(/^mailto:/i,'')});
      else if (/^https?:\/\//i.test(href) && !/fftcgfinance\.com/i.test(href)) track('Outbound Link Click', {url:href,label});
    });

    const marketDetails = document.querySelector('.data-details');
    if (marketDetails) marketDetails.addEventListener('toggle', () => track('Cloud Market Table', {state:marketDetails.open?'Opened':'Closed'}));
  }

  function initMarketChart() {
    const host = document.querySelector('[data-market-chart]');
    const svg = document.querySelector('[data-chart-svg]');
    if (!host || !svg) return;

    const tooltip = document.querySelector('[data-chart-tooltip]');
    const categoryToggles = [...document.querySelectorAll('[data-series-toggle]')];
    const gradeToggles = [...document.querySelectorAll('[data-grade-toggle]')];
    const range = document.querySelector('[data-market-range]');
    const allButton = document.querySelector('[data-chart-all]');
    const colours = {'True Wave 1':'#e6b85c','Mislabelled Wave 2':'#52b7ff'};
    const dash = {'PSA 10':'','Beckett':'2 8','Other':'6 5'};

    gradeToggles.forEach(toggle => {
      const count = (data.marketRecords || []).filter(r => r.gradeGroup === toggle.value && r.plotted && Number.isFinite(r.price)).length;
      const counter = document.querySelector(`[data-grade-count="${CSS.escape(toggle.value)}"]`);
      if (counter) counter.textContent = `· ${count}`;
      if (!count) {
        toggle.disabled = true;
        toggle.checked = false;
        toggle.closest('.grade-toggle')?.classList.add('disabled');
      }
    });

    const render = () => {
      const enabledCategories = new Set(categoryToggles.filter(t => t.checked).map(t => t.value));
      const enabledGrades = new Set(gradeToggles.filter(t => t.checked).map(t => t.value));
      const startYear = range && range.value !== 'all' ? Number(range.value) : null;
      const records = (data.marketRecords || []).filter(r =>
        r.plotted && Number.isFinite(r.price) &&
        enabledCategories.has(r.category) &&
        (!startYear || Number(r.date.slice(0,4)) >= startYear)
      );

      if (!records.length) {
        svg.innerHTML = '<text x="500" y="270" text-anchor="middle" fill="#9ca9bc" font-size="24">No records match the selected filters.</text>';
        return;
      }

      const isMobile = window.matchMedia('(max-width:650px)').matches;
      const width = 1000;
      const height = isMobile ? 1380 : 760;
      const m = isMobile
        ? {top:55,right:32,bottom:135,left:78}
        : {top:40,right:32,bottom:110,left:78};
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      const dates=records.map(r=>new Date(r.date+'T00:00:00Z').getTime());
      const minX=Math.min(...dates),maxX=Math.max(...dates);
      const maxPrice=Math.max(...records.map(r=>r.price));
      const yMax=Math.max(500,Math.ceil((maxPrice*1.08)/500)*500);
      const x=t=>m.left+((t-minX)/(maxX-minX||1))*(width-m.left-m.right);
      const y=v=>height-m.bottom-(v/yMax)*(height-m.top-m.bottom);
      let out='';

      for(let v=0;v<=yMax;v+=500){const yy=y(v);out+=`<line x1="${m.left}" y1="${yy}" x2="${width-m.right}" y2="${yy}" class="chart-grid"/><text x="${m.left-14}" y="${yy+5}" text-anchor="end" class="chart-axis-label">$${v.toLocaleString('en-US')}</text>`;}
      const y0=new Date(minX).getUTCFullYear(),y1=new Date(maxX).getUTCFullYear();
      for(let yr=y0;yr<=y1;yr++){const xx=x(Date.UTC(yr,0,1));if(xx>=m.left-2&&xx<=width-m.right+2)out+=`<line x1="${xx}" y1="${m.top}" x2="${xx}" y2="${height-m.bottom}" class="chart-grid chart-grid-vertical"/><text x="${xx}" y="${height-25}" text-anchor="middle" class="chart-axis-label">${yr}</text>`;}
      out+=`<text x="20" y="${height/2}" transform="rotate(-90 20 ${height/2})" text-anchor="middle" class="chart-axis-title">Recorded price (USD)</text>`;

      for (const category of ['True Wave 1','Mislabelled Wave 2']) {
        const series=records.filter(r=>r.category===category).sort((a,b)=>a.date.localeCompare(b.date));
        if (!series.length) continue;
        if (series.length > 1) {
          const path=series.map((r,i)=>`${i?'L':'M'} ${x(new Date(r.date+'T00:00:00Z').getTime()).toFixed(2)} ${y(r.price).toFixed(2)}`).join(' ');
          out+=`<path d="${path}" fill="none" stroke="${colours[category]}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" opacity=".88"/>`;
        }
        series.forEach(r=>{
          const xx=x(new Date(r.date+'T00:00:00Z').getTime()),yy=y(r.price),idx=(data.marketRecords||[]).indexOf(r);
          out+=`<circle cx="${xx}" cy="${yy}" r="6" fill="${colours[category]}" stroke="#07090d" stroke-width="3"/><circle class="chart-hit" data-market-point="${idx}" cx="${xx}" cy="${yy}" r="16" fill="transparent" tabindex="0" role="button" aria-label="${esc(r.category+', '+r.displayDate+', '+r.displayPrice+', '+r.id)}"/>`;
        });
      }
      svg.innerHTML=out;
      svg.querySelectorAll('[data-market-point]').forEach(point=>{
        const record=(data.marketRecords||[])[Number(point.dataset.marketPoint)];
        const show=ev=>showTooltip(ev,point,record);
        point.addEventListener('pointerenter',show);
        point.addEventListener('pointermove',show);
        point.addEventListener('pointerleave',hideTooltip);
        point.addEventListener('focus',show);
        point.addEventListener('blur',hideTooltip);
        point.addEventListener('click',ev=>{
          show(ev);
          if(window.FFTCG_TRACK)window.FFTCG_TRACK('Cloud Chart Point',{record:record.id,classification:record.category,date:record.displayDate,price:record.displayPrice,grade:record.grade,platform:record.platform});
        });
      });
    };

    function showTooltip(ev,point,r){
      if(!tooltip)return;
      tooltip.innerHTML=`<strong>${displayPrice(r.price)}</strong><span>${esc(r.displayDate)} · ${esc(r.id)}</span><span>${esc(r.category)}</span><span>${esc(r.grade)} · ${esc(r.platform)}</span><span>${esc(r.status)}</span>`;
      tooltip.classList.remove('hidden');
      const hostRect=host.getBoundingClientRect();
      let left,top;
      if(ev&&typeof ev.clientX==='number'&&ev.clientX){left=ev.clientX-hostRect.left+12;top=ev.clientY-hostRect.top+12;}
      else{const p=point.getBoundingClientRect();left=p.left-hostRect.left+18;top=p.top-hostRect.top-10;}
      tooltip.style.left=Math.min(Math.max(8,left),Math.max(8,hostRect.width-230))+'px';
      tooltip.style.top=Math.max(8,top)+'px';
    }
    function hideTooltip(){if(tooltip)tooltip.classList.add('hidden');}

    [...categoryToggles,...gradeToggles].forEach(t=>t.addEventListener('change',()=>{
      hideTooltip();
      if(window.FFTCG_TRACK)window.FFTCG_TRACK('Cloud Chart Filter',{filter:t.value,state:t.checked?'Shown':'Hidden'});
      render();
    }));
    if(range)range.addEventListener('change',()=>{
      hideTooltip();
      if(window.FFTCG_TRACK)window.FFTCG_TRACK('Cloud Chart Range',{range:range.options[range.selectedIndex].text});
      render();
    });
    if(allButton)allButton.addEventListener('click',()=>{
      categoryToggles.forEach(t=>t.checked=true);
      gradeToggles.forEach(t=>{if(!t.disabled)t.checked=true;});
      if(range)range.value='all';
      hideTooltip();
      if(window.FFTCG_TRACK)window.FFTCG_TRACK('Cloud Chart Filter',{filter:'All tracked',state:'Selected'});
      render();
    });
    const chartMedia = window.matchMedia('(max-width:650px)');
    if (chartMedia.addEventListener) chartMedia.addEventListener('change', render);
    else if (chartMedia.addListener) chartMedia.addListener(render);
    render();
  }
})();
