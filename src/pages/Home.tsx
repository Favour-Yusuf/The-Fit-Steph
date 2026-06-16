import { useState } from "react";
import "../styles/fitsteph.css";
import { HERO_IMG, ABOUT_IMG, PROOF_IMG_1, PROOF_IMG_2 } from "../data/images";
import PaymentModal, { type Plan } from "../components/fitsteph/PaymentModal";

const PLANS: Record<string, Plan> = {
  guide: { name: "Dream Body Guide", amountNaira: 5000, priceLabel: "₦5,000" },
  reset: { name: "D30 Reset", amountNaira: 30000, priceLabel: "₦30,000" },
  gym: { name: "D30 Remote Gym", amountNaira: 15000, priceLabel: "₦15,000" },
};

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [activePlan, setActivePlan] = useState<Plan | null>(null);

  // Newsletter form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const closeNav = () => setNavOpen(false);

  const submitForm = () => {
    const value = email.trim();
    if (!value || !value.includes("@")) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setSignedUp(true);
  };

  return (
    <div className="fs">
      {/* NAV */}
      <nav>
        <div className="wrap nav-inner">
          <a href="#" className="logo">
            TheFitSteph<span className="dot" />
          </a>
          <div className={`nav-links${navOpen ? " open" : ""}`} id="navLinks">
            <a href="#about" onClick={closeNav}>My Story</a>
            <a href="#proof" onClick={closeNav}>Results</a>
            <a href="#work" onClick={closeNav}>Work With Me</a>
            <a href="#join" className="nav-cta" onClick={closeNav}>Get Started</a>
          </div>
          <button
            className="burger"
            id="burger"
            aria-label="Menu"
            onClick={() => setNavOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <span className="pill">Faith-Led Fitness Coaching</span>
            <h1>
              Your body is not the problem. You've <em>poured into everyone</em> but yourself.
            </h1>
            <p className="lede">
              I help Christian women honour their bodies as an act of worship, not vanity. No
              shame. No crash diets. Just faith, consistency, and a coach who actually shows up
              for you.
            </p>
            <p className="verse-line">
              "She is clothed with strength and dignity." — Proverbs 31:25
            </p>
            <div className="hero-cta">
              <a href="#join" className="btn btn-gold">
                Start your journey <span className="btn-arrow">→</span>
              </a>
              <a href="#work" className="btn btn-ghost">See how it works</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <img src={HERO_IMG} alt="Stephanie's transformation, 100kg to 84kg" />
            </div>
          </div>
        </div>
      </header>

      {/* STAT BAND */}
      <div className="statband">
        <div className="wrap statband-grid">
          <div className="stat"><div className="num">16kg</div><div className="lbl">Lost at home</div></div>
          <div className="stat"><div className="num">100%</div><div className="lbl">Virtual &amp; flexible</div></div>
          <div className="stat"><div className="num">100s</div><div className="lbl">Of women coached</div></div>
          <div className="stat"><div className="num">Faith</div><div className="lbl">At the centre</div></div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-photo">
            <img src={ABOUT_IMG} alt="Stephanie, The Fit Steph" />
          </div>
          <div className="about-text">
            <span className="sec-eyebrow">My Story</span>
            <h2>I lost myself before I lost the weight.</h2>
            <p>
              For years I poured into church, family, and everyone else, while quietly
              disappearing inside my own body. I wasn't lazy. I was overwhelmed, drained, and
              convinced there was no time left for me.
            </p>
            <p>
              Then I made one decision: to honour the body God gave me. No gym, no fancy meals.
              Just home workouts, real Nigerian food, and showing up daily. I went from 100kg to
              84kg, that's 16kg gone, but more than that, I found myself again.
            </p>
            <p>
              Now I walk this road with women just like you, the ones who've been strong for
              everyone but themselves. This isn't about a smaller dress size. It's about becoming
              the woman God made you to be.
            </p>
            <div className="signature">— Stephanie</div>
          </div>
        </div>
      </section>

      {/* TRIED EVERYTHING */}
      <section className="tried">
        <div className="wrap">
          <span className="sec-eyebrow">Sound Familiar?</span>
          <h2>You've tried <em>everything.</em></h2>
          <div className="tags">
            <span className="tag-x">Slim tea</span>
            <span className="tag-x">Laxative seeds</span>
            <span className="tag-x">Off-brand Ozempic</span>
            <span className="tag-x">Salt water cleanse</span>
            <span className="tag-x">Slim patches</span>
            <span className="tag-x">Detox pills</span>
            <span className="tag-x">Just eating eggs</span>
          </div>
          <p className="body">
            Nothing worked, because none of it was built for you. Then you do it God's way:{" "}
            <b>no shortcuts, no side effects.</b> Just faith, consistency, and real
            accountability. That's where the change finally sticks.
          </p>
          <div className="stars">
            <span className="s">★★★★★</span> The way hundreds of women have done it inside
            Deeper30.
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="proof" id="proof">
        <div className="wrap">
          <div className="proof-head">
            <span className="sec-eyebrow" style={{ color: "var(--gold-soft)" }}>
              Real Women, Real Change
            </span>
            <h2>The women walking this <em>with me.</em></h2>
            <p className="sec-lede">
              No filters. No quick fixes. Just consistency, at home, with God in the centre.
            </p>
          </div>
          <div className="proof-grid">
            <div className="proof-card">
              <img src={PROOF_IMG_1} alt="Client transformation, 97kg to 64kg" />
              <div className="pc-cap"><b>97kg → 64kg.</b> One decision, kept daily.</div>
            </div>
            <div className="proof-card">
              <img src={PROOF_IMG_2} alt="Client transformation, Week 1 to Week 8" />
              <div className="pc-cap"><b>Week 1 → Week 8.</b> Real client. Real consistency.</div>
            </div>
          </div>
          <p className="proof-note">Your turn is coming. It starts with one decision.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="says">
        <div className="wrap">
          <div className="proof-head">
            <span className="sec-eyebrow" style={{ color: "var(--gold)" }}>
              Community Love
            </span>
            <h2>What women are <em>saying.</em></h2>
            <p className="sec-lede" style={{ color: "#4a564f" }}>
              Straight from the group chat. Real voices, real faith, real change.
            </p>
          </div>
          <div className="says-grid">
            <div className="say-card">
              <div className="say-quote">
                "TheFitSteph live workout is fire, even better than the YouTube workouts I use. The
                best part is praying and speaking in other tongues. The Spirit of God came down.
                Please try it, you won't regret it."
              </div>
              <div className="say-name">— Jennifer Suberu</div>
            </div>
            <div className="say-card">
              <div className="say-quote">
                "Today's workout and prayer session was definitely led by the Holy Spirit. Thank
                you TheFitSteph. I'm glad I get to do this every day with you. You are Godsent! Now
                let me lock in and take the 6kg I've lost to 12kg, by the grace of God and by
                showing up every day."
              </div>
              <div className="say-name">— D30 Member</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY / PILLARS */}
      <section className="why">
        <div className="wrap">
          <span className="sec-eyebrow" style={{ color: "var(--gold-soft)" }}>
            The Deeper30 Difference
          </span>
          <h2>Real change. <em>Real faith built.</em></h2>
          <p className="sec-lede">
            Women in Deeper30 see real change because they're not doing it alone. Faith,
            accountability, and a community that keeps you moving even when motivation runs out.
          </p>
          <div className="pillars">
            <div className="pillar">
              <div className="p-num">01</div>
              <span className="p-tag">Spirit</span>
              <h3>Faith-Centered</h3>
              <p>
                Every session and every check-in is rooted in God's word. Your body is a temple,
                and we honour it together.
              </p>
            </div>
            <div className="pillar">
              <div className="p-num">02</div>
              <span className="p-tag">Freedom</span>
              <h3>Virtual &amp; Flexible</h3>
              <p>
                Live sessions you can join from anywhere. No gym, no commute. Just you, your
                device, and your community.
              </p>
            </div>
            <div className="pillar">
              <div className="p-num">03</div>
              <span className="p-tag">Consistency</span>
              <h3>Real Accountability</h3>
              <p>
                Daily check-ins, group support, and a coach who genuinely shows up for you, not
                just a programme you do alone.
              </p>
            </div>
            <div className="pillar">
              <div className="p-num">04</div>
              <span className="p-tag">Sisterhood</span>
              <h3>Women Like You</h3>
              <p>
                A community of women on the same journey, cheering for each other, praying for each
                other, winning together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="work" id="work">
        <div className="wrap">
          <span className="sec-eyebrow">Work With Me</span>
          <h2>Three ways to begin.</h2>
          <p className="sec-lede">
            Wherever you are, there's a starting point. Pick the one that fits your season.
          </p>
          <div className="cards">
            <div className="card">
              <div className="card-num">01 / Start Here</div>
              <h3>Dream Body Guide</h3>
              <p>
                A 30-day home workout and Nigerian meal plan with daily scripture. Self-paced,
                beginner-friendly, and built for busy women. The simplest way to start today.
              </p>
              <div className="card-price">₦5,000 <span>one-time</span></div>
              <div className="card-meta">Digital guide · Self-paced</div>
              <button className="card-link" onClick={() => setActivePlan(PLANS.guide)}>
                Get the guide <span className="arr">→</span>
              </button>
            </div>

            <div className="card featured">
              <div className="card-tag">Most Loved</div>
              <div className="card-num">02 / Community</div>
              <h3>D30 Reset</h3>
              <p>
                A monthly coaching community for Christian women. Fasting, fitness, accountability,
                and prayer, together. This is where transformation actually sticks, because you're
                not doing it alone.
              </p>
              <div className="card-price">₦30,000 <span>monthly</span></div>
              <div className="card-meta">Group coaching membership</div>
              <button className="card-link" onClick={() => setActivePlan(PLANS.reset)}>
                Join the reset <span className="arr">→</span>
              </button>
            </div>

            <div className="card">
              <div className="card-num">03 / Train Live</div>
              <h3>D30 Remote Gym</h3>
              <p>
                Live virtual workout classes you can join from your living room. Jump rope, Tabata,
                and strength training, led by me on Zoom.
              </p>
              <div className="card-price">₦15,000 <span>monthly</span></div>
              <div className="card-meta">4 classes / week · Live on Zoom</div>
              <button className="card-link" onClick={() => setActivePlan(PLANS.gym)}>
                See the classes <span className="arr">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOR YOU IF */}
      <section className="foryou">
        <div className="wrap">
          <span className="sec-eyebrow" style={{ color: "var(--gold-soft)" }}>
            This Is For You If…
          </span>
          <h2>You're done with excuses. <em>You're ready to move.</em></h2>
          <div className="checklist">
            <div className="check"><div className="ic">✓</div><p>You've tried programmes before but couldn't stay consistent.</p></div>
            <div className="check"><div className="ic">✓</div><p>You want weight loss that also feeds your spirit, not just your body.</p></div>
            <div className="check"><div className="ic">✓</div><p>You're tired of going it alone and want a real sisterhood around you.</p></div>
            <div className="check"><div className="ic">✓</div><p>You have a busy schedule and need something flexible and virtual.</p></div>
            <div className="check"><div className="ic">✓</div><p>You want a coach who holds you accountable and actually cares.</p></div>
            <div className="check"><div className="ic">✓</div><p>You believe God has more for you, and you're ready to honour your health.</p></div>
          </div>
        </div>
      </section>

      {/* SCRIPTURE */}
      <div className="scripture">
        <div className="wrap">
          <p className="quote">
            "Do you not know that your bodies are temples of the Holy Spirit? Therefore honour God
            with your bodies."
          </p>
          <div className="divider"><span /><span className="star">✦</span><span /></div>
          <p className="ref">1 CORINTHIANS 6:19–20</p>
        </div>
      </div>

      {/* SIGNUP */}
      <div className="signup" id="join">
        <div className="signup-grid">
          <div>
            <span className="sec-eyebrow" style={{ color: "var(--gold-soft)" }}>
              Stay Connected
            </span>
            <h2>Don't lose this. <em>Join the list.</em></h2>
            <p>
              Get encouragement, faith-led fitness tips, and first access whenever the next D30
              Reset cohort opens. Straight to your inbox, no noise.
            </p>
          </div>
          <div className="form-box">
            {!signedUp ? (
              <div id="formFields">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={emailError ? { borderColor: "#ff8a80" } : undefined}
                />
                <button onClick={submitForm}>Join the community →</button>
                <p className="form-note">
                  No spam. Just truth, encouragement &amp; accountability.
                </p>
              </div>
            ) : (
              <div className="form-success show" id="formSuccess">
                <div className="check-ok">✓</div>
                <p>You're in. Check your inbox soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-stars">★★★★★</div>
            <div className="foot-mark">Deeper30</div>
            <div className="foot-tag">FAITH · FITNESS · SISTERHOOD</div>
          </div>
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="#" className="logo">
                TheFitSteph<span className="dot" />
              </a>
              <p>
                Faith-led fitness coaching for women ready to honour their bodies and become who
                God made them to be.
              </p>
            </div>
            <div className="foot-col">
              <h4>Explore</h4>
              <a href="#about">My Story</a>
              <a href="#proof">Results</a>
              <a href="#work">Work With Me</a>
              <a href="#join">Join the List</a>
            </div>
            <div className="foot-col">
              <h4>Follow</h4>
              <a href="https://instagram.com/thefitsteph_" target="_blank" rel="noopener">@thefitsteph_</a>
              <a href="https://instagram.com/d30_fitclub" target="_blank" rel="noopener">@d30_fitclub</a>
              <a href="https://instagram.com/d30_remotegym" target="_blank" rel="noopener">@d30_remotegym</a>
              <a href="mailto:thefitsteph@gmail.com">thefitsteph@gmail.com</a>
            </div>
          </div>
          <div className="foot-bottom">
            <p>© 2026 TheFitSteph.</p>
            <div className="foot-social">
              <a
                href="https://instagram.com/thefitsteph_"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="mailto:thefitsteph@gmail.com" aria-label="Email" title="Send an email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 6 10-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {activePlan && (
        <PaymentModal plan={activePlan} onClose={() => setActivePlan(null)} />
      )}
    </div>
  );
}
