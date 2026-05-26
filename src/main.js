const DORA_URL = 'https://dora-prod.vercel.app/auth/sign-in'

const partners = {
  '/partners/maxos': {
    name: 'Maxos',
    domain: 'maxos.trade',
    eyebrow: 'MAXOS.TRADE',
    headline: 'Real-world assets, ready to trade.',
    subtext:
      'Access tokenized bonds, collectibles, and alternative assets through a Maxos gateway powered by DORA.',
    bottomLine:
      'TOKENIZED BONDS / COLLECTIBLES / ALTERNATIVE ASSETS / POWERED BY DORA / MAXOS.TRADE',
    ctaLabel: 'Launch App',
    ctaMeta: 'PRIVATE MARKET ACCESS, DORA-POWERED EXECUTION.',
    ctaHref: DORA_URL,
    accent: '#d7b46a',
    variant: 'rwa',
    metrics: [
      ['Tokenized Bonds', 'Fixed-income access'],
      ['Collectibles', 'Fractionalized markets'],
      ['Alternative Assets', 'Trade beyond crypto'],
    ],
    labels: ['MARKET ACCESS', 'DORA ROUTED', 'LIVE GATEWAY'],
  },
  '/partners/polytrade': {
    name: 'Polytrade',
    domain: 'polytrade.capital',
    eyebrow: 'POLYTRADE.CAPITAL',
    headline: 'Markets move. Capital follows.',
    subtext:
      'Access digital markets, tokenized assets, and new trading opportunities through a Polytrade gateway powered by DORA.',
    bottomLine:
      'EUR/USD +0.24% / US10Y 4.31% / TOKENIZED BONDS / PRIVATE CREDIT / COLLECTIBLES / RWA MARKETS / POWERED BY DORA',
    ctaLabel: 'Launch App',
    heroCtaLabel: 'Launch App',
    ctaMeta: 'MULTI-MARKET ACCESS. ROUTED THROUGH DORA.',
    ctaHref: DORA_URL,
    accent: '#7cf1d3',
    variant: 'abstract',
    metrics: ['Tokenized Bonds', 'FX / EURUSD', 'RWAs', 'Collectibles', 'Private Credit', 'Digital Markets'],
    labels: ['EUR/USD 1.0842', 'US10Y 4.31%', 'RWA INDEX +1.8%', 'BTC 68,420', 'FLOW ACTIVE', 'LIVE ROUTING'],
  },
}

function getPartner() {
  const path = window.location.pathname.replace(/\/$/, '')
  return partners[path] ?? null
}

function renderGateway(partner) {
  document.title = `${partner.domain} | ${partner.ctaLabel}`
  document.documentElement.style.setProperty('--accent', partner.accent)
  const isMaxos = partner.variant === 'rwa'
  const isPolytrade = partner.variant === 'abstract'

  return `
    <main class="gateway gateway-${partner.variant}">
      ${isMaxos || isPolytrade ? '<div class="grain"></div><div class="particle-field"></div>' : ''}
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>
      <section class="hero ${isPolytrade ? 'poly-hero' : ''}" aria-labelledby="gateway-title">
        <nav class="topbar ${isPolytrade ? 'poly-topbar' : ''}" aria-label="Partner">
          <a class="brand" href="/" aria-label="DORA partner gateways">
            <span class="brand-mark">${partner.name.charAt(0)}</span>
            <span>
              <strong>${partner.name}</strong>
              <small>${partner.domain}</small>
            </span>
          </a>
          <a class="nav-cta" href="${partner.ctaHref}" rel="noopener noreferrer">${partner.ctaLabel}</a>
        </nav>

        <div class="hero-grid">
          <div class="copy">
            <p class="eyebrow">${partner.eyebrow ?? partner.domain}</p>
            ${
              isPolytrade
                ? `<h1 id="gateway-title" class="animated-headline">
                    <span>Markets move.</span>
                    <span>Capital follows.</span>
                  </h1>`
                : `<h1 id="gateway-title">${partner.headline}</h1>`
            }
            <p class="subtext">${partner.subtext}</p>
            <a class="primary-cta" href="${partner.ctaHref}" rel="noopener noreferrer">
              ${partner.heroCtaLabel ?? partner.ctaLabel}
              <span aria-hidden="true">-></span>
            </a>
            ${partner.ctaMeta ? `<p class="cta-meta">${partner.ctaMeta}</p>` : ''}
          </div>

          <div class="visual" aria-hidden="true">
            ${
              isMaxos
                ? `<div class="orbital">
                    <span></span>
                    <span></span>
                    <span></span>
                    <b></b><b></b><b></b>
                  </div>
                  <div class="gateway-core">
                    <span></span>
                    <strong>DORA ROUTED</strong>
                  </div>
                  <div class="micro-labels">
                    ${partner.labels.map((label) => `<em>${label}</em>`).join('')}
                  </div>`
                : ''
            }
            ${
              isPolytrade
                ? `<div class="poly-flow" aria-hidden="true">
                    <span class="flow-line flow-1"></span>
                    <span class="flow-line flow-2"></span>
                    <span class="flow-line flow-3"></span>
                    <span class="flow-line flow-4"></span>
                    <span class="flow-node node-a"></span>
                    <span class="flow-node node-b"></span>
                    <span class="flow-node node-c"></span>
                    <span class="flow-node node-d"></span>
                    <span class="flow-node node-e"></span>
                    <span class="flow-core"></span>
                  </div>`
                : `<div class="asset-stack">
                    ${partner.metrics
                      .map(
                        (metric, index) => `
                          <div class="asset-row row-${index + 1}">
                            ${
                              Array.isArray(metric)
                                ? `<span><strong>${metric[0]}</strong><small>${metric[1]}</small></span>`
                                : `<span>${metric}</span>`
                            }
                            <i></i>
                          </div>
                        `,
                      )
                      .join('')}
                  </div>`
            }
          </div>
        </div>

        ${
          isMaxos
            ? `<footer class="market-rail">
                <div>
                  <span>${partner.bottomLine}</span>
                  <span>${partner.bottomLine}</span>
                </div>
              </footer>`
            : isPolytrade
              ? `<footer class="poly-footer">
                  <span>POLYTRADE.CAPITAL</span>
                  <span>POWERED BY DORA</span>
                </footer>`
            : `<footer class="footer-line">
                <span>${partner.bottomLine}</span>
                <span>DORA partner gateway</span>
              </footer>`
        }
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
