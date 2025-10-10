const lacmeData = {
  overview: {
    exports: {
      2018: 11.4,
      2019: 12.6,
      2020: 13.1,
      2021: 15.4,
      2022: 17.2,
      2023: 18.5,
    },
    imports: {
      2018: 19.7,
      2019: 20.4,
      2020: 21.8,
      2021: 23.2,
      2022: 24.1,
      2023: 25.3,
    },
    deals: {
      2018: 210,
      2019: 265,
      2020: 230,
      2021: 340,
      2022: 388,
      2023: 412,
    },
    talent: {
      2018: 920,
      2019: 980,
      2020: 1040,
      2021: 1125,
      2022: 1180,
      2023: 1235,
    },
  },
  tradeTrend: [
    { year: 2018, exports: 11.4, imports: 19.7, deals: 210 },
    { year: 2019, exports: 12.6, imports: 20.4, deals: 265 },
    { year: 2020, exports: 13.1, imports: 21.8, deals: 230 },
    { year: 2021, exports: 15.4, imports: 23.2, deals: 340 },
    { year: 2022, exports: 17.2, imports: 24.1, deals: 388 },
    { year: 2023, exports: 18.5, imports: 25.3, deals: 412 },
  ],
  sectors: [
    { sector: 'Servicios de TI', share: 32, knowledgeIntensity: 88, valueAdded: 74 },
    { sector: 'Servicios empresariales', share: 24, knowledgeIntensity: 75, valueAdded: 68 },
    { sector: 'Fintech & pagos', share: 14, knowledgeIntensity: 82, valueAdded: 72 },
    { sector: 'Contenido y creatividades', share: 12, knowledgeIntensity: 61, valueAdded: 58 },
    { sector: 'Comercio electrónico', share: 10, knowledgeIntensity: 55, valueAdded: 52 },
    { sector: 'Ciencia de datos & IA', share: 8, knowledgeIntensity: 95, valueAdded: 80 },
  ],
  countryProfiles: [
    {
      name: 'Brasil',
      lat: -15.78,
      lng: -47.93,
      exports: 6.4,
      growth: 0.12,
      deals: 118,
      talent: 410,
      startups: 42,
      highlight: 'Potencia regional en fintech y plataformas de comercio electrónico.',
    },
    {
      name: 'México',
      lat: 19.43,
      lng: -99.13,
      exports: 4.3,
      growth: 0.11,
      deals: 86,
      talent: 265,
      startups: 35,
      highlight: 'Hub nearshore con foco en software empresarial y servicios de TI.',
    },
    {
      name: 'Argentina',
      lat: -34.6,
      lng: -58.38,
      exports: 2.9,
      growth: 0.13,
      deals: 54,
      talent: 180,
      startups: 18,
      highlight: 'Fuerte dinamismo en economía del conocimiento y exportación de software.',
    },
    {
      name: 'Chile',
      lat: -33.45,
      lng: -70.67,
      exports: 1.8,
      growth: 0.09,
      deals: 38,
      talent: 92,
      startups: 14,
      highlight: 'Servicios digitales para industrias mineras y soluciones de ciberseguridad.',
    },
    {
      name: 'Colombia',
      lat: 4.71,
      lng: -74.07,
      exports: 1.9,
      growth: 0.1,
      deals: 44,
      talent: 134,
      startups: 16,
      highlight: 'Ecosistema emprendedor en logística y tecnologías financieras inclusivas.',
    },
    {
      name: 'Perú',
      lat: -12.05,
      lng: -77.05,
      exports: 0.9,
      growth: 0.08,
      deals: 24,
      talent: 68,
      startups: 9,
      highlight: 'Servicios basados en conocimiento vinculados a cadenas de valor mineras.',
    },
    {
      name: 'Costa Rica',
      lat: 9.93,
      lng: -84.08,
      exports: 0.7,
      growth: 0.07,
      deals: 17,
      talent: 44,
      startups: 6,
      highlight: 'Centro nearshore para operaciones digitales globales y servicios corporativos.',
    },
    {
      name: 'Uruguay',
      lat: -34.9,
      lng: -56.19,
      exports: 0.6,
      growth: 0.1,
      deals: 16,
      talent: 38,
      startups: 5,
      highlight: 'Estrategia país digital con especialización en software y plataformas SaaS.',
    },
  ],
};

