import { ArrowRight } from 'lucide-react';

interface RecommendationCardProps {
  title: string;
  author: string;
  rating: number;
  reviews: number;
  credits: number;
  tag: string;
  img: string;
}

const RecommendationCard = ({ title, author, rating, reviews, credits, tag, img }: RecommendationCardProps) => (
  <div className="bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-slate-50 shadow-sm group cursor-pointer hover:shadow-lg transition-all">
    <div className="relative h-36 sm:h-44 overflow-hidden">
      <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 text-white text-[9px] sm:text-[10px] px-3 sm:px-4 py-1 rounded-full backdrop-blur-md font-black uppercase tracking-widest">
        {tag}
      </span>
    </div>
    <div className="p-4 sm:p-6">
      <div className="flex items-center gap-1 mb-2 text-xs sm:text-sm font-bold">
        <span className="text-orange-400">★ {rating}</span>
        <span className="text-slate-300 font-bold text-[10px] sm:text-xs">({reviews})</span>
      </div>
      <h4 className="font-bold text-base sm:text-lg text-slate-800 mb-1 leading-tight line-clamp-2">{title}</h4>
      <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wide truncate">by {author}</p>
      <div className="flex justify-between items-center pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-slate-50">
        <span className="font-black text-slate-800 text-sm sm:text-base">{credits} Credits</span>
        <div className="bg-green-50 p-1.5 sm:p-2 rounded-lg sm:rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors">
          <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
        </div>
      </div>
    </div>
  </div>
);

export default RecommendationCard;