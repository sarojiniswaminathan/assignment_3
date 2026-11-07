// NCRB 2020 Metropolitan Cities Dataset (Table 19B.2)
const RAW_METRO_DATA = [
  { sl_no: 1, city: "Ahmedabad (Gujarat)", juv_boys: 481, juv_girls: 3, juv_total: 484, age_18_30_male: 31809, age_18_30_female: 1122, age_18_30_total: 32931, age_30_45_male: 28809, age_30_45_female: 1700, age_30_45_total: 30509, age_45_60_male: 12012, age_45_60_female: 893, age_45_60_total: 12905, age_60_above_male: 1030, age_60_above_female: 199, age_60_above_total: 1229, total_male: 74141, total_female: 3917, total_arrests: 78058 },
  { sl_no: 2, city: "Bengaluru (Karnataka)", juv_boys: 192, juv_girls: 2, juv_total: 194, age_18_30_male: 11300, age_18_30_female: 439, age_18_30_total: 11739, age_30_45_male: 7517, age_30_45_female: 828, age_30_45_total: 8345, age_45_60_male: 2079, age_45_60_female: 346, age_45_60_total: 2425, age_60_above_male: 279, age_60_above_female: 78, age_60_above_total: 357, total_male: 21367, total_female: 1693, total_arrests: 23060 },
  { sl_no: 3, city: "Chennai (Tamil Nadu)", juv_boys: 792, juv_girls: 0, juv_total: 792, age_18_30_male: 79187, age_18_30_female: 9427, age_18_30_total: 88614, age_30_45_male: 64747, age_30_45_female: 9638, age_30_45_total: 74385, age_45_60_male: 47378, age_45_60_female: 5420, age_45_60_total: 52798, age_60_above_male: 23567, age_60_above_female: 1590, age_60_above_total: 25157, total_male: 215671, total_female: 26075, total_arrests: 241746 },
  { sl_no: 4, city: "Coimbatore (Tamil Nadu)", juv_boys: 32, juv_girls: 0, juv_total: 32, age_18_30_male: 5650, age_18_30_female: 79, age_18_30_total: 5729, age_30_45_male: 6674, age_30_45_female: 198, age_30_45_total: 6872, age_45_60_male: 1120, age_45_60_female: 121, age_45_60_total: 1241, age_60_above_male: 339, age_60_above_female: 20, age_60_above_total: 359, total_male: 13815, total_female: 418, total_arrests: 14233 },
  { sl_no: 5, city: "Delhi City", juv_boys: 2720, juv_girls: 4, juv_total: 2724, age_18_30_male: 49370, age_18_30_female: 587, age_18_30_total: 49957, age_30_45_male: 38914, age_30_45_female: 769, age_30_45_total: 39683, age_45_60_male: 13179, age_45_60_female: 259, age_45_60_total: 13438, age_60_above_male: 671, age_60_above_female: 30, age_60_above_total: 701, total_male: 104854, total_female: 1649, total_arrests: 106503 },
  { sl_no: 6, city: "Ghaziabad (Uttar Pradesh)", juv_boys: 0, juv_girls: 0, juv_total: 0, age_18_30_male: 633, age_18_30_female: 8, age_18_30_total: 641, age_30_45_male: 1170, age_30_45_female: 16, age_30_45_total: 1186, age_45_60_male: 509, age_45_60_female: 9, age_45_60_total: 518, age_60_above_male: 0, age_60_above_female: 0, age_60_above_total: 0, total_male: 2312, total_female: 33, total_arrests: 2345 },
  { sl_no: 7, city: "Hyderabad (Telangana)", juv_boys: 249, juv_girls: 0, juv_total: 249, age_18_30_male: 1832, age_18_30_female: 88, age_18_30_total: 1920, age_30_45_male: 1777, age_30_45_female: 96, age_30_45_total: 1873, age_45_60_male: 763, age_45_60_female: 25, age_45_60_total: 788, age_60_above_male: 25, age_60_above_female: 0, age_60_above_total: 25, total_male: 4646, total_female: 209, total_arrests: 4855 },
  { sl_no: 8, city: "Indore (Madhya Pradesh)", juv_boys: 292, juv_girls: 16, juv_total: 308, age_18_30_male: 5430, age_18_30_female: 236, age_18_30_total: 5666, age_30_45_male: 3743, age_30_45_female: 277, age_30_45_total: 4020, age_45_60_male: 893, age_45_60_female: 104, age_45_60_total: 997, age_60_above_male: 26, age_60_above_female: 5, age_60_above_total: 31, total_male: 10384, total_female: 638, total_arrests: 11022 },
  { sl_no: 9, city: "Jaipur (Rajasthan)", juv_boys: 253, juv_girls: 2, juv_total: 255, age_18_30_male: 5716, age_18_30_female: 262, age_18_30_total: 5978, age_30_45_male: 3428, age_30_45_female: 235, age_30_45_total: 3663, age_45_60_male: 1259, age_45_60_female: 90, age_45_60_total: 1349, age_60_above_male: 96, age_60_above_female: 11, age_60_above_total: 107, total_male: 10752, total_female: 600, total_arrests: 11352 },
  { sl_no: 10, city: "Kanpur (Uttar Pradesh)", juv_boys: 19, juv_girls: 0, juv_total: 19, age_18_30_male: 4434, age_18_30_female: 51, age_18_30_total: 4485, age_30_45_male: 3098, age_30_45_female: 23, age_30_45_total: 3121, age_45_60_male: 814, age_45_60_female: 8, age_45_60_total: 822, age_60_above_male: 0, age_60_above_female: 0, age_60_above_total: 0, total_male: 8365, total_female: 82, total_arrests: 8447 },
  { sl_no: 11, city: "Kochi (Kerala)", juv_boys: 29, juv_girls: 2, juv_total: 31, age_18_30_male: 3014, age_18_30_female: 23, age_18_30_total: 3037, age_30_45_male: 3537, age_30_45_female: 84, age_30_45_total: 3621, age_45_60_male: 1210, age_45_60_female: 67, age_45_60_total: 1277, age_60_above_male: 94, age_60_above_female: 17, age_60_above_total: 111, total_male: 7884, total_female: 193, total_arrests: 8077 },
  { sl_no: 12, city: "Kolkata (West Bengal)", juv_boys: 100, juv_girls: 5, juv_total: 105, age_18_30_male: 7554, age_18_30_female: 1499, age_18_30_total: 9053, age_30_45_male: 10308, age_30_45_female: 1631, age_30_45_total: 11939, age_45_60_male: 4729, age_45_60_female: 762, age_45_60_total: 5491, age_60_above_male: 679, age_60_above_female: 80, age_60_above_total: 759, total_male: 23370, total_female: 3977, total_arrests: 27347 },
  { sl_no: 13, city: "Kozhikode (Kerala)", juv_boys: 11, juv_girls: 0, juv_total: 11, age_18_30_male: 839, age_18_30_female: 21, age_18_30_total: 860, age_30_45_male: 769, age_30_45_female: 43, age_30_45_total: 812, age_45_60_male: 314, age_45_60_female: 23, age_45_60_total: 337, age_60_above_male: 85, age_60_above_female: 11, age_60_above_total: 96, total_male: 2018, total_female: 98, total_arrests: 2116 },
  { sl_no: 14, city: "Lucknow (Uttar Pradesh)", juv_boys: 104, juv_girls: 1, juv_total: 105, age_18_30_male: 5176, age_18_30_female: 15, age_18_30_total: 5191, age_30_45_male: 3093, age_30_45_female: 10, age_30_45_total: 3103, age_45_60_male: 1367, age_45_60_female: 7, age_45_60_total: 1374, age_60_above_male: 26, age_60_above_female: 0, age_60_above_total: 26, total_male: 9766, total_female: 33, total_arrests: 9799 },
  { sl_no: 15, city: "Mumbai (Maharashtra)", juv_boys: 353, juv_girls: 0, juv_total: 353, age_18_30_male: 27833, age_18_30_female: 861, age_18_30_total: 28694, age_30_45_male: 18024, age_30_45_female: 940, age_30_45_total: 18964, age_45_60_male: 5364, age_45_60_female: 300, age_45_60_total: 5664, age_60_above_male: 476, age_60_above_female: 37, age_60_above_total: 513, total_male: 52050, total_female: 2138, total_arrests: 54188 },
  { sl_no: 16, city: "Nagpur (Maharashtra)", juv_boys: 328, juv_girls: 3, juv_total: 331, age_18_30_male: 7248, age_18_30_female: 249, age_18_30_total: 7497, age_30_45_male: 5263, age_30_45_female: 361, age_30_45_total: 5624, age_45_60_male: 1529, age_45_60_female: 112, age_45_60_total: 1641, age_60_above_male: 112, age_60_above_female: 6, age_60_above_total: 118, total_male: 14480, total_female: 731, total_arrests: 15211 },
  { sl_no: 17, city: "Patna (Bihar)", juv_boys: 24, juv_girls: 0, juv_total: 24, age_18_30_male: 3991, age_18_30_female: 142, age_18_30_total: 4133, age_30_45_male: 1270, age_30_45_female: 177, age_30_45_total: 1447, age_45_60_male: 729, age_45_60_female: 208, age_45_60_total: 937, age_60_above_male: 0, age_60_above_female: 0, age_60_above_total: 0, total_male: 6014, total_female: 527, total_arrests: 6541 },
  { sl_no: 18, city: "Pune (Maharashtra)", juv_boys: 343, juv_girls: 2, juv_total: 345, age_18_30_male: 9711, age_18_30_female: 290, age_18_30_total: 10001, age_30_45_male: 6110, age_30_45_female: 362, age_30_45_total: 6472, age_45_60_male: 2296, age_45_60_female: 184, age_45_60_total: 2480, age_60_above_male: 199, age_60_above_female: 49, age_60_above_total: 248, total_male: 18659, total_female: 887, total_arrests: 19546 },
  { sl_no: 19, city: "Surat (Gujarat)", juv_boys: 412, juv_girls: 0, juv_total: 412, age_18_30_male: 20287, age_18_30_female: 282, age_18_30_total: 20569, age_30_45_male: 14887, age_30_45_female: 314, age_30_45_total: 15201, age_45_60_male: 5890, age_45_60_female: 216, age_45_60_total: 6106, age_60_above_male: 479, age_60_above_female: 76, age_60_above_total: 555, total_male: 41955, total_female: 888, total_arrests: 42843 }
];

// App State
const state = {
  selectedGender: 'all',
  selectedAge: 'all',
  selectedCities: RAW_METRO_DATA.map(d => d.city),
  searchQuery: ''
};

// Chart References
let pyramidChartInstance = null;
let scatterChartInstance = null;

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  renderCityCheckboxes();
  renderRawTable();
  initEventListeners();
  updateDashboard();
});

// Sidebar Drawer Control
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const openBtn = document.getElementById('openSidebarBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');

  function openDrawer() {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
  }

  function closeDrawer() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
  }

  openBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
}

// Render City Selection Checkboxes
function renderCityCheckboxes() {
  const container = document.getElementById('cityCheckboxList');
  container.innerHTML = '';

  const filtered = RAW_METRO_DATA.filter(d => 
    d.city.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  filtered.forEach(d => {
    const label = document.createElement('label');
    label.className = 'checkbox-item';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = d.city;
    input.checked = state.selectedCities.includes(d.city);

    input.addEventListener('change', () => {
      if (input.checked) {
        if (!state.selectedCities.includes(d.city)) state.selectedCities.push(d.city);
      } else {
        state.selectedCities = state.selectedCities.filter(c => c !== d.city);
      }
      updateDashboard();
    });

    const span = document.createElement('span');
    span.textContent = d.city;

    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
  });
}

// Event Listeners
function initEventListeners() {
  // Gender Filter
  document.getElementById('genderSelect').addEventListener('change', (e) => {
    state.selectedGender = e.target.value;
    updateDashboard();
  });

  // Age Filter
  document.getElementById('ageSelect').addEventListener('change', (e) => {
    state.selectedAge = e.target.value;
    updateDashboard();
  });

  // City Search
  document.getElementById('citySearch').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderCityCheckboxes();
  });

  // Select All Cities
  document.getElementById('selectAllCities').addEventListener('click', () => {
    state.selectedCities = RAW_METRO_DATA.map(d => d.city);
    renderCityCheckboxes();
    updateDashboard();
  });

  // Clear All Cities
  document.getElementById('clearAllCities').addEventListener('click', () => {
    state.selectedCities = [];
    renderCityCheckboxes();
    updateDashboard();
  });

  // View Tab Toggling
  const visualTab = document.getElementById('viewVisualTab');
  const rawTab = document.getElementById('viewRawTab');
  const visualSection = document.getElementById('visualSection');
  const rawSection = document.getElementById('rawSection');

  visualTab.addEventListener('click', () => {
    visualTab.classList.add('active');
    rawTab.classList.remove('active');
    visualSection.classList.remove('hidden');
    rawSection.classList.add('hidden');
  });

  rawTab.addEventListener('click', () => {
    rawTab.classList.add('active');
    visualTab.classList.remove('active');
    rawSection.classList.remove('hidden');
    visualSection.classList.add('hidden');
  });

  // CSV Download
  document.getElementById('downloadCsvBtn').addEventListener('click', exportCsv);
}

