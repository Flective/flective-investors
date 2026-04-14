'use client'
import { useEffect } from 'react'

export default function InvestorContent() {
  useEffect(() => {
    const cur = document.getElementById('cursor') as HTMLElement | null
    const ring = document.getElementById('cursor-ring') as HTMLElement | null
    if (!cur || !ring) return

    let rx = 0, ry = 0, mx = 0, my = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const animRing = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      animId = requestAnimationFrame(animRing)
    }
    animRing()

    const enterFn = () => {
      cur.style.width = '18px'; cur.style.height = '18px'
      ring.style.width = '48px'; ring.style.height = '48px'
      ring.style.borderColor = 'rgba(201,169,110,.65)'
    }
    const leaveFn = () => {
      cur.style.width = '8px'; cur.style.height = '8px'
      ring.style.width = '32px'; ring.style.height = '32px'
      ring.style.borderColor = 'rgba(201,169,110,.4)'
    }
    const links = Array.from(document.querySelectorAll('a,button'))
    links.forEach(el => { el.addEventListener('mouseenter', enterFn); el.addEventListener('mouseleave', leaveFn) })

    const nav = document.getElementById('nav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.07 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', onScroll)
      links.forEach(el => { el.removeEventListener('mouseenter', enterFn); el.removeEventListener('mouseleave', leaveFn) })
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />

      <nav id="nav">
        <a href="/" className="nav-logo" style={{cursor:'none'}}>Flective <span>Investors</span></a>
        <ul className="nav-links">
          <li><a href="#frame">The Claim</a></li>
          <li><a href="#richness">The Opportunity</a></li>
          <li><a href="#platform">Platform</a></li>
          <li><a href="#ip">IP Position</a></li>
          <li><a href="#witness">The Founding Moment</a></li>
          <li><a href="#inquire">Inquire</a></li>
        </ul>
        <div style={{display:'flex',gap:'16px',alignItems:'center'}}>
          <a href="#inquire" className="nav-cta">Confidential Inquiry</a>
          <a href="/api/logout" className="nav-logout">Sign out</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-ornament">
          <svg viewBox="0 0 700 900" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" opacity=".55">
            <defs>
              <radialGradient id="hglow" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#c9a96e" stopOpacity=".14"/>
                <stop offset="50%" stopColor="#c9a96e" stopOpacity=".04"/>
                <stop offset="100%" stopColor="#c9a96e" stopOpacity="0"/>
              </radialGradient>
              <filter id="hblur"><feGaussianBlur stdDeviation="48"/></filter>
            </defs>
            <rect width="700" height="900" fill="url(#hglow)"/>
            <g opacity=".14" stroke="#c9a96e" strokeWidth=".6" fill="none">
              <line x1="0" y1="120" x2="700" y2="100"/><line x1="0" y1="190" x2="700" y2="170"/>
              <line x1="0" y1="260" x2="700" y2="240"/><line x1="0" y1="330" x2="700" y2="310"/>
              <line x1="0" y1="400" x2="700" y2="380"/><line x1="0" y1="470" x2="700" y2="450"/>
              <line x1="0" y1="540" x2="700" y2="520"/><line x1="0" y1="610" x2="700" y2="590"/>
              <line x1="0" y1="680" x2="700" y2="660"/><line x1="0" y1="750" x2="700" y2="730"/>
              <line x1="90" y1="0" x2="70" y2="900"/><line x1="180" y1="0" x2="160" y2="900"/>
              <line x1="270" y1="0" x2="250" y2="900"/><line x1="360" y1="0" x2="340" y2="900"/>
              <line x1="450" y1="0" x2="430" y2="900"/><line x1="540" y1="0" x2="520" y2="900"/>
              <line x1="630" y1="0" x2="610" y2="900"/>
            </g>
            <ellipse cx="280" cy="340" rx="200" ry="140" fill="rgba(201,169,110,.09)" filter="url(#hblur)"/>
            <g opacity=".55">
              <polygon points="200,280 224,292 216,316 192,304" fill="rgba(201,169,110,.4)"/>
              <polygon points="268,308 288,318 282,340 262,330" fill="rgba(226,204,158,.45)"/>
              <polygon points="224,348 244,358 238,378 218,368" fill="rgba(201,169,110,.3)"/>
              <polygon points="300,290 318,300 312,320 294,310" fill="rgba(180,160,120,.32)"/>
              <polygon points="176,336 196,344 190,362 170,354" fill="rgba(201,169,110,.38)"/>
              <polygon points="340,330 358,340 350,360 332,350" fill="rgba(226,204,158,.28)"/>
            </g>
          </svg>
        </div>
        <div className="hero-content">
          <div className="hero-overline">Investor Overview · Fiat Lux Technology LLC</div>
          <h1>A category<br/>is being<br/><em>founded.</em></h1>
          <p className="hero-lede">Computational Reflective Imaging is not a better display. It is a third branch of image formation — one that has been hiding in plain sight in the physics of reflection for as long as mirrors have existed. The question for investors is not whether it is real. The question is whether to hold a founding position while the category becomes legible.</p>
          <div className="hero-ctas">
            <a href="#frame" className="btn-primary">The Investment Case</a>
            <a href="#inquire" className="btn-ghost">Confidential Inquiry <span>→</span></a>
          </div>
        </div>
        <div className="hero-scroll"><div className="scroll-line"/><span>Scroll</span></div>
      </section>

      <div className="signal">
        <div className="sig-item reveal">
          <div className="sig-num">7</div>
          <div className="sig-label">Issued US patents</div>
          <div className="sig-note">Priority date 2009. Foundational IP covering reflective pixel imaging at the principle level.</div>
        </div>
        <div className="sig-item reveal" style={{transitionDelay:'.07s'}}>
          <div className="sig-num">3rd</div>
          <div className="sig-label">Image-forming mode</div>
          <div className="sig-note">Not print. Not screen. A third physical category — image by geometry — with no prior commercial form.</div>
        </div>
        <div className="sig-item reveal" style={{transitionDelay:'.14s'}}>
          <div className="sig-num">17</div>
          <div className="sig-label">Years of development</div>
          <div className="sig-note">Sole founder. Deep domain knowledge across optics, fabrication, IP, and commercial strategy since 2009.</div>
        </div>
        <div className="sig-item reveal" style={{transitionDelay:'.21s'}}>
          <div className="sig-num">Zero</div>
          <div className="sig-label">Power at the image surface</div>
          <div className="sig-note">The image-bearing surface contains no electronics. Its intelligence is structural, not digital.</div>
        </div>
        <div className="sig-item reveal" style={{transitionDelay:'.28s'}}>
          <div className="sig-num">Many</div>
          <div className="sig-label">Modes of upside</div>
          <div className="sig-note">IP, product, licensing, platform, cultural participation, and public-good impact — not one path but several.</div>
        </div>
      </div>

      <section className="frame-section" id="frame">
        <div className="frame-text reveal">
          <div className="section-overline">The Opening Frame</div>
          <h2>Not a product bet.<br/><em>A category bet.</em></h2>
          <p>There is a class of investment opportunity that appears, at first encounter, to be a product pitch. It has a technology, a market, a wedge, a go-to-market story. It can be described in ordinary commercial terms, and in most cases that is exactly how it should be evaluated.</p>
          <p>But occasionally — rarely — a commercial opportunity is not primarily a product bet. It is a bet on the possible founding of a category. That is a structurally different kind of investment, with different risk characteristics, different competitive dynamics, and a different kind of upside.</p>
          <div className="pullquote">The first question is not whether the team can execute. The first question is whether this is a real category — an omitted branch of image formation becoming legible for the first time.</div>
          <p>If the answer is yes, the investor is not evaluating only a wedge. The investor is evaluating whether to hold a position in the emergence of a medium-class. Category-founding positions are finite and time-limited. They exist before the vocabulary is common, before the reference demonstrations are widely known, before the field has hardened into ordinary competition.</p>
          <p>That is the stage CRI appears to occupy now.</p>
        </div>
        <div className="frame-right reveal" style={{transitionDelay:'.2s'}}>
          <div className="section-overline" style={{marginBottom:'28px'}}>The three physical classes of image formation</div>
          <div className="three-classes">
            <div className="class-row">
              <div className="class-tag">Class One · Established</div>
              <div className="class-name">Absorptive</div>
              <div className="class-mech">Pigment absorbs selected wavelengths · light minus color</div>
              <div className="class-body">Paint, print, photograph, ink. The image is stored as a pattern of differential absorption. It exists independently of the viewer. Chemistry and fade are the operative degradation modes.</div>
            </div>
            <div className="class-row">
              <div className="class-tag">Class Two · Established</div>
              <div className="class-name">Emissive</div>
              <div className="class-mech">Electronics generate light · image formed at the source</div>
              <div className="class-body">LCD, OLED, LED, projector, screen. The image is formed by light generated at the surface itself. Continuous power and a digital stack are required. The image is always present to any viewer.</div>
            </div>
            <div className="class-row active">
              <div className="class-tag">Class Three · New · CRI</div>
              <div className="class-name">Reflective</div>
              <div className="class-mech">Geometry routes ambient light · image assembled at the eye</div>
              <div className="class-body">Computed mirror-pixel arrays redirect available environmental light toward chosen viewer positions. No power in the surface. No image layer. The image is not deposited — it is constructed through the physics of coordinated reflection. This class had no prior commercial form.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="conjecture-section" id="hidden">
        <div className="conjecture-bg"/>
        <div className="section-overline reveal">The Hidden Innovation Conjecture</div>
        <h2 className="reveal">The physics was always there.<br/><em>The organizing insight arrived late.</em></h2>
        <p className="conjecture-body reveal">Mirrors have existed for eight thousand years. The geometric principles underlying CRI are not exotic. The materials — reflective surfaces, computational design, precision fabrication — have all been available for decades. And yet the category had no commercial form. The ancient mirror kept its deepest secret until it was asked the right question.</p>
        <div className="conjecture-grid">
          <div className="cj-item reveal">
            <div className="cj-label">The Pattern</div>
            <div className="cj-name">Hiding in plain sight</div>
            <div className="cj-body">Velcro. Post-it Notes. Wheeled luggage. QR codes. Each used only familiar components, long available. Each remained invisible until a specific organizing insight unlocked it. CRI follows this exact pattern: familiar optics + computational design + precision fabrication = a category that had no name.</div>
          </div>
          <div className="cj-item reveal" style={{transitionDelay:'.08s'}}>
            <div className="cj-label">The Implication</div>
            <div className="cj-name">Not speculation — consequence</div>
            <div className="cj-body">The physics underlying CRI is not speculative. Reflection exists. Geometry exists. Viewer-position-dependent routing of environmental light by designed surface orientation is a direct consequence of established optics. The question was never whether this could exist. The question was whether anyone had seen it clearly enough to name it and build it.</div>
          </div>
          <div className="cj-item reveal" style={{transitionDelay:'.16s'}}>
            <div className="cj-label">The Strategic Shift</div>
            <div className="cj-name">A different investor question</div>
            <div className="cj-body">This changes the investor&apos;s question from &ldquo;will this strange thing ever exist?&rdquo; to &ldquo;who will define it, own it, and benefit most from its emergence?&rdquo; The conventional execution question remains relevant at the product level. The foundational question is historical and strategic: is the category real, and is this team positioned to hold the founding position while it becomes legible?</div>
          </div>
        </div>
      </section>

      <section className="richness-section" id="richness">
        <div className="section-overline reveal">Why the Opportunity Is Unusually Rich</div>
        <h2 className="reveal">Not one kind of upside.<br/><em>Several, simultaneously.</em></h2>
        <p className="richness-intro reveal">Most opportunities ask investors to choose one reason to care. CRI is unusual because it appears to concentrate several different kinds of payoff in one project — and they are mutually reinforcing rather than competing.</p>
        <div className="richness-grid">
          <div className="rich-item reveal">
            <div className="rich-num">I</div>
            <div className="rich-title">Foundational Novelty</div>
            <div className="rich-sub">Not incremental · not a better version of known technology</div>
            <div className="rich-body">Incremental technologies compete within known product categories. Category-founding technologies can define the categories themselves — establishing vocabulary, reference demonstrations, ecosystem position, and IP at the level of principle rather than only execution. That creates different upside: not a better participant in a known structure, but a definer of the structure itself.</div>
          </div>
          <div className="rich-item reveal" style={{transitionDelay:'.06s'}}>
            <div className="rich-num">II</div>
            <div className="rich-title">Definitional Authority</div>
            <div className="rich-sub">Category founding is not first-mover advantage</div>
            <div className="rich-body">First-mover advantage is temporal. Competitors can catch up by executing better inside the same map. Category founding is structurally different. The founder helps define the space itself: the vocabulary, the exemplars, the reference demonstrations, the first framing of what belongs in the category. When competitors later arrive, they arrive into a map already drawn. That is a more durable moat than speed.</div>
          </div>
          <div className="rich-item reveal" style={{transitionDelay:'.12s'}}>
            <div className="rich-num">III</div>
            <div className="rich-title">Platform Scope</div>
            <div className="rich-sub">A branching method, not a single product</div>
            <div className="rich-body">CRI is not a product concept. It is a method platform capable of supporting multiple classes of image display and behavior — fine art photography, storefront windows, safety signage, wayfinding, architectural features, memorial works, seasonal installations, and more. That breadth follows from the generality of the underlying method, not from diffuse ambition.</div>
          </div>
          <div className="rich-item reveal" style={{transitionDelay:'.04s'}}>
            <div className="rich-num">IV</div>
            <div className="rich-title">Multiple Value Routes</div>
            <div className="rich-sub">IP, product, licensing, architecture, software, cultural</div>
            <div className="rich-body">Many startups depend on one narrow monetization path. CRI appears capable of supporting several: direct product sales, IP licensing, architecture and building-material integration, safety and wayfinding systems, branded environments, art editions, and design-tool software layers. Different investors can rationally value the same core technology through completely different lenses.</div>
          </div>
          <div className="rich-item reveal" style={{transitionDelay:'.1s'}}>
            <div className="rich-num">V</div>
            <div className="rich-title">Public-Good Legitimacy</div>
            <div className="rich-sub">Not cosmetic — structurally grounded</div>
            <div className="rich-body">The clearest public-good case is passive conditional signage: a display surface that carries multiple independent image layers, each activated by a specific light source, with no electronics in the panel, no firmware, no network connection. In safety-critical environments — hospitals, industrial facilities, transit infrastructure — a sign that cannot fail because a firmware update corrupted it is a different class of product entirely.</div>
          </div>
          <div className="rich-item wide reveal" style={{transitionDelay:'.16s'}}>
            <div className="rich-num">VI</div>
            <div className="rich-title">The Inevitability of the Category — Used Carefully</div>
            <div className="rich-sub">The physics is not speculative · some version of this was coming</div>
            <div className="rich-body">The language of inevitability is dangerous when used lazily. No company is inevitable. No execution outcome is guaranteed. But there is a serious and defensible version of the claim here. The physics underlying CRI is not speculative. If the principle is real — and it is — then some branch of this category was likely inevitable once the organizing insight was seen clearly enough. That changes the investor&apos;s strategic question from &ldquo;will this strange thing ever exist?&rdquo; to &ldquo;who will define it, own it, and benefit most from its emergence?&rdquo; That is a much better question. A far more interesting conversation. And a fundamentally different class of investment.</div>
          </div>
        </div>
      </section>

      <section className="platform-section" id="platform">
        <div className="platform-text reveal">
          <div className="section-overline">Platform Scope</div>
          <h2>One method.<br/>Many branches.<br/><em>Not yet named.</em></h2>
          <p>The underlying method — encoding images as angular fields of reflective geometry that route environmental light toward chosen viewing positions — is general enough to support many classes of commercial and cultural application. The breadth is not wishful market mapping. It is a consequence of the generality of the physics.</p>
          <div className="pullquote">The right comparison is not &ldquo;can someone copy the product?&rdquo; but &ldquo;can someone successfully displace the founding framework of the category after it has been named and stabilized?&rdquo; That is a much harder task.</div>
          <p>Not every branch should be pursued at once. The founding discipline is to choose the right first wedge and build from there. But the investor is not buying exposure to a single wedge. The investor is buying exposure to the underlying principle — and all the branching it may eventually support.</p>
        </div>
        <div className="platform-branches reveal" style={{transitionDelay:'.18s'}}>
          {[
            { name:'High-Fidelity Photography', body:'Photographic images encoded into polished aluminum or glass. No print chemistry. No display electronics. A new kind of photographic object with unusual tonal reach and authored walking behavior. The most culturally legible first wedge.', tag:'First wedge' },
            { name:'Refractive Storefront Windows', body:'Premium display windows for luxury retail and hospitality. The image is assembled at the pedestrian\'s eye through geometry and changes as they walk past. No LED surface. Not a lightbox. Not lenticular. A new optical display object.', tag:'Early commercial' },
            { name:'Passive Conditional Signage', body:'Display surfaces that carry multiple independent image layers, each activated by a different light fixture, with zero electronics in the panel. Safety-critical reliability in regulated industries. The building\'s own fixtures are the switches.', tag:'Safety · institutional' },
            { name:'Multi-State Cultural Installations', body:'A single panel carrying multiple complete independent works, each revealed by a different gallery lighting state. No projectors, no screen swaps. A new compositional form for artists and a new acquisition category for museums.', tag:'Cultural · institutional' },
            { name:'Seasonal Site-Responsive Architecture', body:'Façade-integrated works designed with full annual light field data. Different facets activate in different seasons by physics alone. No mechanism, no control system. A building surface that marks the passage of the year through the sun.', tag:'Architecture · public art' },
            { name:'Memorial and Commemorative Works', body:'Portrait-scale works in cast metal or polished aluminum for graveside or institutional memorial settings. The image arrives as the mourner approaches. No screen. No power. The material is the memory. Permanence as a product quality.', tag:'Memorial · institutional' },
            { name:'Design Tools and Simulation Software', body:'Computational design layers around light field simulation, site analysis, and fabrication post-processing. As the medium matures, the software layer may become independently significant — an IP and licensing asset in its own right.', tag:'Software · licensing' },
          ].map((b, i) => (
            <div className="branch" key={i}>
              <div className="branch-dot"/>
              <div>
                <div className="branch-name">{b.name}</div>
                <div className="branch-body">{b.body}</div>
              </div>
              <div className="branch-tag">{b.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ip-section" id="ip">
        <div className="ip-text reveal">
          <div className="section-overline">IP Position</div>
          <h2>Seven issued patents.<br/><em>2009 priority date.</em><br/>Principle-level coverage.</h2>
          <p>The IP position is not defensive decoration. It is foundational. Seven issued United States patents cover the CRI principle at a level of generality that is difficult to design around — because the claims cover the organizing insight itself, not merely one implementation of it.</p>
          <p>A 2009 priority date places the IP at the moment of first invention, not at the moment of commercial refinement. That means the clock on the most foundational claims has been running for seventeen years — establishing prior art that shapes the entire field, not just one product line.</p>
          <p>Additional IP exists in provisional form and in the documented record of research development. The pipeline of claimable inventions from the ongoing technical work continues to expand as new embodiments and applications are developed and formally documented.</p>
        </div>
        <div className="ip-grid reveal" style={{transitionDelay:'.2s'}}>
          {[
            { num:'US 9,071,834', sub:'Issued · Priority 2009' },
            { num:'US 9,576,377', sub:'Issued · Reflective imaging system' },
            { num:'US 10,386,712', sub:'Issued · Computational reflective display' },
            { num:'US 10,416,548', sub:'Issued · Reflective imaging method' },
            { num:'US 10,895,804', sub:'Issued · Image encoding in reflective geometry' },
            { num:'US 11,422,454', sub:'Issued · Computational reflective imaging' },
            { num:'US 11,882,265', sub:'Issued · Reflective pixel display system' },
          ].map((p, i) => (
            <div className="ip-row" key={i}>
              <div><div className="ip-name">{p.num}</div><div className="ip-sub">{p.sub}</div></div>
              <div className="ip-badge">Issued</div>
            </div>
          ))}
          <div className="ip-row" style={{background:'rgba(201,169,110,.04)',borderLeft:'2px solid var(--gold)'}}>
            <div><div className="ip-name">Continuation and provisional filings</div><div className="ip-sub">Ongoing · New embodiments in active documentation</div></div>
            <div className="ip-badge" style={{color:'var(--gold-lt)',borderColor:'var(--gold-dk)'}}>Pipeline</div>
          </div>
        </div>
      </section>

      <section className="book-section" id="book">
        <div className="book-bg"/>
        <div className="book-inner">
          <div className="book-text reveal">
            <div className="section-overline">The Cultural Moment</div>
            <h2>The medium needs<br/><em>its founding object.</em></h2>
            <p>New image media do not become real through technical demonstrations alone. They become real when they acquire cultural authority — a reference work, a landmark installation, a named vocabulary, a document that closes the question of whether the category exists.</p>
            <p>The Flective Book is conceived as exactly that object: a work of such ambition, beauty, technical precision, and cultural seriousness that it does not argue for the medium — it embodies it. Its existence makes the question of legitimacy moot.</p>
            <div className="pullquote">Funding the creation of the book is not peripheral to the investment thesis. It is one of the most leveraged acts in it. The book is the culture object that bridges invention and myth.</div>
            <p>A limited-edition physical artifact with cultural prestige — one that simultaneously functions as artistic vision statement, investment thesis, technical preprint, philosophical framework, and recruiting magnet — is not a normal startup deliverable. It is the founding document of a medium, written before the medium is widely known to exist. That is a position of unusual power.</p>
          </div>
          <div className="reveal" style={{transitionDelay:'.2s'}}>
            <div className="section-overline" style={{marginBottom:'24px'}}>Books that founded categories of seeing</div>
            <div className="book-exemplars">
              {[
                { title:'Paolo Soleri · Arcology', sub:'Visionary architecture as world-claiming thought — a book that made a movement real' },
                { title:'Eames · Powers of Ten', sub:'Elegant conceptual compression — educational, iconic, permanently culture-forming' },
                { title:'E.O. Wilson · The Ants', sub:'Rigorous science as awe-inspiring artifact — authority and beauty in one binding' },
                { title:'Codex Seraphinianus', sub:'Visual language as world-building and enigma — an artifact that defines its own category' },
                { title:'Sagmeister · Made You Look', sub:'A designer\'s intelligence made permanent in physical form — the work as its own argument' },
              ].map((b, i) => (
                <div className="exemplar" key={i}>
                  <div className="exemplar-title">{b.title}</div>
                  <div className="exemplar-sub">{b.sub}</div>
                </div>
              ))}
              <div className="exemplar placeholder">
                <div className="exemplar-title">The Flective Book</div>
                <div className="exemplar-sub">Computational Reflectivity in Life, Art, and Imagination — the founding object of a new image medium · in development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="witness-section" id="witness">
        <div className="witness-inner">
          <div className="section-overline reveal" style={{justifyContent:'center'}}><span>Witness Privilege</span></div>
          <h2 className="reveal">The founding position<br/>is still available.<br/><em>It will not be for long.</em></h2>
          <p className="reveal">Category-founding positions are finite and time-limited. They exist before the vocabulary is common, before the reference implementations are widely known, before the broader market and cultural significance have hardened into ordinary competition. That is the stage CRI appears to occupy now.</p>
          <div className="pullquote reveal">&ldquo;There is real value in helping bring into the world a technology that is technically substantial, culturally resonant, and likely to generate fascination beyond its first commercial embodiments. This may be called witness privilege: the opportunity to be present at a genuine founding moment.&rdquo;</div>
          <p className="reveal">The most natural investors at this stage are those who are curious rather than purely formulaic — comfortable with category formation, not only category entry — aesthetically and culturally engaged — interested in long-arc significance alongside near-term return — and willing to help shape narrative, partnerships, and ecosystem, not merely provide capital. The wrong fit would create pressure toward premature flattening of the opportunity into a more ordinary story than it actually is.</p>
          <p className="reveal">The right fit understands that backing CRI is not only a bet on a company. It is a bet on the emergence of a medium-class. And it is an early position in that emergence — taken while the founding positions are still available on unusual terms.</p>
        </div>
      </section>

      <section className="sober-section" id="sober">
        <div className="section-overline reveal">The Sober Section</div>
        <h2 className="reveal">What this memo does not claim.</h2>
        <p className="sober-intro reveal">This would be misleading without plain statement of the constraints. Not every claim here survives contact with fabrication, manufacturing, and market education at equal speed. The point is that CRI concentrates an unusual number of investor-attractive properties — not that it automatically wins in all directions.</p>
        <div className="sober-grid">
          <div className="sober-item reveal">
            <div className="sober-title">Not every branch is near-term</div>
            <div className="sober-body">Some applications are ready to be built now. Others require fabrication development, material science progress, or market education that will take years. The platform scope is real, but it should not be pursued all at once. Discipline in wedge selection is critical.</div>
          </div>
          <div className="sober-item reveal" style={{transitionDelay:'.08s'}}>
            <div className="sober-title">Not every compelling concept is a good business</div>
            <div className="sober-body">A technically interesting application that cannot be manufactured at viable cost, or cannot be explained to buyers in a reasonable sales cycle, is not a business regardless of its elegance. Each branch must earn its commercialization case independently.</div>
          </div>
          <div className="sober-item reveal" style={{transitionDelay:'.04s'}}>
            <div className="sober-title">Execution risk remains fully real</div>
            <div className="sober-body">Category-founding does not confer invulnerability. The founding framework must be built and publicly established with actual working implementations. Conceptual priority without demonstrated product is a weaker position than it appears on paper.</div>
          </div>
          <div className="sober-item reveal" style={{transitionDelay:'.12s'}}>
            <div className="sober-title">Not every investor is the right fit</div>
            <div className="sober-body">This opportunity asks for something different from a normal Series A investor. It asks for patience with category formation, tolerance for early market education, and genuine intellectual engagement with a novel medium. Not every investor profile serves that well — and misalignment at this stage is costly for both parties.</div>
          </div>
        </div>
      </section>

      <section className="inquire-section" id="inquire">
        <div className="inquire-bg"/>
        <div className="section-overline reveal">Confidential Inquiry</div>
        <h2 className="reveal">The conversation begins<br/><em>before the deck.</em></h2>
        <p className="sub reveal">The right investor conversation for this stage is not a formal pitch. It is a genuine exchange of questions about the medium, the category claim, the first wedge, and the kind of participation that would create the most value. If the framing on this page resonates, the next step is a private conversation.</p>
        <div className="inquire-ctas reveal">
          <a href="mailto:jim@flective.com" className="btn-inquire">Begin a Conversation</a>
          <a href="https://flective.com" className="btn-inquire-ghost">About Flective →</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <div className="logo"><a href="https://flective.com" style={{cursor:'none',color:'inherit'}}>Flective</a> <span>Investors</span></div>
          <p>Fiat Lux Technology LLC · Gardner, MA · Founder: James Yett · Confidential materials available to qualified investors upon request.</p>
        </div>
        <div className="footer-col">
          <h4>The Case</h4>
          <ul>
            <li><a href="#frame">The category claim</a></li>
            <li><a href="#hidden">Hidden innovation</a></li>
            <li><a href="#richness">Multiple modes of upside</a></li>
            <li><a href="#sober">The sober section</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>The Platform</h4>
          <ul>
            <li><a href="#platform">Platform branches</a></li>
            <li><a href="#ip">IP position</a></li>
            <li><a href="#book">The Flective Book</a></li>
            <li><a href="#witness">Witness privilege</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:jim@flective.com">jim@flective.com</a></li>
            <li><a href="https://flective.com">flective.com →</a></li>
            <li><a href="https://photography.flective.com">Photography →</a></li>
            <li><a href="https://refractive.flective.com">Refractive →</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Fiat Lux Technology LLC · Confidential · James Yett · Gardner, MA</p>
          <div className="patent">US Patents 9,071,834 · 9,576,377 · 10,386,712 · 10,416,548 · 10,895,804 · 11,422,454 · 11,882,265</div>
        </div>
      </footer>
    </>
  )
}
