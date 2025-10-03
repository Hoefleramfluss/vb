import React, { useState } from 'react';
import type { FaqItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs: FaqItem[] = [
  {
    question: 'Wie schnell können wir mit VoxOn.ai live gehen?',
    answer: 'In der Regel innerhalb von zwei Wochen. Nach dem Kickoff erstellen wir deinen Conversational Blueprint, trainieren auf deine Inhalte und testen gemeinsam vor dem Launch.',
  },
  {
    question: 'Welche Sprachen und Kanäle unterstützt ihr?',
    answer: 'VoxOn.ai deckt Deutsch, Englisch, Französisch und Italienisch ab – als Voice oder Chat (Web, WhatsApp, Messenger). Weitere Sprachen sind auf Anfrage möglich.',
  },
  {
    question: 'Wie sieht es mit Datenschutz & Hosting aus?',
    answer: 'Wir hosten vollständig in der EU (ISO 27001) und arbeiten DSGVO-konform mit strengen Zugriffskontrollen, Audit Trails und optionaler Datenretention nur nach Freigabe.',
  },
  {
    question: 'Können wir bestehende Systeme anbinden?',
    answer: 'Ja. Über APIs, Webhooks und Low-Code-Konnektoren integrieren wir Kalender, CRM, PMS, ERP oder Kassensysteme. Unser Team begleitet bei individuellen Integrationen.',
  },
];

const Faq: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_55%)]" />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xs uppercase tracking-[0.55em] text-slate-200/70">FAQ &amp; Deep Dive</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Alles, was du vor dem Launch wissen willst</h2>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`rounded-3xl border border-white/10 bg-black/35 p-6 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <dt>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between text-left text-white"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg
                        className={`h-6 w-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#6EE7FF]' : 'rotate-0 text-slate-200/70'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className={`mt-2 overflow-hidden text-sm leading-6 text-slate-200/80 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="pt-2">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Faq;
