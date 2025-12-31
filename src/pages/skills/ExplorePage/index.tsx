import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useSkills } from "../../../services/user/user.service";

const ExplorePage = () => {
  const navigate = useNavigate();
  const { data: categories } = useSkills();
  const allSkills = categories?.flatMap((cat) => cat.userSkills) || [];
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased selection:bg-primary selection:text-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10 max-w-4xl mx-auto text-center md:text-left md:mx-0">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-text-main dark:text-white">
            Explore Skills
          </h1>
          <p className="text-text-secondary dark:text-gray-400 text-lg mb-8">
            Discover unique skills shared by the community.
          </p>
          <div className="relative w-full max-w-2xl group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
            <input
              className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-2xl text-text-main dark:text-white placeholder-text-secondary/60 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-soft transition-all"
              placeholder="What do you want to learn today? (e.g. Pottery, Python, Spanish)"
              type="text"
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button className="p-2 bg-primary hover:bg-primary-hover rounded-xl text-black transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <aside className="w-full lg:w-72 shrink-0 space-y-8 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-2 hidden lg:block">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  filter_list
                </span>
                Filters
              </h2>
              <button className="text-xs font-semibold text-text-secondary hover:text-primary transition-colors">
                Reset All
              </button>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                <label className="cursor-pointer">
                  <input
                    className="peer sr-only"
                    type="checkbox"
                    defaultChecked
                  />
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 peer-checked:bg-primary/20 peer-checked:text-black dark:peer-checked:text-primary peer-checked:border-primary transition-all">
                    Creative Arts
                  </span>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" type="checkbox" />
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 peer-checked:bg-primary/20 peer-checked:text-black dark:peer-checked:text-primary peer-checked:border-primary transition-all">
                    Technology
                  </span>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" type="checkbox" />
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 peer-checked:bg-primary/20 peer-checked:text-black dark:peer-checked:text-primary peer-checked:border-primary transition-all">
                    Cooking
                  </span>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" type="checkbox" />
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 peer-checked:bg-primary/20 peer-checked:text-black dark:peer-checked:text-primary peer-checked:border-primary transition-all">
                    Languages
                  </span>
                </label>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Difficulty
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input className="peer sr-only" type="checkbox" />
                    <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-surface-dark peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] text-black opacity-0 peer-checked:opacity-100 font-bold">
                        check
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                    Beginner Friendly
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      className="peer sr-only"
                      type="checkbox"
                      defaultChecked
                    />
                    <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-surface-dark peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] text-black opacity-0 peer-checked:opacity-100 font-bold">
                        check
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                    Intermediate
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input className="peer sr-only" type="checkbox" />
                    <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-surface-dark peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] text-black opacity-0 peer-checked:opacity-100 font-bold">
                        check
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                    Expert
                  </span>
                </label>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Duration
              </h3>
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-4">
                <div className="absolute left-0 top-0 h-full w-1/2 bg-primary rounded-full"></div>
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 size-4 bg-white border-2 border-primary rounded-full shadow cursor-pointer"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>15m</span>
                <span className="font-bold text-primary">60m</span>
                <span>3h+</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Rating
              </h3>
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-white/5 p-1 rounded-lg -ml-1 transition-colors w-full">
                  <div className="flex text-yellow-400 text-[18px]">
                    <span className="material-symbols-outlined fill-current [font-variation-settings:'FILL'_1]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current [font-variation-settings:'FILL'_1]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current [font-variation-settings:'FILL'_1]">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current [font-variation-settings:'FILL'_1]">
                      star
                    </span>
                    <span className="material-symbols-outlined text-gray-300 [font-variation-settings:'FILL'_1]">
                      star
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    &amp; up
                  </span>
                </button>
              </div>
            </div>
          </aside>
          <main className="flex-1 w-full min-w-0">
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Showing{" "}
                <span className="text-text-main dark:text-white font-bold">
                  128
                </span>{" "}
                skills
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none pl-3 pr-8 py-1.5 bg-transparent text-sm font-bold text-text-main dark:text-white border-none focus:ring-0 cursor-pointer">
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-[18px] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div>
            {/* Mobile Filter Toggle */}
            <button className="lg:hidden w-full flex items-center justify-center gap-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 p-3 rounded-xl mb-6 font-bold text-sm shadow-sm">
              <span className="material-symbols-outlined">filter_list</span>
              Show Filters
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {allSkills.map((skill) => (
                <div
                  key={skill.skillId}
                  onClick={() => {
                    navigate(ROUTES.EXPLORE_DETAIL.replace(":id", skill.skillId), {
                      state: { skill },
                    });
                  }}
                  className="group flex flex-col bg-white dark:bg-surface-dark rounded-2xl shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-white/5 hover:border-primary/40 relative cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={skill.bannerImage}
                      alt={skill.skillTitle}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                    <button className="absolute top-3 right-3 p-2 bg-white/20 hover:bg-white backdrop-blur-md rounded-full text-white hover:text-primary transition-all active:scale-95 shadow-lg">
                      <span className="material-symbols-outlined text-[20px] block [font-variation-settings:'FILL'_0]">
                        bookmark
                      </span>
                    </button>
                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/10">
                      {skill.subcategory}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-yellow-400 text-[14px]">
                        <span className="material-symbols-outlined fill-current [font-variation-settings:'FILL'_1]">
                          star
                        </span>
                      </div>
                      <span className="text-xs font-bold text-text-main dark:text-white">
                        {skill.user.profile.rating.toFixed(1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {skill.skillTitle}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 mt-2">
                      <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary ring-2 ring-white dark:ring-surface-dark">
                        {skill.user.profile.firstName[0]}
                        {skill.user.profile.lastName[0]}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        by {skill.user.profile.firstName}{" "}
                        {skill.user.profile.lastName}
                      </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          bar_chart
                        </span>
                        {skill.level}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {allSkills.length === 0 && (
              <div className="mt-12 p-12 bg-white dark:bg-surface-dark rounded-3xl border border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center text-center">
                <div className="size-20 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl text-gray-400">
                    sentiment_content
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
                  No matching skills found
                </h3>
                <p className="text-gray-500 max-w-sm mb-6">
                  We couldn't find any skills matching your current filters. Try
                  adjusting your search criteria.
                </p>
                <button className="px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-glow">
                  Reset Filters
                </button>
              </div>
            )}

            {allSkills.length > 0 && (
              <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 hover:border-primary text-text-main dark:text-white font-bold rounded-xl shadow-sm transition-all flex items-center gap-2">
                  Load More Skills
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
