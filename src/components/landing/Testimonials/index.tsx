import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function Testimonials({ testimonials, title = "Community Stories", subtitle = "See what happens when people come together." }: TestimonialsProps) {
  return (
    <section id="stories" className="w-full px-6 py-12">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-black mb-4">{title}</h2>
        <p className="text-slate-600">{subtitle}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t: Testimonial, idx: number) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-slate-700 mb-6 leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} className="size-12 rounded-full object-cover" alt={t.name} />
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}