// Main Update Routine
function updateDashboard() {
  // Update header count badge & sidebar stats
  const totalArrests = state.selectedCities.reduce((sum, cityName) => {
    const item = RAW_METRO_DATA.find(d => d.city === cityName);
    return sum + (item ? item.total_arrests : 0);
  }, 0);

  document.getElementById('activeBadge').textContent = state.selectedCities.length;
  document.getElementById('activeCitiesCount').textContent = `${state.selectedCities.length} / ${RAW_METRO_DATA.length}`;
  document.getElementById('activeArrestsCount').textContent = totalArrests.toLocaleString('en-IN');

  const label = document.getElementById('pyramidSelectionLabel');
  if (state.selectedCities.length === RAW_METRO_DATA.length) {
    label.textContent = "All 19 Metropolitan Cities";
  } else if (state.selectedCities.length === 1) {
    label.textContent = state.selectedCities[0];
  } else {
    label.textContent = `${state.selectedCities.length} Selected Jurisdictions`;
  }

  renderPyramidChart();
  renderScatterChart();
  renderIntegrityTable();
  updateAlt();
}

// 1. Age-Gender Funnel Pyramid (Mirrored horizontal bars)
function renderPyramidChart() {
  const ctx = document.getElementById('ageGenderPyramidChart').getContext('2d');

  // Filtered dataset
  const activeData = RAW_METRO_DATA.filter(d => state.selectedCities.includes(d.city));

  const ageBrackets = [
    { label: 'Juveniles (<18)', mKey: 'juv_boys', fKey: 'juv_girls' },
    { label: '18–30 yrs', mKey: 'age_18_30_male', fKey: 'age_18_30_female' },
    { label: '30–45 yrs', mKey: 'age_30_45_male', fKey: 'age_30_45_female' },
    { label: '45–60 yrs', mKey: 'age_45_60_male', fKey: 'age_45_60_female' },
    { label: '60+ yrs', mKey: 'age_60_above_male', fKey: 'age_60_above_female' }
  ];

  const maleCounts = ageBrackets.map(b => {
    if (state.selectedGender === 'female') return 0;
    return activeData.reduce((sum, d) => sum + d[b.mKey], 0);
  });

  const femaleCounts = ageBrackets.map(b => {
    if (state.selectedGender === 'male') return 0;
    return activeData.reduce((sum, d) => sum + d[b.fKey], 0);
  });

  // Male on negative x-axis for mirrored presentation
  const maleChartData = maleCounts.map(v => -v);

  if (pyramidChartInstance) pyramidChartInstance.destroy();

  pyramidChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ageBrackets.map(b => b.label),
      datasets: [
        {
          label: 'Male',
          data: maleChartData,
          backgroundColor: '#0072B2',
          borderRadius: 4
        },
        {
          label: 'Female',
          data: femaleCounts,
          backgroundColor: '#D55E00',
          borderRadius: 4
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: '\u2190 Male (count)  |  Female (count) \u2192', font: { size: 12 } },
          stacked: true,
          grid: { color: '#f1f5f9' },
          ticks: {
            callback: (val) => Math.abs(val).toLocaleString('en-IN'),
            font: { size: 12 }
          }
        },
        y: {
          stacked: true,
          grid: { display: false },
          ticks: { font: { size: 12, weight: 500 } }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: { boxWidth: 12, font: { size: 12 } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${Math.abs(ctx.raw).toLocaleString('en-IN')} arrests`
          }
        }
      }
    }
  });
}

// Shared helpers: which group does the scatter show?
const BRACKETS = {
  juv: { label: 'Juveniles (<18)', m: 'juv_boys', f: 'juv_girls', t: 'juv_total' },
  '18_30': { label: 'Aged 18-30', m: 'age_18_30_male', f: 'age_18_30_female', t: 'age_18_30_total' },
  '30_45': { label: 'Aged 30-45', m: 'age_30_45_male', f: 'age_30_45_female', t: 'age_30_45_total' },
  '45_60': { label: 'Aged 45-60', m: 'age_45_60_male', f: 'age_45_60_female', t: 'age_45_60_total' },
  '60_above': { label: 'Aged 60+', m: 'age_60_above_male', f: 'age_60_above_female', t: 'age_60_above_total' }
};
function cohortCount(d) {
  const g = state.selectedGender, a = state.selectedAge;
  if (a === 'all') return g === 'female' ? d.total_female : g === 'male' ? d.total_male : d.juv_total;
  const b = BRACKETS[a];
  return g === 'female' ? d[b.f] : g === 'male' ? d[b.m] : d[b.t];
}
function cohortLabel() {
  const g = state.selectedGender, a = state.selectedAge;
  if (a === 'all') return g === 'female' ? 'Women' : g === 'male' ? 'Men' : 'Juveniles (<18)';
  return (g === 'all' ? '' : (g === 'female' ? 'Female ' : 'Male ')) + BRACKETS[a].label;
}
function pct(n, d) { return d > 0 ? n / d * 100 : 0; }
function allCityAverage() {
  return pct(RAW_METRO_DATA.reduce((s, d) => s + cohortCount(d), 0), RAW_METRO_DATA.reduce((s, d) => s + d.total_arrests, 0));
}

// 2. Volume vs Share (scatter) with 19-city average line and city labels
function renderScatterChart() {
  const ctx = document.getElementById('outliersScatterChart').getContext('2d');
  const activeData = RAW_METRO_DATA.filter(d => state.selectedCities.includes(d.city));
  const avg = allCityAverage();
  const pts = activeData.map(d => ({ x: d.total_arrests, y: +pct(cohortCount(d), d.total_arrests).toFixed(2), cityName: d.city.split(' (')[0], zero: cohortCount(d) === 0 }));
  const lab = cohortLabel();
  document.getElementById('scatterTitle').textContent = `Volume vs. Share: ${lab}`;
  document.getElementById('scatterSubtitle').textContent = `Gross arrests (across) vs. ${lab} as % of each city's arrests (up). Dashed line = 19-city average (${avg.toFixed(2)}%). Diamonds = zero recorded.`;
  const guide = { id: 'guide', afterDatasetsDraw(chart) {
    const { ctx, chartArea: ca, scales: { x, y } } = chart;
    ctx.save(); ctx.strokeStyle = '#0f172a'; ctx.setLineDash([6, 4]); ctx.lineWidth = 1.5;
    const yy = y.getPixelForValue(avg); ctx.beginPath(); ctx.moveTo(ca.left, yy); ctx.lineTo(ca.right, yy); ctx.stroke();
    ctx.setLineDash([]); ctx.fillStyle = '#0f172a'; ctx.font = '12px sans-serif';
    pts.forEach(p => ctx.fillText(p.cityName, x.getPixelForValue(p.x) + 7, y.getPixelForValue(p.y) - 6));
    ctx.restore(); } };
  if (scatterChartInstance) scatterChartInstance.destroy();
  scatterChartInstance = new Chart(ctx, {
    type: 'scatter', plugins: [guide],
    data: { datasets: [{ label: 'Metropolitan Cities', data: pts, backgroundColor: '#334155', pointRadius: 5, hoverRadius: 8,
      pointStyle: pts.map(p => p.zero ? 'rectRot' : 'circle') }] },
    options: { responsive: true, maintainAspectRatio: false, layout: { padding: { right: 60, top: 14 } },
      scales: {
        x: { type: 'logarithmic', title: { display: true, text: 'Gross arrests (log scale)', font: { size: 12 } },
             ticks: { font: { size: 12 }, callback: v => [100, 1000, 10000, 100000].includes(v) ? v.toLocaleString('en-IN') : '' } },
        y: { beginAtZero: true, title: { display: true, text: `${lab} (% of city arrests)`, font: { size: 12 } }, ticks: { font: { size: 12 } } } },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `${c.raw.cityName}: ${c.raw.x.toLocaleString('en-IN')} arrests, ${c.raw.y}% (avg ${avg.toFixed(2)}%)` } } } }
  });
}

