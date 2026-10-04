import React, { useState, useEffect } from 'react';
import { ArrowUpLeft } from 'lucide-react';
import { lawyerProfile } from '../data/portfolioData';
import { JusticeScalesLogo } from './JusticeScalesLogo';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'articles', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'الرئيسية', id: 'hero' },
    { href: '#about', label: 'عن المستشار', id: 'about' },
    { href: '#services', label: 'مجالات العمل', id: 'services' },
    { href: '#articles', label: 'المدونة القانونية', id: 'articles' },
    { href: '#faq', label: 'الأسئلة الشائعة', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Zone 1: Official Justice Scales Emblem + Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded-md p-1"
            aria-label="العودة لأعلى الصفحة"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e40af] to-[#0f172a] text-white shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
              <JusticeScalesLogo className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-base sm:text-lg font-serif-legal font-bold tracking-tight text-[#0f172a] group-hover:text-[#2563eb] transition-colors leading-none">
                {lawyerProfile.name}
              </span>
              <span className="text-[11.5px] text-[#475569] font-medium tracking-normal mt-1">
                {lawyerProfile.title}
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#475569]" aria-label="التنقل الرئيسي">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1.5 transition-colors hover:text-[#0f172a] whitespace-nowrap text-[13.5px] ${
                    isActive ? 'text-[#2563eb] font-bold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 right-0 left-0 h-[2.5px] bg-[#2563eb] rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA (Phone number removed as requested) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] transition-all rounded-xl shadow-md shadow-[#2563eb]/20 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
            >
              <span>تواصل معي</span>
              <ArrowUpLeft className="w-4 h-4 stroke-[2.25]" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
