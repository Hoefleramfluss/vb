import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CodingBackground from './CodingBackground';

const Demo: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="demo" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 opacity-15">
        <CodingBackground />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(110,231,255,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xs uppercase tracking-[0.55em] text-slate-200/70">Next Step</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Starte deine VoxOn Experience</h2>
          <p className="mt-6 text-lg leading-8 text-slate-200/75">
            Buche eine geführte Live-Demo oder lass uns gemeinsam deinen Anwendungsfall durchgehen. Wir zeigen dir die Mission Control, die Voices und deinen individuellen ROI.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          {submitted ? (
            <div className={`rounded-3xl border border-[#6EE7FF]/30 bg-[#0f1d2f]/70 p-10 text-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <h3 className="text-3xl font-semibold text-white">Danke für dein Vertrauen!</h3>
              <p className="mt-4 text-base text-slate-200/80">
                Unser Team meldet sich innerhalb von 24 Stunden mit Terminvorschlägen und einem Quick-Questionnaire, damit wir deine Demo personalisieren können.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`grid gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div>
                <label htmlFor="name" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70">Name / Unternehmen</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="organization"
                  required
                  placeholder="Wie dürfen wir dich ansprechen?"
                  className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#6EE7FF] focus:outline-none focus:ring-2 focus:ring-[#3AB4F2]/60"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="Für Demo-Zugang & Follow-up"
                  className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#6EE7FF] focus:outline-none focus:ring-2 focus:ring-[#3AB4F2]/60"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70">Telefon <span className="text-slate-400">(optional)</span></label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="Für schnelle Rückfragen"
                  className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#6EE7FF] focus:outline-none focus:ring-2 focus:ring-[#3AB4F2]/60"
                />
              </div>
              <div>
                <label htmlFor="usecase" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70">Use Case</label>
                <textarea
                  id="usecase"
                  name="usecase"
                  rows={4}
                  placeholder="Erzähl uns kurz von deinem Team, euren Touchpoints und wo VoxOn entlasten soll."
                  className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#6EE7FF] focus:outline-none focus:ring-2 focus:ring-[#3AB4F2]/60"
                />
              </div>
              <button
                type="submit"
                className="neon-button rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white"
              >
                Jetzt Demo sichern
              </button>
              <p className="text-center text-xs text-slate-300/60">
                Wir nutzen deine Angaben ausschließlich zur Bearbeitung deiner Anfrage. Datenschutz? Siehe unten.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;
