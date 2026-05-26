const DORA_URL = 'https://dora-prod.vercel.app/auth/sign-in'

const partners = {
  '/partners/maxos': {
    name: 'Maxos',
    domain: 'maxos.trade',
    headline: 'Access real-world assets through Maxos.',
    subtext: 'A modern gateway for tokenized bonds, collectibles, and alternative assets.',
    bottomLine: 'RWAs, collectibles, and fixed income access, powered by DORA.',
    ctaHref: DORA_URL,
    accent: '#d7b46a',
    variant: 'rwa',
    metrics: ['Tokenized bonds', 'Collectibles', 'Alternative assets'],
  },
  '/partners/polytrade': {
    name: 'Polytrade',
    domain: 'polytrade.capital',
    headline: 'Trade anything, anytime.',
    subtext: 'A clean gateway to modern digital markets, powered by DORA.',
    bottomLine: 'Built for fast access to next-generation markets.',
    ctaHref: DORA_URL,
    accent: '#7cf1d3',
    variant: 'abstract',
    metrics: ['Digital markets', 'Fast access', 'Modern trading'],
  },
}

function getPartner() {
  const path = window.location.pathname.replace(/\/$/, '')
  return partners[path] ?? null
}

function renderGateway(partner) {
  document.title = `${partner.domain} | Launch DORA`
  document.documentElement.style.setProperty('--accent', partner.accent)

  return `
    <main class="gateway gateway-${partner.variant}">
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>
      <section class="hero" aria-labelledby="gateway-title">
        <nav class="topbar" aria-label="Partner">
          <a class="brand" href="/" aria-label="DORA partner gateways">
            <span class="brand-mark">${partner.name.charAt(0)}</span>
            <span>
              <strong>${partner.name}</strong>
              <small>${partner.domain}</small>
            </span>
          </a>
          <a class="nav-cta" href="${partner.ctaHref}" rel="noopener noreferrer">Launch DORA</a>
        </nav>

        <div class="hero-grid">
          <div class="copy">
            <p class="eyebrow">${partner.domain}</p>
            <h1 id="gateway-title">${partner.headline}</h1>
            <p class="subtext">${partner.subtext}</p>
            <a class="primary-cta" href="${partner.ctaHref}" rel="noopener noreferrer">
              Launch DORA
              <span aria-hidden="true">-></span>
            </a>
          </div>

          <div class="visual" aria-hidden="true">
            <div class="orbital">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="asset-stack">
              ${partner.metrics
                .map(
                  (metric, index) => `
                    <div class="asset-row row-${index + 1}">
                      <span>${metric}</span>
                      <i></i>
                    </div>
                  `,
                )
                .join('')}
            </div>
          </div>
        </div>

        <footer class="footer-line">
          <span>${partner.bottomLine}</span>
          <span>DORA partner gateway</span>
        </footer>
      </section>
    </main>
  `
}

function renderIndex() {
  document.title = 'DORA Partner Gateways'
  document.documentElement.style.setProperty('--accent', '#7cf1d3')

  return `
    <main class="gateway gateway-index">
      <section class="directory" aria-labelledby="directory-title">
        <p class="eyebrow">DORA partner gateways</p>
        <h1 id="directory-title">Choose a public partner gateway.</h1>
        <div class="directory-grid">
          <a class="directory-card" href="/partners/maxos">
            <strong>Maxos</strong>
            <span>maxos.trade</span>
          </a>
          <a class="directory-card" href="/partners/polytrade">
            <strong>Polytrade</strong>
            <span>polytrade.capital</span>
          </a>
        </div>
      </section>
    </main>
  `
}

function renderNotFound() {
  document.title = 'Gateway not found'

  return `
    <main class="gateway gateway-index">
      <section class="directory" aria-labelledby="not-found-title">
        <p class="eyebrow">404</p>
        <h1 id="not-found-title">Partner gateway not found.</h1>
        <a class="primary-cta" href="/">View gateways</a>
      </section>
    </main>
  `
}

const app = document.querySelector('#app')
const partner = getPartner()
const path = window.location.pathname.replace(/\/$/, '')

app.innerHTML = partner ? renderGateway(partner) : path === '' ? renderIndex() : renderNotFound()
