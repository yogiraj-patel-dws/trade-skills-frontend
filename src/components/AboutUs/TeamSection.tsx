import { Avatar } from 'antd';
import { TEAM, TEAM_SECTION } from "../../constants/constants";

const TeamSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2 className="text-[#0d1b13] text-3xl font-bold mb-2">{TEAM_SECTION.title}</h2>
        <p className="text-[#4c9a6b]">{TEAM_SECTION.description}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TEAM.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center p-8 bg-white border border-[#cfe7d9] rounded-3xl shadow-sm text-center">
            <Avatar size={96} src={member.img} className="mb-4 shadow-md border-2 border-white" />
            <h3 className="text-[#0d1b13] font-bold text-lg">{member.name}</h3>
            <p className="text-[#4c9a6b] text-sm font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;