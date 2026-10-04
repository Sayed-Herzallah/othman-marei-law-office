import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Check, 
  Copy, 
  ShieldCheck,
  Building,
  ArrowUpLeft
} from 'lucide-react';
import { lawyerProfile } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم ورحمة الله، أود الاستفسار والتواصل مع المستشار عثمان مرعي بخصوص استشارة قانونية.`
  );

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase font-sans-arabic">
              التواصل والاتصال المباشر
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-legal font-bold text-[#0f172a] tracking-tight">
            تواصل معي
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal font-sans-arabic">
            للحصول على استشارة قانونية متخصصة أو دراسة ملف قضائي؛ يسعدني استقبال استفساراتكم ومكالماتكم مباشرة عبر القنوات الرسمية المعتمدة التالية دون أي وسطاء.
          </p>
        </div>

        {/* Professional Direct Contact Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl">
          
          {/* Card 1: Direct Phone Call */}
          <div className="p-8 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-blue-500 hover:bg-white shadow-xs hover:shadow-lg text-right flex flex-col justify-between transition-all group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform shadow-xs">
                <Phone className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-blue-700 uppercase font-sans-arabic block mb-1">
                الاتصال الهاتفي المباشر
              </span>
              <h3 className="text-lg font-serif-legal font-bold text-[#0f172a] mb-2">
                الهاتف المكتبي والمحمول
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-sans-arabic">
                للمحادثة الهاتفية المباشرة مع المستشار أو مكتب السكرتارية القانونية لتحديد موعد مقابلة.
              </p>

              {/* Number display: Bold, high-contrast, crystal clear */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 mb-6 flex items-center justify-between shadow-xs" dir="ltr">
            <span className="font-mono text-lg font-extrabold text-[#0f172a] tracking-wide">
                  {lawyerProfile.phoneDisplay}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(lawyerProfile.phoneDisplay, 'phone')}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  title="نسخ رقم الهاتف"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <a
              href={`tel:${lawyerProfile.phone}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] transition-all shadow-md shadow-blue-600/20"
            >
              <span>اتصال هاتفي الآن</span>
              <ArrowUpLeft className="w-4 h-4 stroke-[2.25]" />
            </a>
          </div>

          {/* Card 2: Instant WhatsApp Direct */}
          <div className="p-8 rounded-2xl bg-[#f8fafc] border border-emerald-300 hover:border-emerald-500 hover:bg-white shadow-xs hover:shadow-lg text-right flex flex-col justify-between transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600" />
            
            <div>
              <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform shadow-xs">
                <MessageSquare className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-emerald-700 uppercase font-sans-arabic block mb-1">
                المراسلة الفورية
              </span>
              <h3 className="text-lg font-serif-legal font-bold text-[#0f172a] mb-2">
                تطبيق واتساب الرسمي
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-sans-arabic">
                لإرسال تفاصيل الاستفسار أو صور المستندات القضائية مباشرة والرد الفوري خلال ساعات العمل.
              </p>

              {/* Number display: Bold, high-contrast, crystal clear */}
              <div className="p-4 rounded-xl bg-white border border-emerald-200 mb-6 flex items-center justify-between shadow-xs" dir="ltr">
                <span className="font-mono text-lg font-extrabold text-emerald-800 tracking-wide">
                  {lawyerProfile.phoneDisplay}
                </span>
                <span className="text-xs text-emerald-700 font-bold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                  متصل الآن
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${lawyerProfile.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 transition-all shadow-md shadow-emerald-600/25"
            >
              <span>محادثة واتساب مباشرة</span>
              <ArrowUpLeft className="w-4 h-4 stroke-[2.25]" />
            </a>
          </div>

        </div>

        {/* Office Location & Working Protocol Detailed Row */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#f8fafc] border border-slate-200 shadow-sm text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase font-sans-arabic">
                <Building className="w-4 h-4 text-blue-600" />
                <span>مقر المكتب والمواعيد الرسمية</span>
              </div>

              <h4 className="text-xl font-serif-legal font-bold text-[#0f172a]">
                مكتب المستشار عثمان مرعي للمحاماة والاستشارات القانونية
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 block font-sans-arabic">العنوان:</span>
                    <span className="text-xs sm:text-sm text-[#0f172a] font-bold font-sans-arabic">
                      {lawyerProfile.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 block font-sans-arabic">ساعات العمل:</span>
                    <span className="text-xs sm:text-sm text-[#0f172a] font-bold font-sans-arabic">
                      {lawyerProfile.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-sans-arabic pt-2 font-medium">
                * المقابلات الشخصية بالمكتب تتم بموجب موعد مسبق لضمان التفرغ الكامل لدراسة ملف قضيتكم.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#0f172a] font-sans-arabic">
                    الحصانة والسرية المهنية
                  </h5>
                  <p className="text-[11.5px] text-[#475569] font-sans-arabic mt-0.5 font-medium">
                    تواصل لمناقشة الاستشارة وتحديد موعد مناسب.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-sans-arabic">
                <span className="text-slate-500 font-bold">نطاق الخدمة</span>
                <span className="font-extrabold text-blue-800">{lawyerProfile.licenseNumber}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
