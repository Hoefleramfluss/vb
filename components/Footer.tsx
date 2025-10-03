import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const navigation = {
  solutions: [
    { name: 'WorkFlow.Med', href: '#products' },
    { name: 'WorkFlow.Tec', href: '#products' },
    { name: 'WorkFlow.Gastro', href: '#products' },
    { name: 'PersonalAgents', href: '#products' },
  ],
  company: [
    { name: 'Mission Control', href: '#value-props' },
    { name: 'Launch Journey', href: '#how-it-works' },
    { name: 'ROI Rechner', href: '#roi-calculator' },
  ],
  legal: [
    { name: 'Datenschutz', href: '#datenschutz' },
    { name: 'Impressum', href: '#impressum' },
  ],
};

const Footer: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <footer ref={ref} className="relative bg-black/40" aria-labelledby="footer-heading">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(58,180,242,0.14),transparent_55%)]" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className={`mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3">
              <img className="h-12 w-auto" src="/voxon-logo.svg" alt="VoxOn.ai" />
              <div className="flex flex-col text-[0.65rem] uppercase tracking-[0.4em] text-slate-200/70">
                <span>VoxOn.ai</span>
                <span className="text-slate-100/50">Neural Service Systems</span>
              </div>
            </a>
            <p className="text-sm leading-6 text-slate-200/70">
              VoxOn.ai liefert hyperschnelle Voice- & Chat-Agenten mit futuristischem Interface und Compliance by Design. Für Teams, die ein echtes Wow-Erlebnis schaffen wollen.
            </p>
            <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-slate-200/60">
              <span className="rounded-full border border-white/10 px-3 py-1">ISO 27001</span>
              <span className="rounded-full border border-white/10 px-3 py-1">DSGVO Ready</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Realtime Voice</span>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Lösungen</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-slate-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Entdecken</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-slate-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Rechtliches</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-slate-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Kontakt</h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li>hello@voxon.ai</li>
                  <li>+43 660 000000</li>
                  <li>Made in Vienna · Remote first</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} VoxOn.ai. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
