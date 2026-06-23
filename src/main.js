const DORA_URL = 'https://dora-prod.vercel.app/auth/sign-in'

const partners = {
  '/partners/maxos': {
    name: 'Maxos',
    domain: 'maxos.trade',
    accent: '#d7b46a',
    tone: 'rwa',
    eyebrow: 'Curated RWA gateway',
    headline: 'Real-world assets, routed through DORA.',
    subtext:
      'A premium partner entry point for tokenized bonds, private credit, collectibles, and alternative market access.',
    stats: [
      ['Gateway', 'RWA access'],
      ['Focus', 'Curated markets'],
      ['Flow', 'DORA execution'],
    ],
    featureTitle: 'Built for selective access, not noisy discovery.',
    features: [
      'Focused partner landing experience for Maxos users.',
      'Clear positioning for tokenized real-world asset categories.',
      'Direct launch path into the DORA authentication flow.',
    ],
    markets: ['Tokenized bonds', 'Private credit', 'Collectibles', 'Alternative assets'],
  },
  '/partners/polytrade': {
    name: 'Polytrade',
    domain: 'polytrade.capital',
    accent: '#69e6cf',
    tone: 'markets',
    eyebrow: 'Digital market gateway',
    headline: 'Markets move. Capital follows.',
    subtext:
      'A fast partner gateway for users entering tokenized markets and digital asset flows through DORA.',
    stats: [
      ['Access', 'Multi-market'],
      ['Routing', 'Live gateway'],
      ['Powered by', 'DORA'],
    ],
    featureTitle: 'A sharp front door for active market users.',
    features: [
      'Clean public page for Polytrade partner traffic.',
      'Market-led visual language with active routing cues.',
      'One primary CTA that sends users into the app.',
    ],
    markets: ['FX', 'Tokenized bonds', 'RWAs', 'Digital markets'],
  },
  '/partners/duration': {
    name: 'Duration',
    domain: 'Duration',
    accent: '#9fb7ff',
    tone: 'duration',
    eyebrow: 'Time-aware gateway',
    headline: 'Timing matters. Access should follow.',
    subtext:
      'A dedicated partner gateway for Duration users entering DORA with a clean path from signal to action.',
    stats: [
      ['Partner', 'Duration'],
      ['Scope', 'Tokenized fixed income'],
      ['Flow', 'DORA access'],
    ],
    featureTitle: 'A direct gateway for partner traffic that needs clarity and speed.',
    features: [
      'Dedicated public route for Duration partner users.',
      'Focused landing copy with a single launch path into DORA.',
      'Static GitHub-ready implementation with fallback routing support.',
    ],
    markets: ['Timing', 'Signals', 'Workflow', 'DORA gateway'],
  },
  '/partners/bonddesk': {
    name: 'BondDesk',
    domain: 'BondDesk',
    accent: '#78b9ff',
    tone: 'bonddesk',
    eyebrow: 'Fixed-income gateway',
    headline: 'Bond access, routed through DORA.',
    subtext:
      'A dedicated market desk for users exploring supported fixed-income markets and activity through DORA.',
    stats: [
      ['Partner', 'BondDesk'],
      ['Focus', 'Fixed income'],
      ['Flow', 'DORA access'],
    ],
    featureTitle: 'A direct front door for bond-market partner traffic.',
    features: [
      'Dedicated public route for BondDesk users.',
      'Fixed-income positioning aligned with supported DORA markets.',
      'Single launch path into the DORA authentication flow.',
    ],
    markets: ['Supported bonds', 'Yield curve', 'Market activity', 'DORA gateway'],
  },
}

function normalizePath() {
  return window.location.pathname.replace(/\/$/, '')
}

function renderShell(content, tone = 'index') {
  return `
    <main class="site site-${tone}">
      <div class="grid-backdrop" aria-hidden="true"></div>
      ${content}
    </main>
  `
}

function renderNav(partner) {
  return `
    <nav class="nav" aria-label="Partner navigation">
      <a class="brand" href="/" aria-label="DORA partner gateways home">
        <span class="brand-mark">${partner ? partner.name.charAt(0) : 'D'}</span>
        <span>
          <strong>${partner ? partner.name : 'DORA'}</strong>
          <small>${partner ? partner.domain : 'Partner gateways'}</small>
        </span>
      </a>
      <a class="nav-action" href="${DORA_URL}" rel="noopener noreferrer">Launch App</a>
    </nav>
  `
}

