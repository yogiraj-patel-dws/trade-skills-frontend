import { STATSAboutUs } from "../../constants/constants";
import { GraduationCap, Globe, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import StatCard from "./StatCard";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap: GraduationCap,
  Globe: Globe,
  Users: Users
};

const StatsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {STATSAboutUs.map(stat => {
        const IconComponent = iconMap[stat.iconName as keyof typeof iconMap];
        return (
          <StatCard 
            key={stat.id} 
            icon={<IconComponent className="text-primary w-8 h-8" />}
            value={stat.value}
            label={stat.label}
          />
        );
      })}
    </section>
  );
};

export default StatsSection;