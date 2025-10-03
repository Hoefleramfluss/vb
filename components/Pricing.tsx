import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [calls, setCalls] = useState(300);
  const [profile, setProfile] = useState(3.5);

  const sliderRef = useRef<HTMLInputElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const plans = useMemo(
    () => [
      { name: 'Starter', base: 89, incl: 300, over: 0.23, description: 'Für kleine Teams & Proof-of-Concepts.' },
      { name: 'Business', base: 219, incl: 900, over: 0.22, description: 'Sweetspot für stark frequentierte Betriebe.' },
      { name: 'Scale', base: 499, incl: 2400, over: 0.2, description: 'Enterprise-Level mit individuellen SLAs.' },
    ],
    []
  );

  const { totalMinutes, recommendedPlan, estimatedPrice } = useMemo(() => {
    const minutes = calls * profile;

    let best = { name: '', cost: Infinity };
    for (const p of plans) {
      const overage = Math.max(0, minutes - p.incl);
      const cost = p.base + overage * p.over;
      if (cost < best.cost) {
        best = { name: p.name, cost };
      }
    }

    const uiName = best.name === 'Scale' ? 'Enterprise (Richtwert)' : best.name;
    const priceFormatted = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(best.cost);

    return {
      totalMinutes: Math.round(minutes),
      recommendedPlan: uiName,
      estimatedPrice: `${priceFormatted} / Monat`,
    };
  }, [calls, profile, plans]);

  useEffect(() => {
    const slider = sliderRef.current;
    const tooltip = tooltipRef.current;
    if (slider && tooltip) {
      const updateTooltipPosition = () => {
        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        const val = parseFloat(slider.value);
        const percent = (val - min) / (max - min);
        const thumbWidth = 24;
        const tooltipWidth = tooltip.offsetWidth;
        const newPosition = percent * (slider.offsetWidth - thumbWidth) + thumbWidth / 2 - tooltipWidth / 2;
        tooltip.style.left = `${newPosition}px`;
        slider.style.setProperty('--progress', `${percent * 100}%`);
      };

      updateTooltipPosition();
      const observer = new ResizeObserver(updateTooltipPosition);
      observer.observe(slider);

      return () => {
        observer.disconnect();
      };
    }
  }, [calls]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(parseFloat(e.target.value));
  };

  return (
    <section
      ref={ref}
      id="pricing"
      aria-label="pricing"
      className={`relative isolate py-28 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(0,229,255,0.12),transparent_55%)]" />
      <style>{`
        .range-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          background: linear-gradient(90deg, #3AB4F2 var(--progress, 0%), rgba(255, 255, 255, 0.1) var(--progress, 0%));
          border-radius: 9999px;
          outline: none;
          transition: background 0.3s;
        }
        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: radial-gradient(circle, #6EE7FF 0%, #3AB4F2 60%, #050b16 100%);
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 18px rgba(110, 231, 255, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .range-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: radial-gradient(circle, #6EE7FF 0%, #3AB4F2 60%, #050b16 100%);
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 18px rgba(110, 231, 255, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .range-slider:hover::-webkit-slider-thumb { transform: scale(1.08); }
        .range-slider:hover::-moz-range-thumb { transform: scale(1.08); }
        .range-slider:active::-webkit-slider-thumb { box-shadow: 0 0 0 12px rgba(0, 229, 255, 0.2); }
        .range-slider:active::-moz-range-thumb { box-shadow: 0 0 0 12px rgba(0, 229, 255, 0.2); }

        .slider-tooltip {
          position: absolute;
          top: -36px;
          transform: translateX(0);
          background: rgba(5, 15, 30, 0.95);
          color: white;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid rgba(110, 231, 255, 0.35);
          pointer-events: none;
        }
        .slider-tooltip::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: rgba(5, 15, 30, 0.95) transparent transparent transparent;
        }
        .radio-pill-group input[type='radio'] { display: none; }
        .radio-pill-group label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.5rem;
          background: rgba(10, 16, 26, 0.8);
          border: 1px solid rgba(110, 231, 255, 0.2);
          color: rgba(221, 233, 255, 0.75);
          border-radius: 9999px;
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }
        .radio-pill-group label:hover {
          border-color: rgba(139, 92, 246, 0.45);
          color: white;
        }
        .radio-pill-group input[type='radio']:checked + label {
          background: linear-gradient(135deg, rgba(58, 180, 242, 0.85), rgba(139, 92, 246, 0.85));
          color: white;
          border-color: transparent;
          box-shadow: 0 16px 40px rgba(58, 180, 242, 0.35);
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.55em] text-slate-200/70">Transparente Minuten-Modelle</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Preise, die mit deinem Volumen mitwachsen</h2>
          <p className="mt-6 text-lg leading-8 text-slate-200/75">
            Wähle ein Paket oder starte flexibel. Alle Pläne enthalten Support, Updates & Zugang zum Mission Control Dashboard.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`tech-card relative rounded-3xl p-8 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {plan.name === 'Business' && (
                <span className="absolute -top-3 right-6 rounded-full bg-[#3AB4F2] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-black">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-200/70">{plan.description}</p>
              <p className="mt-6 text-4xl font-bold text-white">{plan.base}€<span className="ml-2 text-sm font-medium text-slate-300">/Monat</span></p>
              <a href="#demo" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] ${plan.name === 'Business' ? 'neon-button text-white' : 'outline-button text-white'}`}>
                Plan wählen
              </a>
              <ul className="mt-8 space-y-3 text-sm text-slate-200/80">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#6EE7FF]" /> {plan.incl} Minuten inklusive
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#6EE7FF]" /> Überminuten {plan.over.toFixed(2)} €/Min
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#6EE7FF]" /> Integrationen, Mission Control & Analytics
                </li>
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-200/70">
          Oder ohne Grundgebühr starten: <strong className="text-[#6EE7FF]">PAYG (FLEX)</strong> – 0,24 € / Min, Mindestumsatz 29 € / Monat.
        </p>
        <p className="mt-2 text-center text-sm text-slate-200/70">
          Einmalige Setup-Fee <strong className="text-[#6EE7FF]">299 €</strong> · entfällt bei Jahresabo Business.
        </p>

        <div className="mt-14 rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Call Volumen abschätzen</h3>
              <p className="mt-2 text-sm text-slate-200/70">Zieh den Regler oder wähle ein Profil – wir zeigen dir, welches Paket passt.</p>

              <div className="relative mt-10">
                <div ref={tooltipRef} className="slider-tooltip">{calls} Calls</div>
                <input
                  ref={sliderRef}
                  id="pr-calls-slider"
                  type="range"
                  min={50}
                  max={2000}
                  step={10}
                  value={calls}
                  onChange={(e) => setCalls(parseInt(e.target.value, 10))}
                  className="range-slider"
                  style={{ ['--progress' as const]: `${((calls - 50) / (2000 - 50)) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <fieldset>
                <legend className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70">Profil auswählen</legend>
                <div className="mt-4 flex flex-wrap gap-3 radio-pill-group">
                  <div>
                    <input type="radio" id="prof_med" name="pr-profile" value="3.5" checked={profile === 3.5} onChange={handleProfileChange} />
                    <label htmlFor="prof_med">Med · 3.5 Min</label>
                  </div>
                  <div>
                    <input type="radio" id="prof_tec" name="pr-profile" value="3.0" checked={profile === 3.0} onChange={handleProfileChange} />
                    <label htmlFor="prof_tec">Tec · 3.0 Min</label>
                  </div>
                  <div>
                    <input type="radio" id="prof_gas" name="pr-profile" value="2.5" checked={profile === 2.5} onChange={handleProfileChange} />
                    <label htmlFor="prof_gas">Gastro · 2.5 Min</label>
                  </div>
                </div>
              </fieldset>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">Minuten / Monat</p>
                  <p className="mt-2 text-xl font-semibold text-white">{totalMinutes}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">Empfohlen</p>
                  <p className="mt-2 text-xl font-semibold text-white">{recommendedPlan}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">Preis-Richtwert</p>
                  <p className="mt-2 text-xl font-semibold text-white">{estimatedPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-200/60">
          <span className="rounded-full border border-white/10 px-4 py-2">ISO 27001 Audited</span>
          <span className="rounded-full border border-white/10 px-4 py-2">GDPR &amp; DSGVO Ready</span>
          <span className="rounded-full border border-white/10 px-4 py-2">99.9% Uptime SLA</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
