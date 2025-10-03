import React from 'react';
import type { Testimonial } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials: Testimonial[] = [
  {
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=128&q=80',
    quote: 'Unsere Praxis nimmt wieder jeden Anruf an – und VoxOn hält gleichzeitig die DSGVO-Vorgaben ein. Das Team ist entspannter, die Patienten sind begeistert.',
    name: 'Dr. Elena Mayer',
    company: 'Leitung, Synapse Clinics',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=128&q=80',
    quote: 'Wir haben Reservierungen um 34 % gesteigert, ohne zusätzliches Personal einzustellen. Die Stimme klingt wie unser Team – und upsellt smart.',
    name: 'Lukas Steiner',
    company: 'Managing Director, Alpine Hospitality',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=128&q=80',
    quote: 'VoxOn integriert sich tief in unsere Werkstattprozesse. Status-Updates, Kostenvoranschläge, alles automatisiert. Kund:innen erhalten Antworten in Sekunden.',
    name: 'Sabine Koller',
    company: 'COO, AutoNova Werkstätten',
  },
];

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="testimonials" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(58,180,242,0.16),transparent_55%)]" />
      <div className="absolute inset-0 opacity-15">
        <div className="aurora-glow absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xs uppercase tracking-[0.55em] text-slate-200/70">Social Proof</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Teams lieben den VoxOn Wow-Faktor</h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`tech-card relative flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="relative">
                <div className="absolute -top-10 right-0 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(110,231,255,0.3),transparent)] blur-2xl" />
                <svg className="h-10 w-10 text-[#6EE7FF]/80" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M12.7 5.3C9.3 7.9 6.2 12.2 6.2 18.5c0 5.4 3.3 7.7 6.6 7.7 3.1 0 5.7-2.5 5.7-5.7 0-3.1-2.3-5.6-5.6-5.6-.4 0-.8 0-1.2.1.7-2.7 2.7-4.9 4.7-6.5l-3.7-3.2Zm11.4 0c-3.4 2.6-6.5 6.9-6.5 13.2 0 5.4 3.3 7.7 6.6 7.7 3.1 0 5.7-2.5 5.7-5.7 0-3.1-2.3-5.6-5.6-5.6-.4 0-.8 0-1.2.1.7-2.7 2.7-4.9 4.7-6.5l-3.7-3.2Z" />
                </svg>
                <p className="mt-6 text-base leading-7 text-slate-200/80">“{testimonial.quote}”</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <img className="h-12 w-12 rounded-full border border-white/20" src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-200/60">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
