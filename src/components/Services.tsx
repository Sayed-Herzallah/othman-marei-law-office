import React, { useState } from 'react';
import { 
  Scale, 
  FileText, 
  BookOpen, 
  Briefcase, 
  ShieldAlert, 
  Users, 
  Compass, 
  Building2,
  Landmark,
  UserCheck,
  ArrowUpLeft,
  ChevronLeft
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { PracticeModal } from './PracticeModal';

interface ServicesProps {
  onSelectServiceForConsultation: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'UsersCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Scale className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-right">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-blue-600" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase font-sans-arabic">
                مجالات العمل والممارسة
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-legal font-bold text-[#0f172a] tracking-tight">
              تخصصات قانونية وقضائية متكاملة
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal font-sans-arabic">
              خبرات عميقة تشمل قضايا الأسرة والتركات، تأسيس الشركات، صياغة العقود، القضايا الجنائية، والنزاعات العقارية بمستويات تمثيل قضائي واستشاري رفيعة.
            </p>
          </div>

          <div className="text-xs font-sans-arabic text-blue-900 font-bold bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl self-start md:self-end">
            عشرة مجالات للممارسة والاستشارات
          </div>
        </div>

        {/* 10 Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 sm:p-8 bg-[#f8fafc] border border-slate-200 hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group hover:-translate-y-1 ${
                index === 0 || index === 1 ? 'border-blue-300/80 bg-gradient-to-b from-blue-50/40 to-white' : ''
              }`}
            >
              <div>
                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-sans-arabic font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    تخصص ممارس
                  </span>
                </div>

                {/* Service Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-serif-legal font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors mb-2 text-right">
                  {service.title}
                </h3>
                
                <p className="text-xs font-bold text-blue-700 mb-3 text-right font-sans-arabic">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-[13.5px] text-[#334155] leading-relaxed mb-6 text-right font-sans-arabic line-clamp-3">
                  {service.description}
                </p>

                {/* Scope Highlights Preview */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/80 text-right">
                  {service.scopePoints.slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#475569] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>تفاصيل ونطاق العمل</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectServiceForConsultation(service.title)}
                  className="text-xs font-bold text-slate-700 hover:text-blue-600 px-3 py-1.5 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 transition-colors cursor-pointer"
                >
                  تواصل بخصوص هذا المجال
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#f8fafc] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-right shadow-xs">
          <div>
            <h4 className="text-base font-bold text-[#0f172a] font-serif-legal">
              هل لديك قضية أو استشارة في مجال لم يرد ذكره صراحة؟
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] font-sans-arabic mt-1">
              يباشر المستشار عثمان مرعي دراسة مختلف المنازعات النوعية والطعون الاستئنافية والطعن بالنقض.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-bold hover:bg-blue-700 transition-colors shrink-0 shadow-md shadow-blue-600/20"
          >
            <span>استفسر مباشرة</span>
            <ArrowUpLeft className="w-4 h-4 stroke-[2.25]" />
          </a>
        </div>

      </div>

      {/* Practice Details Modal */}
      <PracticeModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(title) => {
          setSelectedService(null);
          onSelectServiceForConsultation(title);
        }}
      />
    </section>
  );
};
