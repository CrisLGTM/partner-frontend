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