// 3. Reporting check: zero / very low counts (symbol + number, never colour alone)
function renderIntegrityTable() {
  const cell = v => v === 0 ? `<td class="cell-zero">&#9873; 0</td>` : v < 10 ? `<td class="cell-low">&#9661; ${v}</td>` : `<td>${v.toLocaleString('en-IN')}</td>`;
  const rows = RAW_METRO_DATA.filter(d => state.selectedCities.includes(d.city))
    .map(d => ({ d, n: [d.juv_girls, d.juv_total, d.age_60_above_total].filter(v => v < 10).length }))
    .sort((a, b) => b.n - a.n || a.d.city.localeCompare(b.d.city));
  document.getElementById('integrityBody').innerHTML = rows.map(({ d }) =>
    `<tr><th scope="row">${d.city.split(' (')[0]}</th>${cell(d.juv_girls)}${cell(d.juv_total)}${cell(d.age_60_above_total)}</tr>`).join('');
}

// Text alternatives for the charts (kept in sync with filters)
function updateAlt() {
  const act = RAW_METRO_DATA.filter(d => state.selectedCities.includes(d.city));
  const sum = k => act.reduce((s, d) => s + d[k], 0);
  const m = sum('total_male'), f = sum('total_female');
  document.getElementById('pyramidAlt').textContent = `Age and sex pyramid for ${act.length} cities. Male arrests by age: under 18 ${sum('juv_boys')}, 18-30 ${sum('age_18_30_male')}, 30-45 ${sum('age_30_45_male')}, 45-60 ${sum('age_45_60_male')}, 60 and above ${sum('age_60_above_male')}. Female: ${sum('juv_girls')}, ${sum('age_18_30_female')}, ${sum('age_30_45_female')}, ${sum('age_45_60_female')}, ${sum('age_60_above_female')}. Women are ${pct(f, m + f).toFixed(1)}% of these arrests.`;
  const top = act.map(d => ({ n: d.city.split(' (')[0], p: pct(cohortCount(d), d.total_arrests) })).sort((a, b) => b.p - a.p).slice(0, 3);
  document.getElementById('scatterAlt').textContent = `Scatter plot of arrest volume against ${cohortLabel()} share of each city's arrests; 19-city average ${allCityAverage().toFixed(2)}%. Highest shares: ${top.map(t => `${t.n} ${t.p.toFixed(2)}%`).join(', ') || 'no cities selected'}.`;
}

