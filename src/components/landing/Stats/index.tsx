interface Stat {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="w-full px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat: Stat, idx: number) => {
        const IconComponent = stat.icon;
        return (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
            <IconComponent className="text-primary" size={32} />
            <h3 className="text-3xl font-black mt-2">{stat.value}</h3>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
          </div>
        );
      })}
    </section>
  );
}