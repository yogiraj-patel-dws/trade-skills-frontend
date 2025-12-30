interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface SkillsProps {
  skills: Skill[];
  title?: string;
}

export default function Skills({ skills, title = "Popular Skills to Swap" }: SkillsProps) {
  return (
    <section id="explore" className="w-full px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <a href="#" className="text-[#25d18c] font-bold text-sm">View all categories</a>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        {skills.map((skill: Skill) => {
          const IconComponent = skill.icon;
          return (
            <button key={skill.name} className="flex items-center gap-2 whitespace-nowrap px-6 py-3 bg-white border border-slate-200 rounded-full hover:border-[#2beea0] transition-colors font-medium">
              <IconComponent className="text-slate-400" size={18} />
              {skill.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}