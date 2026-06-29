import { headlineSets } from './bondDeskNews.js'

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
  '/partners/duration': {
    name: 'Duration',
    domain: 'duration.io',
    eyebrow: 'DURATION.IO',
    headline: 'Market infrastructure for tokenized fixed income.',
    subtext:
      'Access tokenized bonds, real-world assets, and duration-based markets through a Duration gateway powered by DORA.',
    bottomLine:
      'DURATION.IO / TOKENIZED FIXED INCOME / RWA MARKETS / DORA-POWERED EXECUTION',
    ctaLabel: 'Launch App',
    ctaMeta: 'Tokenized fixed-income access. DORA-powered execution.',
    ctaHref: DORA_URL,
    accent: '#9fb7ff',
    variant: 'rwa',
    metrics: [
      ['Market Access', 'Tokenized bonds and RWAs'],
      ['Execution', 'DORA gateway flow'],
      ['Infrastructure', 'Duration-based markets'],
    ],
  },
  '/partners/africa-trades': {
    name: 'Africa Trades',
    domain: 'africa.trades',
    eyebrow: 'AFRICA.TRADES',
    headline: 'Global bond markets, accessible from Africa.',
    subtext:
      'Access bond trading infrastructure through a clean gateway built for African market participants.',
    bottomLine:
      'AFRICA.TRADES / GLOBAL BOND MARKETS / FIXED-INCOME ACCESS / AFRICA',
    ctaLabel: 'Launch App',
    ctaMeta: 'Fixed-income access for African market participants.',
    ctaHref: DORA_URL,
    accent: '#79d8a5',
    variant: 'africa',
    metrics: [
      ['Gateway', 'africa.trades'],
      ['Access', 'Global bond markets'],
      ['Audience', 'African market participants'],
    ],
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
  document.title = 'africa.trades | Fixed-Income Access'
  document.documentElement.style.setProperty('--accent', partner.accent)

  const signals = ['Bonds', 'Fixed Income', 'Market Access']
  const contactHref = 'mailto:contact@africa.trades'

  return `
    <main class="africa-page">
      <header class="africa-header">
        <a class="africa-wordmark" href="/partners/africa-trades" aria-label="Africa.Trades home">
          africa.trades
        </a>
        <nav class="africa-nav" aria-label="Africa.Trades navigation">
          <a href="#markets">Markets</a>
          <a href="#about">About</a>
          <a href="${contactHref}">Contact</a>
        </nav>
        <a class="africa-button africa-button-primary" href="${partner.ctaHref}" rel="noopener noreferrer">Launch App</a>
      </header>

      <section class="africa-hero" aria-labelledby="africa-title">
        <div class="africa-hero-copy">
          <p class="africa-eyebrow">FIXED-INCOME ACCESS</p>
          <h1 id="africa-title">Global bond markets, accessible from Africa.</h1>
          <p>
            Access bond trading infrastructure through a clean gateway built for African market participants.
          </p>
          <div class="africa-actions">
            <a class="africa-button africa-button-primary" href="${partner.ctaHref}" rel="noopener noreferrer">Launch App</a>
            <a class="africa-button africa-button-secondary" href="#markets">Explore Markets</a>
          </div>
        </div>
      </section>

      <section class="africa-signal-row" id="markets" aria-label="Market access labels">
        ${signals.map((signal) => `<span>${signal}</span>`).join('')}
      </section>

      <footer class="africa-footer" id="about">
        <div>
          <strong>africa.trades</strong>
          <p>Informational only.</p>
        </div>
        <nav aria-label="Africa.Trades footer">
          <a href="#about">About</a>
          <a href="${contactHref}">Contact</a>
        </nav>
      </footer>
    </main>
  `
}

let bondDeskActiveSetIndex = 0

function renderBondDeskHeadlinesPreview() {
  document.title = 'BondDesk Headlines Prototype'
  document.documentElement.style.setProperty('--accent', '#f0c45a')
  const activeSet = headlineSets[bondDeskActiveSetIndex]

  return `
    <main class="bond-headlines-preview">
      ${renderBondDeskHeadlinesSection(activeSet)}
    </main>
  `
}

