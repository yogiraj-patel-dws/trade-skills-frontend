interface ExperienceProfileProps {
  formData: {
    hasExperience: string;
    jobTitle: string;
    organizationName: string;
    experienceType: string;
    workType: string;
    roleDescription: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
  };
  onChange: (data: {
    hasExperience: string;
    jobTitle: string;
    organizationName: string;
    experienceType: string;
    workType: string;
    roleDescription: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
  }) => void;
}

const index = ({ formData, onChange }: ExperienceProfileProps) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    onChange({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleExperienceOption = (value: "yes" | "no") => {
    onChange({
      ...formData,
      hasExperience: value,
    });
  };

  const handleWorkTypeChange = (value: string) => {
    onChange({
      ...formData,
      workType: value,
    });
  };

  return (
    <form className="flex flex-col gap-8 animate-fade-in">
      <div className="flex flex-col gap-4">
        <label className="text-base font-semibold text-slate-900 dark:text-white">
          Do you have work experience?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => handleExperienceOption("yes")}
            className={`relative flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all ${
              formData.hasExperience === "yes"
                ? "border-2 border-primary bg-primary/5"
                : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600"
            }`}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all ${
                formData.hasExperience === "yes"
                  ? "border-primary bg-primary"
                  : "border-slate-300 dark:border-slate-600"
              }`}
            >
              {formData.hasExperience === "yes" && (
                <span className="material-symbols-outlined text-slate-900 text-sm font-bold">
                  check
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white">
                Yes, I have experience
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                I have worked in a professional setting or freelanced.
              </span>
            </div>
          </div>
          <div
            onClick={() => handleExperienceOption("no")}
            className={`relative flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all ${
              formData.hasExperience === "no"
                ? "border-2 border-primary bg-primary/5"
                : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600"
            }`}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all ${
                formData.hasExperience === "no"
                  ? "border-primary bg-primary"
                  : "border-slate-300 dark:border-slate-600"
              }`}
            >
              {formData.hasExperience === "no" && (
                <span className="material-symbols-outlined text-slate-900 text-sm font-bold">
                  check
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-700 dark:text-slate-200">
                No, I'm just starting
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                I am a student or haven't worked professionally yet.
              </span>
            </div>
          </div>
        </div>
      </div>
      {formData.hasExperience === "yes" && (
        <>
          <hr className="border-slate-100 dark:border-slate-700/50" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-bold text-slate-700 dark:text-slate-300"
                htmlFor="job-title"
              >
                Job Title
              </label>
              <input
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 transition-shadow"
                id="job-title"
                placeholder="e.g. Senior Product Designer"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-bold text-slate-700 dark:text-slate-300"
                htmlFor="org-name"
              >
                Organization Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-400 text-[20px]">
                  apartment
                </span>
                <input
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary rounded-xl pl-11 pr-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 transition-shadow"
                  id="org-name"
                  placeholder="e.g. TradeSkill Inc."
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-bold text-slate-700 dark:text-slate-300"
                htmlFor="exp-type"
              >
                Experience Type
              </label>
              <div className="relative">
                <select
                  name="experienceType"
                  value={formData.experienceType}
                  onChange={handleChange}
                  className="w-full appearance-none bg-slate-50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-slate-900 dark:text-white transition-shadow"
                  id="exp-type"
                >
                  <option>Full-time Employment</option>
                  <option>Part-time</option>
                  <option>Freelance / Contract</option>
                  <option>Internship</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-3.5 text-slate-500 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Work Type
              </label>
              <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <label className="flex-1 cursor-pointer">
                  <input
                    className="sr-only peer"
                    name="workType"
                    type="radio"
                    value="Remote"
                    checked={formData.workType === "Remote"}
                    onChange={(e) => handleWorkTypeChange(e.target.value)}
                  />
                  <div className="text-center py-2 rounded-lg text-sm font-medium text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm transition-all">
                    Remote
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input
                    className="sr-only peer"
                    name="workType"
                    type="radio"
                    value="On-site"
                    checked={formData.workType === "On-site"}
                    onChange={(e) => handleWorkTypeChange(e.target.value)}
                  />
                  <div className="text-center py-2 rounded-lg text-sm font-medium text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm transition-all">
                    On-site
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input
                    className="sr-only peer"
                    name="workType"
                    type="radio"
                    value="Hybrid"
                    checked={formData.workType === "Hybrid"}
                    onChange={(e) => handleWorkTypeChange(e.target.value)}
                  />
                  <div className="text-center py-2 rounded-lg text-sm font-medium text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm transition-all">
                    Hybrid
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <div className="flex justify-between items-baseline">
                <label
                  className="text-sm font-bold text-slate-700 dark:text-slate-300"
                  htmlFor="description"
                >
                  Role Description
                </label>
                <span className="text-xs text-slate-500">
                  Keep it brief and clear
                </span>
              </div>
              <textarea
                name="roleDescription"
                value={formData.roleDescription}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 resize-none transition-shadow"
                id="description"
                placeholder="Describe your key responsibilities and achievements..."
                rows={4}
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-bold text-slate-700 dark:text-slate-300"
                htmlFor="start-date"
              >
                Start Date
              </label>
              <input
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-slate-900 dark:text-white transition-shadow"
                id="start-date"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-bold text-slate-700 dark:text-slate-300"
                htmlFor="end-date"
              >
                End Date
              </label>
              <input
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                disabled={formData.currentlyWorking}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-0 ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-slate-900 dark:text-white transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                id="end-date"
                type="date"
              />
            </div>
            <div className="md:col-span-2">
              <label className="inline-flex items-center cursor-pointer group">
                <input
                  name="currentlyWorking"
                  checked={formData.currentlyWorking}
                  onChange={handleChange}
                  className="w-5 h-5 rounded-md border-slate-300 text-primary focus:ring-primary focus:ring-offset-0 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 transition duration-150 ease-in-out"
                  type="checkbox"
                />
                <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                  I currently work here
                </span>
              </label>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default index;
