import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const products = [
  {
    name: 'WorkFlow.Med',
    subtitle: 'Der VoxOn Praxis-Agent',
    description: 'Intelligente Terminannahme, Versicherungs-Checks und digitale Karteikarten – in Sekunden statt in Warteschleifen.',
    features: [
      'Medizinisch trainierte Dialoge & dynamische Triagen',
      'Anbindung an Kalender, Praxissoftware & Sprachaufzeichnungen',
      'Empathische Follow-ups inkl. Rezeptverlängerung & Rückruflogik',
    ],
    accent: '#3AB4F2',
  },
  {
    name: 'WorkFlow.Tec',
    subtitle: 'Neuraler Werkstätten-Assistent',
    description: 'Erfasst Schäden, kalkuliert Termine und hält Kund:innen mit proaktiven Status-Pings am Laufenden.',
    features: [
      'VIN-Erkennung & Schadenserfassung via Voice',
      'Direkte Integration in Werkstattplaner & Kostenvoranschlag',
      'Automatisierte SMS/WhatsApp Updates',
    ],
    accent: '#6EE7FF',
  },
  {
    name: 'WorkFlow.Gastro',
    subtitle: 'Der Hospitality Concierge',
    description: 'Reservierungen mit Flair: Anlass, Allergien und Stammgasterkennung inklusive Upselling-Skripten.',
    features: [
      'Mehrsprachige Gästeführung & Tisch-Optimierung',
      'POS/Reservierungs-Connect (z. B. resmio)',
      'Wetter- & Küchenzeitenlogik für perfekte Auslastung',
    ],
    accent: '#8B5CF6',
  },
  {
    name: 'PersonalAgents',
    subtitle: 'Custom AI nach Maß',
    description: 'Trainiert auf deinen Case – von Sales bis Support. Mit Guardrails, Analytics & Co-Pilot Dashboard.',
    features: [
      'Rapid Prototyping in Tagen, skalierbar in der Cloud',
      'Messbare KPIs & Heatmaps für jedes Gespräch',
      'API-first & Automatisierungs-Hooks in deine Tools',
    ],
    accent: '#00E5FF',
  },
];

const Products: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="products" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xs uppercase tracking-[0.55em] text-slate-200/70">VoxOn Modules</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Eine Plattform – vier Branchenpakete mit sofortigem Effekt
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-200/75">
            Wähle dein Modul, adaptiere Workflows und launche in Rekordzeit. Alle Pakete teilen sich die VoxOn Core Engine und erhalten kontinuierliche Feature-Drops.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          {products.map((product, index) => (
            <article
              key={product.name}
              className={`tech-card relative overflow-hidden rounded-3xl p-10 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div
                className="absolute -top-24 -right-24 h-60 w-60 rounded-full blur-3xl"
                style={{ background: `radial-gradient(circle, ${product.accent}33, transparent 70%)` }}
              />
              <header className="relative space-y-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-100/70">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: product.accent }} />
                  {product.subtitle}
                </div>
                <h3 className="text-3xl font-semibold text-white">{product.name}</h3>
                <p className="text-base leading-7 text-slate-200/80">{product.description}</p>
              </header>
              <ul role="list" className="relative mt-8 space-y-4 text-sm text-slate-200/80">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCircleIcon className="h-6 w-6 flex-none text-[#6EE7FF]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <footer className="relative mt-10 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-100/70">
                <span>Go Live &lt; 14 Tage</span>
                <span>CRM · ERP · Voice APIs</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
