import React, { useMemo, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RoiCalculator: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [employees, setEmployees] = useState(10);
  const [hours, setHours] = useState(5);
  const [rate, setRate] = useState(40);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const { weeklySavings, monthlySavings, yearlySavings } = useMemo(() => {
    const weekly = employees * hours * rate;
    const monthly = weekly * 4.33;
    const yearly = monthly * 12;
    return {
      weeklySavings: formatCurrency(weekly),
      monthlySavings: formatCurrency(monthly),
      yearlySavings: formatCurrency(yearly),
    };
  }, [employees, hours, rate]);

  const progressStyle = (value: number, min: number, max: number): React.CSSProperties => ({
    ['--progress' as const]: `${((value - min) / (max - min)) * 100}%`,
  });

  return (
    <section ref={ref} id="roi-calculator" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(110,231,255,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xs uppercase tracking-[0.55em] text-slate-200/70">ROI live berechnen</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Wie viel Entlastung bringt VoxOn.ai deinem Team?</h2>
          <p className="mt-6 text-lg leading-8 text-slate-200/75">
            Passe die Regler an und sieh sofort, welches Einsparpotenzial unsere Agenten freisetzen. Alle Werte basieren auf realen Projektdaten.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className={`tech-card rounded-3xl p-10 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <h3 className="text-xl font-semibold text-white">Team-Setup</h3>
            <p className="mt-3 text-sm text-slate-200/70">Wie viele Menschen arbeiten aktuell an euren Routine-Calls und Tickets?</p>

            <div className="mt-8 space-y-8">
              <div>
                <label htmlFor="employees" className="flex justify-between text-sm font-semibold text-slate-100">
                  <span>Mitarbeiter:innen im Team</span>
                  <span className="text-[#6EE7FF]">{employees}</span>
                </label>
                <input
                  id="employees"
                  type="range"
                  min={1}
                  max={120}
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value, 10))}
                  className="range-slider mt-4"
                  style={progressStyle(employees, 1, 120)}
                />
              </div>
              <div>
                <label htmlFor="hours" className="flex justify-between text-sm font-semibold text-slate-100">
                  <span>Ø Stunden pro Woche</span>
                  <span className="text-[#6EE7FF]">{hours}</span>
                </label>
                <input
                  id="hours"
                  type="range"
                  min={1}
                  max={40}
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value, 10))}
                  className="range-slider mt-4"
                  style={progressStyle(hours, 1, 40)}
                />
              </div>
              <div>
                <label htmlFor="rate" className="flex justify-between text-sm font-semibold text-slate-100">
                  <span>Ø Stundensatz</span>
                  <span className="text-[#6EE7FF]">{formatCurrency(rate)}</span>
                </label>
                <input
                  id="rate"
                  type="range"
                  min={15}
                  max={160}
                  value={rate}
                  onChange={(e) => setRate(parseInt(e.target.value, 10))}
                  className="range-slider mt-4"
                  style={progressStyle(rate, 15, 160)}
                />
              </div>
            </div>
            <p className="mt-8 text-xs text-slate-300/60">*Berechnung basiert auf 4.33 Wochen/Monat. Anpassbar auf Anfrage.</p>
          </div>

          <div className={`glass-panel relative overflow-hidden rounded-3xl p-10 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="absolute -top-24 -right-12 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35),transparent)] blur-3xl" />
            <div className="relative space-y-10">
              <h3 className="text-xl font-semibold text-white">Projektierte Einsparungen</h3>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-200/60">Weekly</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{weeklySavings}</p>
                </div>
                <div className="rounded-2xl border border-[#3AB4F2]/40 bg-black/40 p-6 text-center shadow-[0_15px_40px_rgba(58,180,242,0.35)]">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#6EE7FF]/80">Monthly</p>
                  <p className="mt-3 text-4xl font-semibold text-white">{monthlySavings}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-200/60">Yearly</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{yearlySavings}</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm leading-6 text-slate-200/75">
                <p className="font-semibold text-white">VoxOn Insight:</p>
                <p className="mt-2">
                  Teams, die VoxOn.ai einsetzen, reinvestieren die gewonnene Zeit in Umsatzprojekte, Upselling und Premium-Service. Kombiniere den Rechner mit unserem Pricing, um dein ideales Paket zu finden.
                </p>
                <a href="#pricing" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#6EE7FF]">
                  <span>Zu den Preisen</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .range-slider {
          width: 100%;
          appearance: none;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #3AB4F2 var(--progress, 0%), rgba(255,255,255,0.12) var(--progress, 0%));
          outline: none;
          transition: background 0.3s ease;
        }
        .range-slider::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: radial-gradient(circle, #6EE7FF 0%, #3AB4F2 55%, #020617 100%);
          border: 2px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 18px rgba(110, 231, 255, 0.45);
          cursor: pointer;
        }
        .range-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: radial-gradient(circle, #6EE7FF 0%, #3AB4F2 55%, #020617 100%);
          border: 2px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 18px rgba(110, 231, 255, 0.45);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default RoiCalculator;
