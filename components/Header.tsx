import React, { useEffect, useState } from 'react';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { name: 'Lösungen', href: '#products' },
  { name: 'Technologie', href: '#value-props' },
  { name: 'Ablauf', href: '#how-it-works' },
  { name: 'ROI', href: '#roi-calculator' },
  { name: 'Preise', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#02040b]/95 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-3xl border-b border-white/5' :
        'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img className="h-11 w-auto" src="/voxon-logo.svg" alt="VoxOn.ai Logo" />
            <div className="hidden sm:flex flex-col text-xs uppercase tracking-[0.4em] text-sky-200/70">
              <span>VoxOn.ai</span>
              <span className="text-[0.65rem] text-sky-100/60">Neural Service Systems</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm font-semibold uppercase tracking-[0.18em] text-slate-200/80 transition-colors duration-300 hover:text-white"
              >
                <span>{item.name}</span>
                <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#3AB4F2] via-[#6EE7FF] to-[#8B5CF6] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-x-4">
            <div className="rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-100/70">
              DSGVO · Made in EU
            </div>
            <a
              href="#demo"
              className="neon-button rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white"
            >
              VoxOn Live erleben
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden rounded-full border border-white/10 bg-white/5 p-2 text-sky-100/80"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Navigation öffnen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-20 right-4 left-4 z-50 rounded-3xl border border-white/10 bg-[#050b16]/95 p-6 shadow-2xl">
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#demo"
                className="neon-button mt-4 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white"
                onClick={() => setMobileOpen(false)}
              >
                VoxOn Live erleben
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
