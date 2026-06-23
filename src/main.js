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
  partners: ['Brokers', 'Fintechs', 'Communities', 'Distribution Partners'],
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
  '/partners/africa-trades': {
    name: 'Africa Trades',
    domain: 'africa.trades',
    eyebrow: 'AFRICA.TRADES',
    headline: 'A focused gateway for Africa Trades.',
    subtext:
      'A dedicated partner entry point for Africa Trades users entering DORA through a simple public gateway.',
    bottomLine:
      'AFRICA.TRADES / PARTNER GATEWAY / POWERED BY DORA / MARKET ACCESS / PUBLIC ENTRY POINT',
    ctaLabel: 'Request Access',
    ctaMeta: 'Research, data, and relationship-led access.',
    ctaHref: 'mailto:contact@africa.trades',
    accent: '#79d8a5',
    variant: 'africa',
    metrics: [
      ['Gateway', 'Africa Trades'],
      ['Access', 'DORA entry point'],
      ['Status', 'Ready for page copy'],
    ],
  },
}

const africaTrades = {
  markets: [
    ['FX', 'Currency context across selected African markets.', 'Market watch'],
    ['Commodities', 'Coverage of key export flows, pricing context, and corridors.', 'Research coverage'],
    ['Sovereign Debt', 'Macro, issuance, and sovereign risk notes for institutional readers.', 'Research coverage'],
    ['Trade Finance', 'Signals around working capital, invoices, and cross-border settlement.', 'Coming soon'],
    ['Infrastructure', 'Long-horizon project finance and regional development context.', 'Market watch'],
    ['Private Credit', 'Relationship-led visibility into private market opportunities.', 'Coming soon'],
  ],
  values: [
    [
      'Market Research',
      'Curated briefs on African macro, sector trends, sovereign risk, and capital flows.',
    ],
    [
      'Trade Flow Intelligence',
      'Context around commodities, corridors, cross-border flows, and regional market fragmentation.',
    ],
    [
      'Capital Access',
      'Relationship-led access to private opportunities, partners, and market participants.',
    ],
  ],
  audiences: [
    ['Investors', 'Evaluate African market exposure with better context and fewer blind spots.'],
    ['Operators', 'Track trade corridors, counterparties, and regional market dynamics.'],
    ['Analysts', 'Use curated research inputs for macro, sector, and risk work.'],
    ['Institutions', 'Understand fragmented markets before pursuing relationship-led access.'],
  ],
  methods: [
    'Verified sources',
    'Regional context',
    'Long-term market view',
    'No broad public offering language',
  ],
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
        <strong>MAXOS</strong>
      </div>
      <div class="trust-copy">
        <p class="eyebrow">Trust layer</p>
        <h2 id="maxos-trust-title">A cleaner layer for modern asset access.</h2>
        <p>
          Maxos brings a more selective front end to the long-term shift toward transparent,
          efficient, and composable ownership models, with DORA supporting the execution path beneath
          the experience.
        </p>
      </div>
      <div class="trust-lines">
        <span>Gateway layer</span>
        <span>Structured access</span>
        <span>Modern digital execution</span>
        <span>Built for distribution</span>
      </div>
    </section>

    <section class="maxos-section maxos-partners" aria-labelledby="maxos-partners-title">
      <div>
        <p class="eyebrow">For partners</p>
        <h2 id="maxos-partners-title">Bring curated RWA access to your users.</h2>
      </div>
      <div class="partner-panel">
        <p>
          Maxos helps brokers, fintechs, communities, and distribution partners offer selected
          real-world asset opportunities through a premium gateway experience powered by DORA.
        </p>
        <div class="partner-tags">
          ${maxosLanding.partners.map((label) => `<span>${label}</span>`).join('')}
        </div>
        <a class="secondary-cta" href="${partner.ctaHref}" rel="noopener noreferrer">Discuss Partner Access</a>
      </div>
    </section>

    <section class="maxos-section maxos-close" aria-labelledby="maxos-close-title">
      <p class="eyebrow">Next step</p>
      <h2 id="maxos-close-title">Enter the Maxos gateway.</h2>
      <p>Start with a focused path into modern private-market access.</p>
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

function renderAfricaTradesLanding(partner) {
  document.title = 'Africa.Trades | African Markets Intelligence'
  document.documentElement.style.setProperty('--accent', partner.accent)

  return `
    <main class="africa-page">
      <header class="africa-header">
        <a class="africa-wordmark" href="/partners/africa-trades" aria-label="Africa.Trades home">
          Africa.Trades
        </a>
        <nav class="africa-nav" aria-label="Africa.Trades navigation">
          <a href="#markets">Markets</a>
          <a href="#research">Research</a>
          <a href="#access">Access</a>
          <a href="#about">About</a>
        </nav>
        <a class="africa-button africa-button-primary" href="${partner.ctaHref}">Request Access</a>
      </header>

      <section class="africa-hero" aria-labelledby="africa-title">
        <div class="africa-hero-copy">
          <p class="africa-eyebrow">African Markets Intelligence</p>
          <h1 id="africa-title">Research, data, and access for African markets.</h1>
          <p>
            Africa.Trades helps investors, operators, and institutions understand fragmented
            African markets through curated research, verified data, and relationship-led access.
          </p>
          <div class="africa-actions">
            <a class="africa-button africa-button-primary" href="${partner.ctaHref}">Request Access</a>
            <a class="africa-button africa-button-secondary" href="#market-brief">View Market Brief</a>
          </div>
        </div>
        <aside class="africa-hero-panel" aria-label="Platform focus">
          <span>Coverage focus</span>
          <strong>Trade flows, capital markets, and regional context.</strong>
          <dl>
            <div><dt>Scope</dt><dd>African markets</dd></div>
            <div><dt>Model</dt><dd>Research-led</dd></div>
            <div><dt>Access</dt><dd>Relationship-based</dd></div>
          </dl>
        </aside>
      </section>

      <section class="africa-market-strip" id="markets" aria-label="Market snapshot">
        ${africaTrades.markets
          .map(
            ([title, description, status]) => `
              <article>
                <span>${status}</span>
                <h2>${title}</h2>
                <p>${description}</p>
              </article>
            `,
          )
          .join('')}
      </section>

      <section class="africa-section" id="research" aria-labelledby="value-title">
        <div class="africa-section-heading">
          <p class="africa-eyebrow">Platform</p>
          <h2 id="value-title">Built for serious market participants.</h2>
        </div>
        <div class="africa-value-grid">
          ${africaTrades.values
            .map(
              ([title, description]) => `
                <article>
                  <h3>${title}</h3>
                  <p>${description}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="africa-brief" id="market-brief" aria-labelledby="brief-title">
        <div>
          <p class="africa-eyebrow">Latest Market Brief</p>
          <h2 id="brief-title">African capital flows are becoming more strategic, but still under-covered.</h2>
        </div>
        <article>
          <span>Market Brief / May 2026</span>
          <p>
            Regional capital formation is increasingly shaped by commodities, infrastructure needs,
            sovereign risk, and private credit demand. Yet reliable market context remains uneven,
            creating a gap for research-led participants.
          </p>
          <a class="africa-text-link" href="${partner.ctaHref}">Read Brief</a>
        </article>
      </section>

      <section class="africa-section africa-audience" id="access" aria-labelledby="audience-title">
        <div class="africa-section-heading">
          <p class="africa-eyebrow">Who it is for</p>
          <h2 id="audience-title">Designed for teams that need context before access.</h2>
        </div>
        <div class="africa-audience-grid">
          ${africaTrades.audiences
            .map(
              ([title, description]) => `
                <article>
                  <h3>${title}</h3>
                  <p>${description}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="africa-method" id="about" aria-labelledby="method-title">
        <div>
          <p class="africa-eyebrow">Methodology</p>
          <h2 id="method-title">Research first. Access second.</h2>
        </div>
        <div class="africa-method-list">
          ${africaTrades.methods.map((method) => `<span>${method}</span>`).join('')}
        </div>
      </section>

      <footer class="africa-footer">
        <div>
          <strong>Africa.Trades</strong>
          <p>
            Africa.Trades is an informational and research platform. Nothing on this site is
            investment advice or an offer to buy or sell securities.
          </p>
        </div>
        <nav aria-label="Africa.Trades footer">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#about">Legal</a>
          <a href="${partner.ctaHref}">Contact</a>
        </nav>
      </footer>
    </main>
  `
}

function renderGateway(partner) {
  document.title = `${partner.domain} | ${partner.ctaLabel}`
  document.documentElement.style.setProperty('--accent', partner.accent)
  const isMaxos = partner.variant === 'rwa'
  const isPolytrade = partner.variant === 'abstract'

  if (partner.variant === 'africa') {
    return renderAfricaTradesLanding(partner)
  }

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
                  `
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
          <a class="directory-card" href="/partners/africa-trades">
            <strong>Africa Trades</strong>
            <span>africa.trades</span>
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
