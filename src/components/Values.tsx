import React from 'react';
import { Target, Lock, Eye, CheckCircle2, Search, Sparkles } from 'lucide-react';
import { valuesData } from '../data/portfolioData';

export const Values: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crosshair':
        return <Target className="w-5 h-5 text-blue-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-blue-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-blue-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
      case 'Search':
        return <Search className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      default:
        return <Target className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="values" className="py-20 md:py-28 bg-[#f8fafc] border-t border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-blue-600" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase font-sans-arabic">
              المبادئ والمسؤولية
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-legal font-bold text-[#0f172a] tracking-tight">
            قيم العمل والمسؤولية المهنية
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal font-sans-arabic">
            ركائز أساسية تحكم كل استشارة وقضية ومستند قانوني يصدر عن مكتب المستشار عثمان مرعي لضمان أقصى درجات النزاهة وحماية حقوق الموكلين.
          </p>
        </div>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesData.map((val) => (
            <div
              key={val.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 shadow-xs flex flex-col justify-start text-right group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getIcon(val.iconName)}
              </div>
              
              <h3 className="text-lg font-serif-legal font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors mb-2">
                {val.title}
              </h3>
              
              <p className="text-xs sm:text-[13.5px] text-[#334155] leading-relaxed font-sans-arabic font-normal">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
