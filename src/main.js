const DORA_URL = 'https://dora-prod.vercel.app/auth/sign-in'

const maxosLanding = {
  categories: [
    ['Tokenized Bonds', 'Fixed-income exposure represented for modern digital access.', 'CURATED INCOME'],
    ['Private Credit', 'Selective credit opportunities with cleaner access and context.', 'STRUCTURED FLOW'],
    ['Collectibles', 'Cultural and collectible markets made easier to evaluate and enter.', 'FRACTIONAL ACCESS'],
    ['Alternative Assets', 'A broader gateway to off-chain value moving into digital form.', 'RWA EXPANSION'],
  ],
  pillars: [
    [
      'Curated RWA access',
      'Maxos is designed around selective opportunities, not endless listings. The experience narrows attention toward real-world asset categories that deserve a premium access layer.',
    ],
    [
      'Premium experience',
      'A focused gateway keeps discovery, context, and entry clean. Maxos should feel closer to a private-market front desk than a noisy trading venue.',
    ],
    [
      'DORA-powered execution',
      'DORA provides the infrastructure beneath the gateway, helping Maxos connect a polished partner experience to modern digital market execution.',
    ],
  ],
  steps: [
    ['Explore curated RWA opportunities', 'Start with a focused set of tokenized bonds, credit, collectibles, and alternative asset categories.'],
    ['Review context and access details', 'Understand the asset type, market framing, and gateway path before moving forward.'],
    ['Enter through the Maxos gateway', 'Launch into a DORA-powered flow built for modern private-market access.'],
  ],
  partners: ['Brokers', 'Fintechs', 'Communities', 'Distribution partners'],
}

const partners = {
  '/partners/maxos': {
    name: 'Maxos',
    domain: 'maxos.trade',
    eyebrow: 'MAXOS.TRADE',
    headline: 'Real-world assets, curated for access.',
    subtext:
      'Access tokenized bonds, collectibles, and alternative assets through a Maxos gateway powered by DORA.',
    bottomLine:
      'CURATED ACCESS / TOKENIZED BONDS / COLLECTIBLES / ALTERNATIVE ASSETS / DORA-POWERED EXECUTION / MAXOS.TRADE',
    ctaLabel: 'Launch App',
    ctaMeta: 'Private market access. DORA-powered execution.',
    ctaHref: DORA_URL,
    accent: '#d7b46a',
    variant: 'rwa',
    metrics: [
      ['Tokenized Bonds', 'Curated income access'],
      ['Collectibles', 'Fractionalized cultural markets'],
      ['Alternative Assets', 'Private-market gateway'],
    ],
    labels: ['CURATED ACCESS', 'DORA POWERED', 'MAXOS GATEWAY'],
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

function renderMaxosLanding(partner) {
  return `
    <section class="maxos-section maxos-rwa" aria-labelledby="maxos-rwa-title">
      <div class="section-kicker">RWA gateway</div>
      <div class="section-split">
        <div>
          <p class="eyebrow">Curated real-world assets</p>
          <h2 id="maxos-rwa-title">A selective entry point into tokenized real-world value.</h2>
        </div>
        <p class="section-lede">
          Maxos gives users a premium way to access real-world asset opportunities spanning traditional
          and off-chain markets represented in modern digital form.
        </p>
      </div>
      <div class="rwa-category-grid">
        ${maxosLanding.categories
          .map(
            ([title, description, tag], index) => `
              <article class="rwa-category category-${index + 1}">
                <span>${tag}</span>
                <h3>${title}</h3>
                <p>${description}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="maxos-section maxos-why" aria-labelledby="maxos-why-title">
      <div class="why-copy">
        <p class="eyebrow">Why Maxos</p>
        <h2 id="maxos-why-title">Built for RWA access that feels considered, credible, and premium.</h2>
        <p>
          Tokenization is changing how ownership, settlement, and access are packaged across asset
          categories. Maxos turns that shift into a cleaner gateway experience for users and partners.
        </p>
      </div>
      <div class="why-pillars">
        ${maxosLanding.pillars
          .map(
            ([title, description], index) => `
              <article>
                <small>0${index + 1}</small>
                <h3>${title}</h3>
                <p>${description}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="maxos-section maxos-access" aria-labelledby="maxos-access-title">
      <div class="access-panel">
        <p class="eyebrow">How access works</p>
        <h2 id="maxos-access-title">A direct path from discovery to gateway entry.</h2>
        <div class="access-steps">
          ${maxosLanding.steps
            .map(
              ([title, description], index) => `
                <article>
                  <span>${index + 1}</span>
                  <div>
                    <h3>${title}</h3>
                    <p>${description}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="maxos-section maxos-trust" aria-labelledby="maxos-trust-title">
      <div class="trust-object" aria-hidden="true">
        <span></span>
        <strong>DORA</strong>
      </div>
      <div class="trust-copy">
        <p class="eyebrow">Infrastructure layer</p>
        <h2 id="maxos-trust-title">Structured RWA access, powered by DORA.</h2>
        <p>
          Maxos sits inside the long-term movement toward more transparent, efficient, and composable
          models for ownership and access. DORA powers the execution layer beneath the premium gateway.
        </p>
      </div>
      <div class="trust-lines">
        <span>Powered by DORA</span>
        <span>Structured RWA access</span>
        <span>Modern digital execution</span>
        <span>Next-generation value exchange</span>
      </div>
    </section>

    <section class="maxos-section maxos-partners" aria-labelledby="maxos-partners-title">
      <div>
        <p class="eyebrow">For partners</p>
        <h2 id="maxos-partners-title">A premium front-end layer for RWA distribution.</h2>
      </div>
      <div class="partner-panel">
        <p>
          Brokers, fintechs, communities, and distribution partners can use Maxos as a focused gateway
          brand for curated RWA opportunities without building a noisy marketplace from scratch.
        </p>
        <div class="partner-tags">
          ${maxosLanding.partners.map((label) => `<span>${label}</span>`).join('')}
        </div>
        <a class="secondary-cta" href="${partner.ctaHref}" rel="noopener noreferrer">Explore Integration</a>
      </div>
    </section>

    <section class="maxos-section maxos-close" aria-labelledby="maxos-close-title">
      <p class="eyebrow">Maxos gateway</p>
      <h2 id="maxos-close-title">Curated assets, ready to access.</h2>
      <p>Enter a premium RWA gateway for tokenized bonds, collectibles, credit, and alternative assets.</p>
      <a class="primary-cta" href="${partner.ctaHref}" rel="noopener noreferrer">
        ${partner.ctaLabel}
        <span aria-hidden="true">-></span>
      </a>
      <footer>
        <span>${partner.domain}</span>
        <span>Powered by DORA</span>
      </footer>
    </section>
  `
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
      ${isMaxos ? renderMaxosLanding(partner) : ''}
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
