import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './JoshuaTree.css';

function MushroomToggle({ active, onToggle }) {
  return (
    <button
      className={`jt-mushroom-btn${active ? ' active' : ''}`}
      onClick={onToggle}
      title="open the doors"
      aria-label={active ? 'Close shroomify mode' : 'Open the doors'}
    >
      <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
        <path d="M6,30 Q5,10 26,8 Q47,10 46,30 Z" className="mush-cap"/>
        <path d="M8,30 Q26,36 44,30" stroke="rgba(0,0,0,0.14)" strokeWidth="1" fill="none"/>
        <rect x="19" y="30" width="14" height="16" rx="4" className="mush-stem"/>
        <path d="M15,33 Q26,39 37,33" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="20" r="3"   className="mush-spot"/>
        <circle cx="30" cy="15" r="2.2" className="mush-spot"/>
        <circle cx="36" cy="23" r="2"   className="mush-spot"/>
        <circle cx="16" cy="26" r="1.5" className="mush-spot"/>
      </svg>
    </button>
  );
}

export default function JoshuaTreePage() {
  const [shroom, setShroom] = useState(false);

  // Reset scroll on mount — React Router preserves scroll position across
  // client-side navigations, so without this the page opens wherever the
  // previous page was scrolled to.
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Section fade-in
  useEffect(() => {
    const nodes = document.querySelectorAll('.jt-reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('jt-visible', e.isIntersecting)),
      { threshold: 0.15 }
    );
    nodes.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`jt-page${shroom ? ' shroom' : ''}`}>
      <Link to="/" className="jt-back">← back</Link>
      <MushroomToggle active={shroom} onToggle={() => setShroom(s => !s)} />

      {/* Shroom-only cirrus layer — fixed overlay covering full viewport,
          so clouds spiral across every section as you scroll */}
      <div className="cirrus-layer" aria-hidden="true">
        <div className="cirrus ci-1"/>
        <div className="cirrus ci-2"/>
        <div className="cirrus ci-3"/>
        <div className="cirrus ci-4"/>
      </div>

      {/* ── 1. HERO — full sky ──────────────────────────────────────────── */}
      <section className="jt-section jt-hero">
        <div className="jt-photo-overlay"/>

        {/* Animated cloud layer — drifts over the photo sky */}
        <div className="cloud-drift-layer" aria-hidden="true">
          <div className="cloud-puff cp-1"/>
          <div className="cloud-puff cp-2"/>
          <div className="cloud-puff cp-3"/>
        </div>

        <div className="jt-hero-text">
          <h1 className="jt-title">Joshua Tree</h1>
          <p className="jt-subtitle">Where two deserts meet the sky.</p>
        </div>
      </section>

      {/* ── 2. DESCENT — landscape, mountains, field ───────────────────── */}
      <section className="jt-section jt-descent">
        <div className="jt-photo-overlay"/>
        <div className="jt-card jt-reveal">
          <p className="jt-prose">
            Eight hundred thousand acres where the Mojave and Colorado Desert converge.
            Two climates, two ecologies — and one sky that holds both.
          </p>
          <p className="jt-prose">
            The park designated a National Monument in 1936, a National Park in 1994.
            The rock is monzogranite, shaped underground over one hundred million years
            before anyone was here to see it.
          </p>
        </div>
        <aside className="marginalia marginalia-right" aria-hidden="true">
          "To be shaken out of the ruts of ordinary perception, to be shown for a few
          timeless hours the outer and the inner world… as they are apprehended,
          directly and unconditionally, by Mind at Large."
          <span>— Huxley, <em>The Doors of Perception</em></span>
        </aside>
      </section>

      {/* ── 3. CHOLLA — close-up ───────────────────────────────────────── */}
      <section className="jt-section jt-cholla">
        <div className="jt-photo-overlay jt-cholla-overlay"/>
        <div className="jt-card jt-card-bottom jt-reveal">
          <h2 className="jt-h2">Cholla Cactus Garden</h2>
          <p className="jt-prose">
            Teddy bear cholla — <em>Cylindropuntia bigelovii</em>. At a distance it looks
            soft, almost luminous. The spines are barbed. They detach on contact and cling
            to anything warm. Stand at the right hour and the light catches them from
            behind: each plant becomes a small, cold fire.
          </p>
        </div>
        <aside className="marginalia marginalia-left" aria-hidden="true">
          "Istigkeit — 'Is-ness.' The being of Platonic philosophy — except that Plato seems
          to have made the enormous mistake of separating Being from becoming."
          <span>— Huxley</span>
        </aside>
      </section>

      {/* ── 4. CLOSING ─────────────────────────────────────────────────── */}
      <section className="jt-section jt-closing-section">
        <div className="jt-closing-content jt-reveal">
          <p className="jt-closing-line">
            Stand still long enough and the desert stops performing for you.
          </p>
          <p className="jt-shroom-quote">
            "To be shaken out of the ruts of ordinary perception, to be shown for a few
            timeless hours the outer and the inner world, not as they appear to an animal
            obsessed with survival or to a human being obsessed with words and notions,
            but as they are apprehended, directly and unconditionally, by Mind at Large —
            this is an experience of inestimable value to everyone."
            <span>— Aldous Huxley, <em>The Doors of Perception</em></span>
          </p>
          <p className="jt-credits">
            Joshua Tree National Park · Cholla Cactus Garden
          </p>
        </div>
      </section>
    </div>
  );
}