const summaryConfig = [
  {
    key: 'exports',
    label: 'Exportaciones digitales',
    formatter: (value) => `$${value.toFixed(1)} mil MM`,
  },
  {
    key: 'imports',
    label: 'Importaciones digitales',
    formatter: (value) => `$${value.toFixed(1)} mil MM`,
  },
  {
    key: 'deals',
    label: 'Acuerdos de inversión',
    formatter: (value) => value.toLocaleString('es-ES'),
  },
  {
    key: 'talent',
    label: 'Talento tecnológico',
    formatter: (value) => `${value.toLocaleString('es-ES')} personas`,
  },
];

const colors = ['#2c7be5', '#51c4d3', '#9f7aea', '#f29d4b', '#f94181', '#2dce98'];

function buildSummaryCards() {
  const container = document.getElementById('summaryCards');
  summaryConfig.forEach((config) => {
    const card = document.createElement('article');
    card.className = 'card';

    const label = document.createElement('span');
    label.className = 'card__label';
    label.textContent = config.label;

    const value = document.createElement('span');
    value.className = 'card__value';

    const trend = document.createElement('span');
    trend.className = 'card__trend';

    card.append(label, value, trend);
    container.append(card);
    config.elements = { card, value, trend };
  });
}

function renderSummary(year) {
  summaryConfig.forEach((config) => {
    const value = lacmeData.overview[config.key][year];
    const previous = lacmeData.overview[config.key][year - 1];
    if (config.elements?.value) {
      config.elements.value.textContent = config.formatter(value);
      if (previous) {
        const change = ((value - previous) / previous) * 100;
        const arrow = change >= 0 ? '▲' : '▼';
        config.elements.trend.textContent = `${arrow} ${change >= 0 ? '+' : ''}${change.toFixed(1)}% vs ${year - 1}`;
        config.elements.trend.style.color = change >= 0 ? '#2dce98' : '#f94181';
      } else {
        config.elements.trend.textContent = '—';
        config.elements.trend.style.color = 'var(--color-muted)';
      }
    }
  });
}

function createTradeTrendChart() {
  const ctx = document.getElementById('tradeTrendChart');
  const labels = lacmeData.tradeTrend.map((d) => d.year);
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Exportaciones',
          data: lacmeData.tradeTrend.map((d) => d.exports),
          borderColor: colors[0],
          backgroundColor: 'rgba(44, 123, 229, 0.12)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointRadius: 4,
        },
        {
          label: 'Importaciones',
          data: lacmeData.tradeTrend.map((d) => d.imports),
          borderColor: colors[3],
          backgroundColor: 'rgba(242, 157, 75, 0.14)',
          borderDash: [8, 4],
          borderWidth: 3,
          tension: 0.35,
          pointRadius: 4,
        },
        {
          label: 'Acuerdos de inversión',
          data: lacmeData.tradeTrend.map((d) => d.deals),
          borderColor: colors[4],
          backgroundColor: 'rgba(249, 65, 129, 0.14)',
          borderWidth: 2,
          yAxisID: 'y1',
          tension: 0.35,
          pointStyle: 'rectRounded',
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          position: 'left',
          title: {
            display: true,
            text: 'Miles de millones USD',
          },
          grid: {
            color: 'rgba(15, 35, 70, 0.08)',
          },
        },
        y1: {
          position: 'right',
          title: {
            display: true,
            text: 'Número de acuerdos',
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          position: 'bottom',
        },
        tooltip: {
          callbacks: {
            label(context) {
              if (context.dataset.label === 'Acuerdos de inversión') {
                return `${context.dataset.label}: ${context.parsed.y}`;
              }
              return `${context.dataset.label}: $${context.parsed.y.toFixed(1)} mil MM`;
            },
          },
        },
      },
    },
  });
}

