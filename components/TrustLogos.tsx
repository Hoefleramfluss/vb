import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const logos = [
  'Synapse Clinics',
  'AutoNova Werkstätten',
  'Alpine Hospitality',
  'Medicus Group',
  'BluePulse Labs',
  'ViennaCare',
  'GastroX',
  'FutureWorks'
];

const TrustLogos: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="trust" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <p className="text-xs uppercase tracking-[0.6em] text-slate-200/70">Trusted by Innovators in Healthcare · Mobility · Hospitality</p>
        </div>
        <div className="relative mt-12 overflow-hidden rounded-full border border-white/10 bg-black/30 py-6">
          <div className={`marquee-track ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo}-${index}`} className="marquee-item">
                <span className="h-2 w-2 rounded-full bg-[#6EE7FF] shadow-[0_0_12px_rgba(110,231,255,0.8)]" />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