// Render Raw Tabular Data
function renderRawTable() {
  const tbody = document.getElementById('rawTableBody');
  tbody.innerHTML = '';

  RAW_METRO_DATA.forEach(d => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${d.city}</strong></td>
      <td>${d.total_arrests.toLocaleString('en-IN')}</td>
      <td>${d.total_male.toLocaleString('en-IN')}</td>
      <td>${d.total_female.toLocaleString('en-IN')}</td>
      <td>${d.juv_total.toLocaleString('en-IN')}</td>
      <td>${d.age_18_30_total.toLocaleString('en-IN')}</td>
      <td>${d.age_30_45_total.toLocaleString('en-IN')}</td>
      <td>${d.age_45_60_total.toLocaleString('en-IN')}</td>
      <td>${d.age_60_above_total.toLocaleString('en-IN')}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Export Table as CSV
function exportCsv() {
  const headers = ["City", "Total Arrests", "Male", "Female", "Juveniles (<18)", "18-30 yrs", "30-45 yrs", "45-60 yrs", "60+ yrs"];
  const rows = RAW_METRO_DATA.map(d => [
    `"${d.city}"`,
    d.total_arrests,
    d.total_male,
    d.total_female,
    d.juv_total,
    d.age_18_30_total,
    d.age_30_45_total,
    d.age_45_60_total,
    d.age_60_above_total
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'NCRB_2020_Table19B2_Metropolitan_Arrests.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}