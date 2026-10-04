import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { qualificationsData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const degrees = qualificationsData.filter(q => q.type === 'degree');
  const certificatesAndMemberships = qualificationsData.filter(q => q.type !== 'degree');

  return (
    <section id="education" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase font-sans-arabic">
              الخلفية الأكاديمية والتأهيل
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-legal font-bold text-[#0f172a] tracking-tight">
            التعليم والمؤهلات المهنية
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal font-sans-arabic">
            تأهيل أكاديمي عالٍ وتراخيص مهنية معتمدة تضمن تقديم استشارات قانونية موثوقة ومطابقة لأحدث التشريعات وأحكام المحاكم العليا.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degrees Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-right">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#0f172a] pb-3 border-b border-slate-200 font-serif-legal">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg">الدرجات العلمية والجامعية</span>
            </div>

            <div className="space-y-4">
              {degrees.map((qual) => (
                <div 
                  key={qual.id} 
                  className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-blue-400 transition-colors shadow-xs"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-base sm:text-lg font-serif-legal font-bold text-[#0f172a]">
                      {qual.degree}
                    </h3>
                    <span className="text-xs font-bold text-blue-800 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 shrink-0 font-sans-arabic">
                      {qual.year}
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-blue-900 font-bold font-sans-arabic mb-3">
                    {qual.institution}
                  </p>
                  
                  <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed font-sans-arabic pt-2 border-t border-slate-200/80">
                    {qual.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships & Specializations Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-right">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#0f172a] pb-3 border-b border-slate-200 font-serif-legal">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-lg">العضويات والتراخيص المتخصصة</span>
            </div>

            <div className="space-y-4">
              {certificatesAndMemberships.map((qual) => (
                <div 
                  key={qual.id} 
                  className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-blue-400 transition-colors shadow-xs"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-base sm:text-lg font-serif-legal font-bold text-[#0f172a]">
                      {qual.degree}
                    </h3>
                    <span className="text-xs font-bold text-blue-800 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 shrink-0 font-sans-arabic">
                      {qual.year}
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-blue-900 font-bold font-sans-arabic mb-3">
                    {qual.institution}
                  </p>
                  
                  <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed font-sans-arabic pt-2 border-t border-slate-200/80">
                    {qual.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