function renderGateway(partner) {
  document.title = `${partner.name} | DORA Partner Gateway`
  document.documentElement.style.setProperty('--accent', partner.accent)

  if (partner.tone === 'duration') {
    return renderDurationInstitutional(partner)
  }

  if (partner.tone === 'bonddesk') {
    return renderBondDesk()
  }

  return renderShell(
    `
      ${renderNav(partner)}
      <section class="hero" aria-labelledby="gateway-title">
        <div class="hero-copy">
          <p class="eyebrow">${partner.eyebrow}</p>
          <h1 id="gateway-title">${partner.headline}</h1>
          <p class="lede">${partner.subtext}</p>
          <div class="hero-actions">
            <a class="primary-action" href="${DORA_URL}" rel="noopener noreferrer">
              Launch App
              <span aria-hidden="true">-></span>
            </a>
            <span>Powered by DORA</span>
          </div>
        </div>

        <div class="gateway-visual" aria-hidden="true">
          <div class="signal-card signal-main">
            <span>${partner.domain}</span>
            <strong>${partner.name}</strong>
            <small>DORA gateway active</small>
          </div>
          ${partner.stats
            .map(
              ([label, value], index) => `
                <div class="signal-card signal-${index + 1}">
                  <span>${label}</span>
                  <strong>${value}</strong>
                </div>
              `,
            )
            .join('')}
          <div class="signal-ring"></div>
        </div>
      </section>

      <section class="content-band" aria-labelledby="features-title">
        <div>
          <p class="eyebrow">Partner experience</p>
          <h2 id="features-title">${partner.featureTitle}</h2>
        </div>
        <div class="feature-list">
          ${partner.features
            .map(
              (feature, index) => `
                <article>
                  <span>0${index + 1}</span>
                  <p>${feature}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="market-strip" aria-label="Supported market categories">
        ${partner.markets.map((market) => `<span>${market}</span>`).join('')}
      </section>

      <section class="closing" aria-labelledby="closing-title">
        <p class="eyebrow">Next step</p>
        <h2 id="closing-title">Enter the ${partner.name} gateway.</h2>
        <a class="primary-action" href="${DORA_URL}" rel="noopener noreferrer">
          Launch App
          <span aria-hidden="true">-></span>
        </a>
      </section>
    `,
    partner.tone,
  )
}

function renderBondDesk() {
  document.title = 'DORA Markets | Fixed-Income Explorer'
  document.documentElement.style.setProperty('--accent', '#1f6feb')

  const tickerItems = [
    ['UST 2Y', '4.71%', '-1 bp', 'down'],
    ['UST 10Y', '4.28%', '+3 bps', 'up'],
    ['Active Bonds', '128', '+4', 'up'],
    ['DORA Markets', '24', 'live', 'flat'],
    ['Latest Tx', 'NVDA 2050', '2 min ago', 'flat'],
    ['24H Transactions', '1,842', '+8.1%', 'up'],
  ]

  const bondRows = [
    ['NVDA 2050', 'Nvidia', '8.92%', '79.20', '2050', '$2.1M', '2 min ago', '+24 bps', 'up'],
    ['AAPL 2032', 'Apple', '5.41%', '96.80', '2032', '$860K', '9 min ago', '-6 bps', 'down'],
    ['TSLA 2029', 'Tesla', '7.36%', '88.40', '2029', '$1.4M', '14 min ago', '+11 bps', 'up'],
    ['MSTR 2030', 'MicroStrategy', '9.18%', '76.50', '2030', '$720K', '21 min ago', '+42 bps', 'up'],
    ['AMC 2028', 'AMC', '10.24%', '72.10', '2028', '$510K', '27 min ago', '+31 bps', 'up'],
    ['MSFT 2033', 'Microsoft', '4.92%', '98.35', '2033', '$690K', '33 min ago', '-3 bps', 'down'],
    ['GOOGL 2030', 'Alphabet', '5.08%', '97.10', '2030', '$760K', '41 min ago', '+2 bps', 'up'],
    ['AMZN 2031', 'Amazon', '5.36%', '95.90', '2031', '$830K', '52 min ago', '-4 bps', 'down'],
  ]

  const latestActivity = [
    ['NVDA 2050', 'Last tx 2 min ago', '$2.1M 24H activity', 'flat'],
    ['MSTR 2030', 'Last tx 21 min ago', '+42 bps', 'up'],
    ['AAPL 2032', 'Last tx 9 min ago', '-6 bps', 'down'],
  ]

  const poolGroups = [
    ['Highest Yield Pools', 'MSTR 2030', '9.18% YTM', '$720K activity'],
    ['Largest Liquidity Pools', 'NVDA 2050', '8.92% YTM', '$2.1M activity'],
    ['Featured Pools', 'TSLA 2029', '7.36% YTM', '$1.4M activity'],
    ['Near-Term Maturities', 'AAPL 2032', '5.41% YTM', '$860K activity'],
  ]

  const updates = [
    [
      'Market Brief',
      'Treasury yields steady as traders wait for Fed signals',
      'Rates remain range-bound as investors monitor inflation data, Treasury issuance, and longer-duration demand.',
      '18 min ago',
    ],
    [
      'Curve Watch',
      'What the 2Y/10Y curve is signaling this week',
      'Front-end rates remain elevated while the long end moves on issuance and growth expectations.',
      '34 min ago',
    ],
    [
      'DORA Activity',
      'Large-cap issuer markets lead recent bond activity',
      'Recent DORA market activity remains concentrated around NVDA, AAPL, TSLA, and MSTR maturities.',
      '1 hr ago',
    ],
  ]

  // Curve paths use frontend placeholder data until live per-asset curve data is available.
  return `
    <main class="bond-desk">
      <header class="bd-header">
        <a class="bd-wordmark" href="/partners/bonddesk" aria-label="DORA Markets home">
          <strong>DORA Markets</strong>
        </a>
        <nav class="bd-nav" aria-label="DORA Markets navigation">
          <a href="#overview">Overview</a>
          <a href="#briefs">Market Briefs</a>
          <a href="#yield-curve">Yield Curves</a>
          <a href="#watchlist">Watchlist</a>
          <a href="#explorer">Explorer</a>
        </nav>
        <form class="bd-search" role="search">
          <label class="sr-only" for="bd-search-input">Search bonds, issuers, markets, transactions</label>
          <input id="bd-search-input" type="search" placeholder="Search bonds, issuers, markets, transactions" />
        </form>
        <a class="bd-primary" href="${DORA_URL}" rel="noopener noreferrer">Launch App</a>
      </header>

      <section class="bd-ticker" aria-label="Market ticker">
        ${tickerItems
          .map(
            ([label, value, change, direction]) => `
              <div class="bd-ticker-item">
                <span>${label}</span>
                <strong>${value}</strong>
                <em class="bd-${direction}">${change}</em>
              </div>
            `,
          )
          .join('')}
      </section>

      <div class="bd-shell">
        <section class="bd-product-intro" aria-label="DORA Markets overview">
          <div>
            <span>DORA fixed-income explorer</span>
            <h1>Live bond markets, yield context, and DORA activity in one public desk.</h1>
          </div>
          <p>
            Monitor supported bond markets, scan active issuers, review rate context, and launch
            into DORA when you are ready to trade.
          </p>
        </section>

        <section class="bd-main-grid" id="markets" aria-label="DORA market overview">
          <article class="bd-panel bd-brief" hidden>
            <div class="bd-panel-kicker">Market Briefs</div>
            <h1>DORA market notes for rates, issuers, and activity.</h1>
            <p>
              Supporting context for active DORA bond markets, yield curve movement,
              and notable issuer activity.
            </p>
            <div class="bd-meta">Market Brief • 5 min read • Updated 12 min ago</div>
            <div class="bd-story-links">
              <span>What the 2Y/10Y curve is signaling this week</span>
              <span>Which DORA bond markets are seeing the most activity</span>
            </div>
          </article>

          <section class="bd-panel bd-market-table" aria-labelledby="live-bond-market-title">
            <div class="bd-panel-header">
              <h2 id="live-bond-market-title">Live DORA Markets</h2>
            </div>
            <div class="bd-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Market</th>
                    <th>Issuer</th>
                    <th>YTM</th>
                    <th>Price</th>
                    <th>Maturity</th>
                    <th>24H Activity</th>
                    <th>Last Tx</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  ${bondRows
                    .map(
                      ([bond, issuer, ytm, price, maturity, activity, lastTx, change, direction]) => `
                        <tr>
                          <td><strong>${bond}</strong></td>
                          <td>${issuer}</td>
                          <td class="bd-ytm">${ytm}</td>
                          <td>${price}</td>
                          <td>${maturity}</td>
                          <td>${activity}</td>
                          <td>${lastTx}</td>
                          <td class="bd-${direction}">${change}</td>
                        </tr>
                      `,
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </section>

          <aside class="bd-sidebar" aria-label="Rates, watchlist, and market activity">
            <section class="bd-side-card">
              <h2>Rates Snapshot</h2>
              <dl>
                <div><dt>Fed Funds Target</dt><dd>5.25% - 5.50%</dd></div>
                <div><dt>2Y / 10Y Curve</dt><dd>-43 bps</dd></div>
                <div><dt>Market Mood</dt><dd>Neutral</dd></div>
                <div><dt>Duration Bias</dt><dd>Short</dd></div>
              </dl>
            </section>
            <section class="bd-side-card" id="watchlist">
              <h2>Watchlist</h2>
              <div class="bd-watchlist">
                <div><strong>NVDA 2050</strong><span>8.92% YTM</span><em class="bd-up">+24 bps</em></div>
                <div><strong>AAPL 2032</strong><span>5.41% YTM</span><em class="bd-down">-6 bps</em></div>
                <div><strong>TSLA 2029</strong><span>7.36% YTM</span><em class="bd-up">+11 bps</em></div>
                <div><strong>MSTR 2030</strong><span>9.18% YTM</span><em class="bd-up">+42 bps</em></div>
              </div>
            </section>
            <section class="bd-side-card" id="explorer">
              <h2>Latest Market Activity</h2>
              <div class="bd-activity-list">
                ${latestActivity
                  .map(
                    ([market, lastTx, detail, direction]) => `
                      <div>
                        <strong>${market}</strong>
                        <span>${lastTx}</span>
                        <em class="bd-${direction}">${detail}</em>
                      </div>
                    `,
                  )
                  .join('')}
              </div>
            </section>
          </aside>
        </section>

        <section class="bd-section" id="overview" aria-labelledby="pool-overview-title">
          <div class="bd-section-heading">
            <h2 id="pool-overview-title">Markets Overview</h2>
          </div>
          <div class="bd-pool-grid">
            ${poolGroups
              .map(
                ([label, market, ytm, activity]) => `
                  <article class="bd-pool-card">
                    <span>${label}</span>
                    <strong>${market}</strong>
                    <dl>
                      <div><dt>Yield</dt><dd>${ytm}</dd></div>
                      <div><dt>24H Activity</dt><dd>${activity}</dd></div>
                    </dl>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>

        <section class="bd-split-section">
          <article class="bd-panel bd-yield-panel" id="yield-curve">
            <div class="bd-panel-header">
              <h2>Multi-Asset Yield Curves</h2>
            </div>
            <div class="bd-curve-controls" aria-label="Displayed assets">
              <span>AMC</span>
              <span>MSTR</span>
              <span>TSLA</span>
              <span>NVDA</span>
            </div>
            <div class="bd-curve-chart" aria-label="Multi-asset yield curve preview">
              <span class="bd-axis-y">Yield %</span>
              <svg viewBox="0 0 620 260" role="img" aria-labelledby="bd-curve-title">
                <title id="bd-curve-title">Yield curves from 1Y to 10Y for AMC, MSTR, TSLA, and NVDA</title>
                <path class="bd-chart-grid" d="M42 52H580M42 112H580M42 172H580M42 232H580"></path>
                <path class="bd-curve-line bd-curve-amc" d="M52 188 C136 172 202 154 266 132 C346 104 430 86 572 70"></path>
                <path class="bd-curve-line bd-curve-mstr" d="M52 156 C138 142 204 126 268 104 C358 80 438 66 572 52"></path>
                <path class="bd-curve-line bd-curve-tsla" d="M52 206 C138 188 214 166 286 146 C372 120 452 104 572 92"></path>
                <path class="bd-curve-line bd-curve-nvda" d="M52 176 C144 158 224 140 302 116 C386 92 466 78 572 64"></path>
              </svg>
              <div class="bd-maturities"><span>1Y</span><span>2Y</span><span>3Y</span><span>5Y</span><span>7Y</span><span>10Y</span></div>
              <span class="bd-axis-x">Maturity</span>
            </div>
            <div class="bd-curve-legend" aria-label="Curve legend">
              <span><i class="bd-legend-amc"></i>AMC</span>
              <span><i class="bd-legend-mstr"></i>MSTR</span>
              <span><i class="bd-legend-tsla"></i>TSLA</span>
              <span><i class="bd-legend-nvda"></i>NVDA</span>
            </div>
          </article>
        </section>

        <section class="bd-section bd-briefs-section" id="briefs" aria-labelledby="market-briefs-title">
          <div class="bd-section-heading">
            <h2 id="market-briefs-title">Market Briefs</h2>
          </div>
          <div class="bd-update-grid">
            ${updates
              .map(
                ([category, title, summary, timestamp]) => `
                  <article class="bd-update-card">
                    <span>${category}</span>
                    <h3>${title}</h3>
                    <p>${summary}</p>
                    <small>${timestamp}</small>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      </div>

      <footer class="bd-footer">
        <div>
          <strong>DORA Markets</strong>
          <p>Fixed-income market data, yield context, transaction activity, and access to DORA bond markets.</p>
        </div>
        <nav aria-label="DORA Markets footer">
          <a href="#overview">Overview</a>
          <a href="#briefs">Market Briefs</a>
          <a href="#markets">Markets</a>
          <a href="${DORA_URL}" rel="noopener noreferrer">Launch App</a>
        </nav>
      </footer>
    </main>
  `
}

function renderDurationInstitutional(partner) {
  document.title = 'Duration | Tokenized Fixed Income Infrastructure'
  document.documentElement.style.setProperty('--accent', '#86a7b6')

  const proofPoints = [
    ['MARKET ACCESS', 'Tokenized bonds & RWAs'],
    ['EXECUTION', 'AMM + order book model'],
    ['LIQUIDITY', 'Pool-based market structure'],
    ['PARTNERS', 'Gateway infrastructure'],
  ]

  return renderShell(
    `
      <header class="duration-header">
        <a class="duration-wordmark" href="/partners/duration" aria-label="Duration home">
          <strong>Duration</strong>
        </a>
        <nav class="duration-nav" aria-label="Duration navigation">
          <a href="#platform">Platform</a>
          <a href="#platform">Markets</a>
          <a href="#platform">Research</a>
          <a href="#company">Company</a>
        </nav>
        <a class="duration-nav-cta" href="${DORA_URL}" rel="noopener noreferrer">Launch App</a>
      </header>

      <section class="duration-hero" aria-labelledby="duration-title">
        <div class="duration-hero-copy">
          <p class="duration-eyebrow">INSTITUTIONAL TOKENIZED MARKET INFRASTRUCTURE</p>
          <h1 id="duration-title">Market infrastructure for tokenized fixed income.</h1>
          <p>
            Duration provides institutional access, execution, and liquidity infrastructure for tokenized bonds,
            real-world assets, and duration-based markets.
          </p>
          <div class="duration-actions">
            <a class="duration-primary" href="${DORA_URL}" rel="noopener noreferrer">Launch App</a>
          </div>
        </div>

        <div class="duration-market-visual" aria-label="Abstract fixed-income market infrastructure visualization">
            <div class="yield-panel">
              <div class="yield-panel-header">
              <span>MARKET VIEW</span>
              <strong>Tokenized fixed income</strong>
            </div>
            <div class="yield-chart" aria-hidden="true">
              <span class="chart-label yield-label">Yield curve</span>
              <span class="chart-label liquidity-label">Liquidity</span>
              <svg viewBox="0 0 520 260" role="presentation" focusable="false">
                <path class="chart-grid-line" d="M32 54H488"></path>
                <path class="chart-grid-line" d="M32 118H488"></path>
                <path class="chart-grid-line" d="M32 182H488"></path>
                <path class="duration-curve duration-curve-base" d="M36 195 C130 164 173 92 247 112 C322 132 361 76 486 56"></path>
                <path class="duration-curve duration-curve-alt" d="M36 210 C126 190 191 139 264 147 C343 154 396 105 486 88"></path>
                <circle class="curve-point p-1" cx="126" cy="164" r="4"></circle>
                <circle class="curve-point p-2" cx="247" cy="112" r="4"></circle>
                <circle class="curve-point p-3" cx="361" cy="76" r="4"></circle>
                <circle class="curve-point p-4" cx="486" cy="56" r="4"></circle>
              </svg>
              <div class="liquidity-bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="maturity-ladder" aria-hidden="true">
              <div><span>3M</span></div>
              <div><span>2Y</span></div>
              <div><span>5Y</span></div>
              <div><span>10Y</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="duration-proof" aria-label="Platform proof points">
        ${proofPoints
          .map(
            ([label, body]) => `
              <article>
                <span>${label}</span>
                <p>${body}</p>
              </article>
            `,
          )
          .join('')}
      </section>

      <section class="duration-brief" id="platform" aria-labelledby="duration-brief-title">
        <div>
          <span>Platform scope</span>
          <h2 id="duration-brief-title">Access, execution, and liquidity infrastructure for professional tokenized markets.</h2>
        </div>
        <p>
          Duration is positioned for institutional participants evaluating tokenized bonds,
          real-world assets, AMM and order book execution, and partner gateway infrastructure.
        </p>
      </section>

      <section class="duration-final" id="request-access" aria-labelledby="duration-final-title">
        <div class="closing-linework" aria-hidden="true">
          <span></span>
          <span></span>
        </div>
        <div>
          <p class="duration-eyebrow">Access</p>
          <h2 id="duration-final-title">Access tokenized fixed-income markets through Duration.</h2>
          <p>A professional gateway for tokenized assets, liquidity, and market infrastructure.</p>
        </div>
        <div class="duration-actions">
          <a class="duration-primary" href="${DORA_URL}" rel="noopener noreferrer">Launch App</a>
        </div>
      </section>

      <footer class="duration-footer" id="company">
        <div class="footer-brand">
          <a class="duration-wordmark" href="/partners/duration" aria-label="Duration home">
            <strong>Duration</strong>
          </a>
          <p>Duration provides institutional infrastructure for tokenized fixed-income and real-world asset markets.</p>
        </div>
        <div class="footer-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Risk Disclosures</a></div>
        <p class="footer-copy">Copyright Duration. All rights reserved.</p>
      </footer>
    `,
    'duration duration-landing',
  )
}

function renderIndex() {
  document.title = 'DORA Partner Gateways'
  document.documentElement.style.setProperty('--accent', '#69e6cf')

  return renderShell(
    `
      ${renderNav()}
      <section class="directory" aria-labelledby="directory-title">
        <p class="eyebrow">DORA partner gateways</p>
        <h1 id="directory-title">Public launch pages for partner traffic.</h1>
        <p class="lede">
          Choose a gateway to preview the GitHub-ready static website and route users into DORA.
        </p>
        <div class="directory-grid">
          ${Object.entries(partners)
            .map(
              ([path, partner]) => `
                <a class="directory-card" href="${path}">
                  <span>${partner.domain}</span>
                  <strong>${partner.name}</strong>
                  <small>${partner.eyebrow}</small>
                </a>
              `,
            )
            .join('')}
        </div>
      </section>
    `,
    'index',
  )
}

function renderNotFound() {
  document.title = 'Gateway not found'
  document.documentElement.style.setProperty('--accent', '#69e6cf')

  return renderShell(
    `
      ${renderNav()}
      <section class="directory" aria-labelledby="not-found-title">
        <p class="eyebrow">404</p>
        <h1 id="not-found-title">Partner gateway not found.</h1>
        <p class="lede">Use the gateway directory to choose an available partner route.</p>
        <a class="primary-action" href="/">View Gateways</a>
      </section>
    `,
    'index',
  )
}

const app = document.querySelector('#app')
const path = normalizePath()
const partner = partners[path]

app.innerHTML = partner ? renderGateway(partner) : path === '' ? renderIndex() : renderNotFound()
