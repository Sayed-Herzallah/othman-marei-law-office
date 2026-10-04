import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/portfolioData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#f8fafc] border-t border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase font-sans-arabic">
              الاستفسارات المتكررة
            </span>
            <span className="w-6 h-[2px] bg-blue-600" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-legal font-bold text-[#0f172a] tracking-tight">
            الأسئلة الشائعة
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal font-sans-arabic">
            إجابات واضحة ومباشرة عن الاستفسارات القانونية الأكثر تكراراً وآليات العمل والسرية لدى مكتب المستشار عثمان مرعي.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 text-right">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-600 shadow-md ring-1 ring-blue-600/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`answer-${item.id}`}
                >
                  <span className={`text-base sm:text-lg font-serif-legal font-bold transition-colors ${
                    isOpen ? 'text-blue-700' : 'text-[#0f172a]'
                  }`}>
                    {item.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform shrink-0 ${
                    isOpen 
                      ? 'bg-blue-600 text-white rotate-180 shadow-xs' 
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`answer-${item.id}`}
                  hidden={!isOpen}
                  className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#334155] leading-relaxed border-t border-slate-100 font-sans-arabic pt-4 font-normal"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