function getFeaturedBondDeskHeadlines(headlines) {
  return headlines
    .filter((article) => article.featured)
    .sort((a, b) => {
      const priorityDelta = (a.priority ?? 999) - (b.priority ?? 999)
      return priorityDelta || Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
    })
}


function renderBondDeskHeadlinesSection(headlineSet) {
  const featuredHeadlines = getFeaturedBondDeskHeadlines(headlineSet?.headlines ?? [])

  return `
    <section class="bond-headlines-section" aria-labelledby="bond-headlines-title">
      <div class="bond-headlines-header">
        <div>
          <h1 id="bond-headlines-title">Bond Market Headlines</h1>
          <p>Curated fixed-income coverage from major market sources.</p>
        </div>
        <div class="bond-headlines-actions">
          <button class="bond-headlines-button" type="button" data-bond-headlines-refresh>
            Refresh selection
          </button>
          <p class="bond-headlines-status" data-bond-headlines-status>
            Updated: latest curated set
          </p>
        </div>
      </div>
      <div class="bond-headlines-block">
        <h2>Top Stories</h2>
        <div class="bond-featured-grid">
          ${renderBondDeskHeadlineCards(featuredHeadlines, 'featured')}
        </div>
      </div>
    </section>
  `
}

function renderBondDeskHeadlineCards(headlines, variant = 'standard') {
  return headlines
    .map((article) => {
      const cardClass = `bond-headline-card ${variant === 'featured' ? 'bond-headline-card-featured' : ''}`
      const cardContent = `
          <div class="bond-headline-meta">
            <span>${article.source}</span>
            <span>${article.category}</span>
          </div>
          <h3>${article.title}</h3>
          <p class="bond-headline-summary">${article.summary}</p>
          <div class="bond-headline-footer">
            <span>${article.timeLabel}</span>
          </div>
      `

      if (article.url) {
        return `
        <a class="${cardClass} bond-headline-card-link" href="${article.url}" target="_blank" rel="noopener noreferrer" data-headline-id="${article.id}">
          ${cardContent}
        </a>
      `
      }

      return `
        <article class="${cardClass}" data-headline-id="${article.id}">
          ${cardContent}
        </article>
      `
    })
    .join('')
}

function initBondDeskHeadlineRotation() {
  const button = document.querySelector('[data-bond-headlines-refresh]')
  const section = document.querySelector('.bond-headlines-section')
  const status = document.querySelector('[data-bond-headlines-status]')

  if (!button || !section || !status || headlineSets.length === 0) {
    return
  }

  let isLoading = false

  button.addEventListener('click', () => {
    if (isLoading) {
      return
    }

    isLoading = true
    button.disabled = true
    button.textContent = 'Refreshing selection...'

    window.setTimeout(() => {
      bondDeskActiveSetIndex = (bondDeskActiveSetIndex + 1) % headlineSets.length
      section.outerHTML = renderBondDeskHeadlinesSection(headlineSets[bondDeskActiveSetIndex])
      initBondDeskHeadlineRotation()
      const nextStatus = document.querySelector('[data-bond-headlines-status]')
      if (nextStatus) {
        nextStatus.textContent = 'Updated: just now'
      }
      isLoading = false
    }, 650)
  })
}

function renderGateway(partner) {
  document.title = `${partner.domain} | ${partner.ctaLabel}`
  document.documentElement.style.setProperty('--accent', partner.accent)
  const isMaxos = partner.domain === 'maxos.trade'
  const isPolytrade = partner.domain === 'polytrade.capital'

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
          <a class="directory-card" href="/partners/duration">
            <strong>Duration</strong>
            <span>duration.io</span>
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
const isBondDeskHeadlinesPreview = path === '/partners/bonddesk'

app.innerHTML = isBondDeskHeadlinesPreview
  ? renderBondDeskHeadlinesPreview()
  : partner
    ? renderGateway(partner)
    : path === ''
      ? renderIndex()
      : renderNotFound()

if (isBondDeskHeadlinesPreview) {
  initBondDeskHeadlineRotation()
}
