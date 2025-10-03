import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="aurora-glow absolute top-1/2 left-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(58,180,242,0.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(transparent, rgba(0,0,0,0.65)), radial-gradient(circle at 20% 20%, rgba(110,231,255,0.18), transparent 60%)' }} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_45%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            ref={textRef}
            className={`space-y-10 transition-all duration-1000 ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.45em] text-sky-100/80">
              <span className="h-2 w-2 rounded-full bg-[#6EE7FF] shadow-[0_0_18px_rgba(110,231,255,0.7)]" />
              Neural Voice & Chat Engine
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7FF] via-[#3AB4F2] to-[#8B5CF6]">VoxOn.ai</span>{' '}
              baut dir den <span className="text-white">WOW-Agenten</span>, der Kunden begeistert und Teams entlastet.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-200/80">
              Next-Gen Conversational AI mit latenzarmen Audio-Streams, adaptivem Gedächtnis und Compliance by Design. Für Praxen, Werkstätten und Hospitality, die auf Premium-Erlebnisse setzen.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <a href="#demo" className="neon-button rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white">
                Demo buchen
              </a>
              <a href="#products" className="outline-button rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
                Tech Stack erkunden
              </a>
            </div>
            <div className="grid w-full gap-6 text-sm text-slate-200/70 sm:grid-cols-2">
              <div className="stat-card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#6EE7FF]/80">Realtime Magic</p>
                <p className="mt-3 text-3xl font-semibold text-white">&lt; 230ms</p>
                <p className="mt-2 text-sm text-slate-300/80">Antwortlatenz mit neuralem Streaming + Emotion Layer.</p>
              </div>
              <div className="stat-card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#6EE7FF]/80">ROI Garantie</p>
                <p className="mt-3 text-3xl font-semibold text-white">+68%</p>
                <p className="mt-2 text-sm text-slate-300/80">Produktivitätsschub laut Pilotprojekten in DACH.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -right-12 hidden h-64 w-64 rounded-full border border-cyan-400/40 blur-xl sm:block" />
            <div className="glass-panel halo-border relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(110,231,255,0.45),transparent)] blur-2xl" />
              <div className="relative space-y-8">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-100/70">
                  <span>Session Monitor</span>
                  <span>Realtime</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <div className="flex items-center justify-between text-sm text-slate-200/80">
                    <span>Call Intention</span>
                    <span className="rounded-full bg-[#3AB4F2]/10 px-3 py-1 text-xs text-[#6EE7FF]">Smart Routing</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    {[{ label: 'Voiceprint Warmth', value: 82 }, { label: 'Resolution Score', value: 94 }, { label: 'Compliance Layer', value: 100 }].map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-xs text-slate-200/70">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="mt-1 h-2 rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#3AB4F2] via-[#6EE7FF] to-[#8B5CF6]"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-100/70">Voice-ID</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Multi-Lingual</p>
                    <p className="mt-1 text-xs text-slate-300/70">Deutsch · Englisch · Französisch · Italienisch</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-100/70">Security</p>
                    <p className="mt-2 text-2xl font-semibold text-white">ISO 27001</p>
                    <p className="mt-1 text-xs text-slate-300/70">Zero retention · EU Cloud · Audit ready</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-cyan-400/30 bg-black/40 p-4">
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#6EE7FF]/80">Live KPI</p>
                    <p className="mt-1 text-2xl font-semibold text-white">4.9 ★</p>
                    <p className="text-xs text-slate-300/70">Conversational CSAT</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#6EE7FF]/80">Automation</p>
                    <p className="mt-1 text-2xl font-semibold text-white">92%</p>
                    <p className="text-xs text-slate-300/70">Request resolution rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
