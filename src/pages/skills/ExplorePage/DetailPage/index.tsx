import { useLocation, useNavigate } from "react-router-dom";
import type { SkillItem } from "../../../../services/user/user.service";
import { ROUTES } from "../../../../constants/routes";


const ExploreDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const skill = location.state?.skill as SkillItem | undefined;

  if (!skill) {
    return (
      <div className="flex items-center justify-center min-h-screen text-text-main">
        Skill not found or no data available.
      </div>
    );
  }

  const handleRequestSession = () => {
    navigate(ROUTES.SESSIONS_REQUEST, { state: { skill } });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased selection:bg-primary selection:text-text-main">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-8">
            <section className="flex flex-col gap-6">
              <div className="group relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-sm">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt={skill.skillTitle}
                  style={{
                    backgroundImage: `url('${skill.bannerImage}')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    {skill.subcategory}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold tracking-tight text-text-main md:text-4xl text-black dark:text-white">
                      {skill.skillTitle}
                    </h1>
                    {/* Description is not explicitly in SkillItem, using subcategory as fallback or omitting if empty */}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-black text-text-main text-black dark:text-white">
                        {skill.user.profile.rating.toFixed(1)}
                      </span>
                      <span className="material-symbols-outlined fill-current text-primary">
                        star
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 border-t border-b border-[#e7f3ec] py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-12 rounded-full bg-cover bg-center ring-2 ring-offset-2 ring-primary/20 flex items-center justify-center bg-gray-200 text-gray-700 font-bold text-lg"
                      data-alt={`${skill.user.profile.firstName} ${skill.user.profile.lastName}`}
                    >
                      {skill.user.profile.firstName[0]}
                      {skill.user.profile.lastName[0]}
                    </div>
                    <div>
                      <p className="font-bold text-text-main text-black dark:text-white">
                        {skill.user.profile.firstName}{" "}
                        {skill.user.profile.lastName}
                      </p>
                      {/* Job title not in data, removing */}
                    </div>
                  </div>
                  <div className="h-8 w-px bg-[#e7f3ec]"></div>
                  <div className="flex gap-2">
                    <div className="flex items-center rounded-full bg-accent-bg px-3 py-1 text-sm font-medium text-text-main text-black dark:text-white border border-gray-200 dark:border-white/10">
                      <span className="material-symbols-outlined mr-1 text-[18px]">
                        language
                      </span>{" "}
                      {skill.teachingLanguage}
                    </div>
                    <div className="flex items-center rounded-full bg-accent-bg px-3 py-1 text-sm font-medium text-text-main text-black dark:text-white border border-gray-200 dark:border-white/10">
                      <span className="material-symbols-outlined mr-1 text-[18px]">
                        signal_cellular_alt
                      </span>{" "}
                      {skill.level}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-4">
            <div className="flex flex-col justify-between rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-text-main text-black dark:text-white">
                  <span className="material-symbols-outlined text-primary">
                    school
                  </span>
                  Prerequisites
                </h3>
                <ul className="mt-4 space-y-3">
                  {skill.prerequisites.split(",").map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-text-secondary dark:text-gray-400"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-base text-primary">
                        check_circle
                      </span>
                      {req.trim()}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-[#f0f0f0] dark:border-white/10">
                <p className="text-xs font-medium uppercase tracking-wider text-text-secondary dark:text-gray-500">
                  Includes
                </p>
                <div className="mt-2 flex gap-4">
                  <span className="flex items-center gap-1 text-sm font-medium text-text-main text-black dark:text-white">
                    <span className="material-symbols-outlined text-lg text-primary">
                      description
                    </span>{" "}
                    Code Reviews
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-text-main text-black dark:text-white">
                    <span className="material-symbols-outlined text-lg text-primary">
                      folder_zip
                    </span>{" "}
                    Project Files
                  </span>
                </div>
              </div>
              <button
                onClick={handleRequestSession}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-base font-bold text-[#0d1b13] shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-primary/40 active:scale-[0.98]"
              >
                Request Session
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExploreDetail;
