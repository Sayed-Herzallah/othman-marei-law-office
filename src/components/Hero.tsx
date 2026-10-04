import React from 'react';
import { ArrowUpLeft, ShieldCheck, Scale, Award } from 'lucide-react';
import othmanPortraitImg from '../assets/images/othman-marei-portfolio-office.jpeg';
import { lawyerProfile } from '../data/portfolioData';
import { JusticeScalesLogo } from './JusticeScalesLogo';

interface HeroProps {
  onContactClick: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onAboutClick }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc]">
      {/* Subtle Royal Blue Atmospheric Highlights */}
      <div 
        className="absolute top-1/4 -right-28 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 -left-28 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Accreditation Badge with Justice Scale Icon */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-200 text-xs font-bold text-blue-900 mb-6 shadow-xs">
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <JusticeScalesLogo className="w-3 h-3 text-white" />
              </div>
              <span className="font-sans-arabic">{lawyerProfile.title}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-700 font-semibold">متابعة القضايا في جميع المحافظات</span>
            </div>

            {/* Authoritative Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif-legal font-bold text-[#0f172a] leading-[1.3] tracking-tight mb-6 max-w-2xl">
              المستشار عثمان مرعي — محامٍ في ههيا والشرقية
            </h1>

            {/* Editorial Supporting Paragraph */}
            <p className="text-base sm:text-[17px] text-[#334155] leading-relaxed mb-8 max-w-2xl font-normal font-sans-arabic">
              مكتب المستشار عثمان مرعي للمحاماة والاستشارات القانونية بمدينة ههيا. نتابع القضايا في جميع محافظات مصر، من أسوان إلى الإسكندرية، في مجالات الأسرة والمدني والجنائي والتجاري والميراث وغيرها.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] transition-all rounded-xl shadow-lg shadow-blue-600/25 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>تواصل معي مباشرة</span>
                <ArrowUpLeft className="w-4 h-4 stroke-[2.25]" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#1e293b] hover:text-[#0f172a] bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 transition-all rounded-xl shadow-xs cursor-pointer"
              >
                <span>مجالات العمل والقضايا</span>
              </a>
            </div>

            {/* Institutional Credentials Grid (Numbers in high contrast, sharp and crystal clear) */}
            <div className="pt-8 border-t border-slate-200 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-right">
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Award className="w-5 h-5 shrink-0" />
                  <span className="text-lg sm:text-xl font-extrabold font-serif-legal text-[#0f172a] tracking-tight">جميع محافظات مصر</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] font-medium font-sans-arabic">نطاق متابعة القضايا</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Scale className="w-5 h-5 shrink-0" />
                  <span className="text-xl sm:text-2xl font-extrabold font-serif-legal text-[#0f172a] tracking-tight">مدينة ههيا</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] font-medium font-sans-arabic">مقر المكتب</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <span className="text-xl sm:text-2xl font-extrabold font-serif-legal text-[#0f172a] tracking-tight">هاتف وواتساب</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] font-medium font-sans-arabic">للتواصل وتحديد موعد</p>
              </div>
            </div>

          </div>

          {/* Portrait Column (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div 
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-blue-200 via-slate-100 to-blue-100 blur-sm pointer-events-none" 
                aria-hidden="true" 
              />
              
              {/* Portrait Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl">
                <img
                  src={othmanPortraitImg}
                  alt="المستشار عثمان مرعي — محامٍ ومستشار قانوني"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle vignette gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Overlaid Institutional Card at bottom of photo */}
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-right shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-[#0f172a] font-serif-legal">
                        المستشار عثمان مرعي
                      </h2>
                      <p className="text-[11.5px] text-blue-700 font-bold font-sans-arabic mt-0.5">
                        محامٍ ومستشار قانوني — جميع محافظات مصر
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <JusticeScalesLogo className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
