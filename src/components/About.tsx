import React from 'react';
import { Award, GraduationCap, Scale, MapPin } from 'lucide-react';
import { aboutData, lawyerProfile } from '../data/portfolioData';
import { JusticeScalesLogo } from './JusticeScalesLogo';
import portfolioOfficeImg from '../assets/images/othman-marei-portfolio-office.jpeg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f8fafc] border-t border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl text-right">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase font-sans-arabic">
              {aboutData.sectionTitle}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-legal font-bold text-[#0f172a] tracking-tight">
            {aboutData.headline}
          </h2>
        </div>

        <div className="mb-14 text-right">
          <div className="mb-6 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-serif-legal font-bold text-[#0f172a]">من مكتب المستشار عثمان مرعي</h3>
            <p className="mt-2 text-sm text-[#475569]">لقطات من المكتب والمسيرة المهنية.</p>
          </div>
          <figure className="max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <img src={portfolioOfficeImg} alt="المستشار عثمان مرعي في مكتبه" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption className="px-5 py-3 text-xs font-medium text-slate-600">المستشار عثمان مرعي في مكتبه</figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Visual & Philosophy Card (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-md relative">
            <div className="flex items-center gap-2 mb-3 text-blue-600">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <JusticeScalesLogo className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-xs font-bold font-sans-arabic text-blue-800">الرؤية وفلسفة العدالة</span>
                </div>
                <p className="font-serif-legal text-base sm:text-lg text-[#1e293b] leading-relaxed italic text-right font-medium">
                  {aboutData.philosophy}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748b] font-normal text-right">
                  <span className="text-[#0f172a] font-bold">المستشار عثمان مرعي</span>
                  <span className="text-blue-700 font-bold font-sans-arabic">محامٍ ومستشار قانوني</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6 text-right">
            
            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed font-normal font-sans-arabic">
              {aboutData.biography.map((paragraph, index) => (
                <p key={index} className="text-justify leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-6 border-t border-slate-200">
              {aboutData.keyPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-1">
                  <span className="text-xs font-bold text-blue-700 font-sans-arabic">
                    {pillar.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a] font-serif-legal">
                    {pillar.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Verification / Office Location Note */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-900 font-medium">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                المقر الرئيسي في ههيا، محافظة الشرقية؛ مع متابعة القضايا والاستشارات في جميع محافظات مصر، حضورياً أو عن بُعد بعد تحديد الموعد.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
