import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowUpLeft, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { JusticeScalesLogo } from './JusticeScalesLogo';

interface PracticeModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({ service, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="modal-scrollbar relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-2xl z-10 overflow-y-auto max-h-[calc(100dvh-10rem)] text-right">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200 mb-6">
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 font-sans-arabic">
            <JusticeScalesLogo className="w-4 h-4 text-blue-600" />
            <span>نطاق الممارسة القانونية</span>
          </div>
        </div>

        {/* Content Header */}
        <div className="mb-6">
          <span className="text-xs font-bold text-blue-700 font-sans-arabic block mb-1">
            {service.subtitle}
          </span>
          <h2 id="modal-title" className="text-xl sm:text-2xl font-serif-legal font-bold text-[#0f172a]">
            {service.title}
          </h2>
          <p className="mt-3 text-[15px] sm:text-base text-[#334155] leading-8 font-sans-arabic">
            {service.description}
          </p>
        </div>

        {/* Detailed Scope Points */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-blue-800 font-sans-arabic mb-4">
            يشمل نطاق الممارسة والعمل:
          </h4>
          <ul className="space-y-3">
            {service.scopePoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-xl bg-white px-3 py-2.5 text-sm sm:text-[15px] leading-7 text-[#1e293b] font-sans-arabic">
                <CheckCircle className="w-[18px] h-[18px] text-blue-600 shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables / Output */}
        <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h4 className="text-sm font-bold text-slate-800 font-sans-arabic mb-4">
            المخرجات والنتائج النظامية المتوقعة:
          </h4>
          <ul className="space-y-3">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] leading-7 text-[#334155] font-sans-arabic">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Confidentiality Notice */}
        <div className="flex items-center gap-2 p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 font-medium mb-6">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>كافة البيانات والوثائق المعروضة تخضع لميثاق السرية المهنية التامة.</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
          >
            إغلاق
          </button>
          
          <button
            type="button"
            onClick={() => onInquire(service.title)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] transition-all rounded-xl shadow-md shadow-blue-600/25"
          >
            <span>تواصل بخصوص هذه الممارسة</span>
            <ArrowUpLeft className="w-4 h-4 stroke-[2.25]" />
          </button>
        </div>

      </div>
    </div>
  );
};
