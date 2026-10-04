import React, { useEffect } from 'react';
import { X, Calendar, Clock, Share2, Check } from 'lucide-react';
import { ArticleItem } from '../types';
import { JusticeScalesLogo } from './JusticeScalesLogo';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="modal-scrollbar relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-2xl z-10 overflow-y-auto max-h-[calc(100dvh-10rem)] text-right">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-100 border border-slate-200 transition-colors"
              title="نسخ رابط المقال"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">تم النسخ</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>مشاركة</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="إغلاق المقال"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 font-sans-arabic">
            <JusticeScalesLogo className="w-4 h-4 text-blue-600" />
            <span>دراسات وبحوث قانونية</span>
          </div>
        </div>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mb-4 font-sans-arabic font-bold">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>{article.date}</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-800">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>{article.readingTime}</span>
          </span>
        </div>

        {/* Title */}
        <h1 id="modal-article-title" className="text-2xl sm:text-3xl font-serif-legal font-bold text-[#0f172a] mb-6 leading-relaxed">
          {article.title}
        </h1>

        {/* Excerpt Lead */}
        <div className="p-4 rounded-xl bg-blue-50/70 border-r-4 border-blue-600 border border-blue-200 text-xs sm:text-sm text-blue-950 font-bold leading-relaxed mb-8 font-sans-arabic">
          {article.excerpt}
        </div>

        {/* Article Body Paragraphs */}
        <div className="space-y-6 text-[15px] sm:text-base text-[#334155] leading-8 font-sans-arabic font-normal">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="text-right">
            <p className="text-xs text-slate-500 font-sans-arabic font-medium">كاتب المقال</p>
            <h4 className="text-base font-bold text-[#0f172a] font-serif-legal">المستشار عثمان مرعي</h4>
            <p className="text-xs text-blue-700 font-bold font-sans-arabic mt-0.5">محامٍ بالنقض والدستورية ومستشار قانوني</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <JusticeScalesLogo className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 leading-relaxed font-sans-arabic">
          تنويه: هذه المقالات والبحوث مخصصة لنشر الثقافة والتوعية القانونية العامة، ولا تغني عن استشارة المستشار القانوني المتخصص لدراسة وقائع ومستندات كل قضية على حدة.
        </div>

      </div>
    </div>
  );
};
