import { VALUES, VALUES_SECTION } from "../../constants/constants";
import { HandshakeIcon, ShieldCheck, Globe2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  HandshakeIcon: HandshakeIcon,
  ShieldCheck: ShieldCheck,
  Globe2: Globe2
};

const ValuesSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-[#0d1b13] text-3xl md:text-4xl font-bold mb-4">{VALUES_SECTION.title}</h2>
        <p className="text-[#4c9a6b] text-lg">{VALUES_SECTION.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VALUES.map((val, idx) => {
          const IconComponent = iconMap[val.iconName as keyof typeof iconMap];
          return (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-[#cfe7d9] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-full bg-[#e7f3ec] group-hover:bg-[#2bee79] flex items-center justify-center transition-colors mb-6 text-[#0d1b13]">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-[#0d1b13] text-xl font-bold mb-2">{val.title}</h3>
              <p className="text-[#4c9a6b] leading-relaxed">{val.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuesSection;