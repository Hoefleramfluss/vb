import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CodingBackground from './CodingBackground';

const steps = [
  {
    title: 'Discovery & Blueprint',
    description: 'Gemeinsamer VoxOn Launch Workshop, Zieldefinition & Datenaufnahme. Wir bauen deinen Conversational Blueprint in < 48h.',
    badge: 'Day 0-2',
  },
  {
    title: 'Training & Integrationen',
    description: 'Feeding deiner Inhalte, Style-Guides und Tools. Wir verbinden Kalender, CRM und Automations via API & Webhooks.',
    badge: 'Day 3-7',
  },
  {
    title: 'Go Live & Iteration',
    description: 'Soft Launch mit Monitoring im Mission Control Dashboard. Feinjustierung, KPI-Tracking und Scale-Up.',
    badge: 'Day 8-14',
  },
];

const HowItWorks: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="how-it-works" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 opacity-15">
        <CodingBackground />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xs uppercase tracking-[0.55em] text-slate-200/70">Launch in 3 Phasen</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Von Idee zu WOW-Erlebnis in unter zwei Wochen
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-200/75">
            Unser Team begleitet dich von der Vision bis zur Optimierung. Transparent, iterativ und mit echtem Partner-Feeling.
          </p>
        </div>
        <div className="relative mt-20 grid gap-10 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`tech-card relative overflow-hidden rounded-3xl p-8 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(58,180,242,0.3),transparent)] blur-3xl" />
              <div className="relative mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-100/70">
                <span className="h-2 w-2 rounded-full bg-[#6EE7FF]" />
                {step.badge}
              </div>
              <h3 className="relative mt-6 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="relative mt-4 text-sm leading-6 text-slate-200/75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
