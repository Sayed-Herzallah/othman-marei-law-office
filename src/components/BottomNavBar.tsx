import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Scale, 
  BookOpen, 
  Phone 
} from 'lucide-react';

export const BottomNavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'articles', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

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

  const navItems = [
    { href: '#hero', label: 'الرئيسية', id: 'hero', icon: Home },
    { href: '#about', label: 'عن المستشار', id: 'about', icon: User },
    { href: '#services', label: 'مجالات العمل', id: 'services', icon: Scale },
    { href: '#articles', label: 'المقالات', id: 'articles', icon: BookOpen },
    { href: '#contact', label: 'تواصل معي', id: 'contact', icon: Phone },
  ];

  return (
    <aside 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_24px_rgba(15,23,42,0.10)] px-2 py-1.5 transition-all"
      aria-label="شريط التنقل السفلي السريع"
    >
      <div className="max-w-xl mx-auto flex items-center justify-between sm:justify-around">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 relative group flex-1 max-w-[80px] ${
                isActive 
                  ? 'text-blue-600' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {/* Active top pill indicator like Facebook / iOS */}
              {isActive && (
                <span className="absolute -top-1.5 w-7 h-1 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
              )}
              
              <div className={`p-1 rounded-lg transition-transform ${isActive ? 'scale-110 text-blue-600' : 'group-hover:scale-105'}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
              </div>
              
              <span className={`text-[10px] sm:text-[11.5px] font-sans-arabic tracking-tight mt-0.5 whitespace-nowrap text-center ${
                isActive ? 'font-bold text-blue-700' : 'font-medium text-slate-600'
              }`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};
