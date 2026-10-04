import React, { useState } from 'react';
import { ArrowUpLeft, Calendar, Clock, BookOpen, Tag } from 'lucide-react';
import legalInsightsImg from '../assets/images/othman_legal_insights_1790274949358.jpg';
import { articlesData } from '../data/portfolioData';
import { ArticleItem } from '../types';
import { ArticleModal } from './ArticleModal';

export const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة المقالات' },
    { id: 'الأحوال الشخصية', label: 'الأحوال الشخصية والتركات' },
    { id: 'قضايا الأسرة', label: 'قضايا الأسرة والنفقة' },
    { id: 'القانون التجاري', label: 'القانون التجاري والعقود' },
    { id: 'القانون الجنائي', label: 'القانون الجنائي والنقض' },
    { id: 'العقاري', label: 'القانون العقاري والمدني' },
    { id: 'قضايا العمل', label: 'قضايا العمل والعمال' },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articlesData
    : articlesData.filter(a => a.category.includes(selectedCategory) || selectedCategory.includes(a.category));

  const featuredArticle = filteredArticles[0] || articlesData[0];
  const secondaryArticles = filteredArticles.slice(1);

  return (
    <section id="articles" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl text-right">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-blue-600" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase font-sans-arabic">
                المدونة القانونية والرؤى
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-legal font-bold text-[#0f172a] tracking-tight">
              مقالات وبحوث قانونية متخصصة
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-normal font-sans-arabic">
              إضاءات نظامية وتحليلات عملية لأبرز المستجدات في قضايا الأحوال الشخصية، قسمة التركات، صياغة العقود، وضمانات المحاكمة الجنائية بقلم المستشار عثمان مرعي.
            </p>
          </div>

          <div className="text-xs font-sans-arabic text-blue-900 font-bold bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl hidden md:block">
            مقالات ورؤى قانونية
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <Tag className="w-4 h-4 text-blue-600 ml-2 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all font-sans-arabic cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Editorial Article */}
        {featuredArticle && (
          <div className="mb-12 rounded-2xl overflow-hidden bg-[#f8fafc] border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-md group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Cover Image (5 cols) */}
              <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100">
                <img
                  src={legalInsightsImg}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white font-sans-arabic shadow-md">
                  مقال مميز
                </span>
              </div>

              {/* Content (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between text-right">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#475569] mb-4 font-sans-arabic">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-200">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{featuredArticle.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{featuredArticle.readingTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif-legal font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors mb-4 leading-snug">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-6 font-sans-arabic font-normal">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-[#64748b] font-sans-arabic">
                    بقلم: <strong className="text-[#0f172a] font-bold">المستشار عثمان مرعي</strong>
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    <span>قراءة البحث القانوني كاملاً</span>
                    <ArrowUpLeft className="w-4 h-4 stroke-[2.25]" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl p-6 sm:p-7 bg-[#f8fafc] border border-slate-200 hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group hover:-translate-y-1 text-right"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#475569] mb-3 font-sans-arabic">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-200 text-[11px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-700 font-bold text-[11.5px]">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{article.readingTime}</span>
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-serif-legal font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                  {article.title}
                </h4>

                <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed mb-6 font-sans-arabic line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-bold font-sans-arabic text-[11.5px]">
                  {article.date}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>قراءة المقال</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Interactive Article Reading Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
