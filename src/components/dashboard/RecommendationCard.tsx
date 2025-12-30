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
  <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-50 shadow-sm group cursor-pointer hover:shadow-lg transition-all">
    <div className="relative h-44 overflow-hidden">
      <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
      <span className="absolute top-4 right-4 bg-black/50 text-white text-[10px] px-4 py-1 rounded-full backdrop-blur-md font-black uppercase tracking-widest">
        {tag}
      </span>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-1 mb-2 text-sm font-bold">
        <span className="text-orange-400">★ {rating}</span>
        <span className="text-slate-300 font-bold text-xs">({reviews})</span>
      </div>
      <h4 className="font-bold text-lg text-slate-800 mb-1 leading-tight">{title}</h4>
      <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">by {author}</p>
      <div className="flex justify-between items-center pt-5 mt-5 border-t border-slate-50">
        <span className="font-black text-slate-800">{credits} Credits</span>
        <div className="bg-green-50 p-2 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  </div>
);

export default RecommendationCard;