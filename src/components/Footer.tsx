import React from 'react';
import { 
  ArrowUp, 
  Home, 
  User, 
  Briefcase, 
  BookOpen, 
  HelpCircle, 
  Phone, 
  MessageSquare, 
  Scale
} from 'lucide-react';
import { lawyerProfile, servicesData } from '../data/portfolioData';
import { JusticeScalesLogo } from './JusticeScalesLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { href: '#hero', label: 'الرئيسية', icon: Home },
    { href: '#about', label: 'عن المستشار', icon: User },
    { href: '#services', label: 'مجالات العمل', icon: Scale },
    { href: '#articles', label: 'المدونة القانونية', icon: BookOpen },
    { href: '#faq', label: 'الأسئلة الشائعة', icon: HelpCircle },
    { href: '#contact', label: 'تواصل معي', icon: Phone },
  ];

  return (
    <footer className="bg-[#f8fafc] text-slate-700 border-t border-slate-200 text-right pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Quick Interactive Nav Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand & Brief (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white shadow-md flex items-center justify-center">
                <JusticeScalesLogo className="w-6 h-6 text-white" />
              </div>
              <div>
                <a
                  href="#hero"
                  className="text-xl font-serif-legal font-bold tracking-tight text-[#0f172a] hover:text-blue-700 transition-colors block"
                >
                  {lawyerProfile.name}
                </a>
                <p className="text-xs text-blue-700 font-bold font-sans-arabic mt-0.5">
                  {lawyerProfile.title} — مدينة ههيا، محافظة الشرقية
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed max-w-md font-normal font-sans-arabic">
              مكتب محاماة في مدينة ههيا لمتابعة القضايا والاستشارات القانونية في محافظة الشرقية.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={`tel:${lawyerProfile.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span dir="ltr">{lawyerProfile.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${lawyerProfile.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-800 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span>واتساب</span>
              </a>

            </div>
          </div>

          {/* Practice Areas Links (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 font-sans-arabic mb-4">
              أبرز مجالات العمل والممارسة
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans-arabic">
              {servicesData.slice(0, 8).map((srv) => (
                <a
                  key={srv.id}
                  href="#services"
                  className="text-slate-600 hover:text-blue-700 transition-colors line-clamp-1 py-1 font-medium"
                >
                  • {srv.title}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Page Links & Back to Top (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 font-sans-arabic mb-4">
                خريطة الموقع
              </h4>
              <nav className="grid grid-cols-2 gap-2 text-xs font-sans-arabic font-medium">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-600 hover:text-blue-700 transition-colors py-1 flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
                <span>العودة لأعلى الصفحة</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans-arabic">
          <p className="text-right">
            الموقع المهني الرسمي للمستشار عثمان مرعي — محامٍ بالنقض ومستشار قانوني. جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>

          <p className="text-center md:text-left text-slate-500">
            المحتوى المنشور للأغراض التعريفية والتثقيفية ولا يُعد استشارة نهائية إلا بعد توقيع العقد الرسمي.
          </p>
        </div>

      </div>
    </footer>
  );
};