function createSectorShareChart() {
  const ctx = document.getElementById('sectorShareChart');
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: lacmeData.sectors.map((s) => s.sector),
      datasets: [
        {
          label: 'Participación %',
          data: lacmeData.sectors.map((s) => s.share),
          backgroundColor: colors,
          borderRadius: 12,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          max: 40,
          ticks: {
            callback: (value) => `${value}%`,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.parsed.x}% de las exportaciones digitales`,
          },
        },
      },
    },
  });
}

function createKnowledgeIntensityChart() {
  const ctx = document.getElementById('knowledgeIntensityChart');
  return new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: lacmeData.sectors.map((sector, index) => ({
        label: sector.sector,
        data: [
          {
            x: sector.knowledgeIntensity,
            y: sector.valueAdded,
            r: 8 + sector.share * 0.6,
          },
        ],
        backgroundColor: colors[index % colors.length],
        borderColor: 'rgba(12, 56, 117, 0.16)',
        borderWidth: 1,
      })),
    },
    options: {
      scales: {
        x: {
          min: 40,
          max: 100,
          title: {
            display: true,
            text: 'Intensidad de conocimiento (índice)',
          },
        },
        y: {
          min: 40,
          max: 90,
          title: {
            display: true,
            text: 'Valor agregado (índice)',
          },
        },
      },
      plugins: {
        legend: {
          position: 'bottom',
        },
        tooltip: {
          callbacks: {
            label(context) {
              const { raw } = context;
              return [
                context.dataset.label,
                `Intensidad: ${raw.x}`,
                `Valor agregado: ${raw.y}`,
                `Participación: ${(raw.r - 8).toFixed(1)}%`,
              ];
            },
          },
        },
      },
    },
  });
}

function buildCountryTable() {
  const tbody = document.getElementById('countryTable');
  const rows = lacmeData.countryProfiles
    .slice()
    .sort((a, b) => b.exports - a.exports);

  rows.forEach((country) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${country.name}</td>
      <td>$${country.exports.toFixed(1)}</td>
      <td>${(country.growth * 100).toFixed(1)}%</td>
      <td>${country.deals}</td>
      <td>${country.talent}</td>
    `;
    tbody.append(tr);
  });
}

function initMap() {
  const map = L.map('lacMap', {
    scrollWheelZoom: false,
    maxZoom: 6,
    minZoom: 2,
  }).setView([2.5, -64], 3.5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  const sidebar = {
    name: document.getElementById('countryName'),
    exports: document.getElementById('countryExports'),
    startups: document.getElementById('countryStartups'),
    highlight: document.getElementById('countryHighlight'),
  };

  lacmeData.countryProfiles.forEach((country) => {
    const marker = L.circleMarker([country.lat, country.lng], {
      radius: 8 + country.exports * 1.2,
      color: 'rgba(12, 56, 117, 0.9)',
      fillColor: '#2c7be5',
      weight: 1,
      fillOpacity: 0.65,
    }).addTo(map);

    marker.bindTooltip(`${country.name}: $${country.exports.toFixed(1)} mil MM`, {
      direction: 'top',
    });

    marker.on('click', () => updateCountrySidebar(country, sidebar));
  });

  updateCountrySidebar(lacmeData.countryProfiles[0], sidebar);
}

function updateCountrySidebar(country, sidebar) {
  sidebar.name.textContent = country.name;
  sidebar.exports.textContent = `$${country.exports.toFixed(1)} mil MM`;
  sidebar.startups.textContent = `${country.startups} scaleups`;
  sidebar.highlight.textContent = country.highlight;
}

function highlightTradeYear(chart, year) {
  const index = lacmeData.tradeTrend.findIndex((item) => item.year === year);
  if (index === -1) return;

  const elements = [
    { datasetIndex: 0, index },
    { datasetIndex: 1, index },
    { datasetIndex: 2, index },
  ];
  chart.setActiveElements(elements);
  chart.tooltip.setActiveElements(elements, { x: 0, y: 0 });
  chart.update();
}

function init() {
  buildSummaryCards();
  renderSummary(2023);

  const tradeChart = createTradeTrendChart();
  createSectorShareChart();
  createKnowledgeIntensityChart();
  buildCountryTable();
  initMap();

  const focusYearInput = document.getElementById('focusYear');
  const focusYearValue = document.getElementById('focusYearValue');

  focusYearInput.addEventListener('input', (event) => {
    const year = Number(event.target.value);
    focusYearValue.textContent = year;
    renderSummary(year);
    highlightTradeYear(tradeChart, year);
  });

  highlightTradeYear(tradeChart, Number(focusYearInput.value));
}

window.addEventListener('DOMContentLoaded', init);
