interface EducationProfileProps {
  formData: {
    educationLevel: string;
    instituteName: string;
    fieldOfStudy: string;
    startYear: string;
    endYear: string;
    grade: string;
  };
  onChange: (data: {
    educationLevel: string;
    instituteName: string;
    fieldOfStudy: string;
    startYear: string;
    endYear: string;
    grade: string;
  }) => void;
}

const index = ({ formData, onChange }: EducationProfileProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="flex flex-col gap-8 animate-fade-in">
      <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
        <label className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
          Highest Education Level
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
            <span className="material-symbols-outlined">school</span>
          </div>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="w-full bg-[#f8fcfa] dark:bg-gray-800 border border-[#cfe7d9] dark:border-gray-600 rounded-xl py-3 pl-12 pr-10 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-shadow cursor-pointer"
          >
            <option value="">Select your degree...</option>
            <option value="highschool">High School Diploma</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">Doctorate (PhD)</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-text-secondary">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
        <label className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
          Institute Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
            <span className="material-symbols-outlined">apartment</span>
          </div>
          <input
            name="instituteName"
            value={formData.instituteName}
            onChange={handleChange}
            className="w-full bg-[#f8fcfa] dark:bg-gray-800 border border-[#cfe7d9] dark:border-gray-600 rounded-xl py-3 pl-12 pr-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            placeholder="e.g. Harvard University"
            type="text"
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
        <label className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
          Field of Study
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
            <span className="material-symbols-outlined">menu_book</span>
          </div>
          <input
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            className="w-full bg-[#f8fcfa] dark:bg-gray-800 border border-[#cfe7d9] dark:border-gray-600 rounded-xl py-3 pl-12 pr-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            placeholder="e.g. Computer Science"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
          Start Year
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
            <span className="material-symbols-outlined">calendar_today</span>
          </div>
          <input
            name="startYear"
            value={formData.startYear}
            onChange={handleChange}
            className="w-full bg-[#f8fcfa] dark:bg-gray-800 border border-[#cfe7d9] dark:border-gray-600 rounded-xl py-3 pl-12 pr-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            max="2030"
            min="1950"
            placeholder="YYYY"
            type="number"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
          End Year (or Expected)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
            <span className="material-symbols-outlined">event</span>
          </div>
          <input
            name="endYear"
            value={formData.endYear}
            onChange={handleChange}
            className="w-full bg-[#f8fcfa] dark:bg-gray-800 border border-[#cfe7d9] dark:border-gray-600 rounded-xl py-3 pl-12 pr-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            max="2030"
            min="1950"
            placeholder="YYYY"
            type="number"
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
        <label className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
          Grade / Result{" "}
          <span className="font-normal text-text-secondary text-xs ml-1">
            (Optional)
          </span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
            <span className="material-symbols-outlined">grade</span>
          </div>
          <input
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full bg-[#f8fcfa] dark:bg-gray-800 border border-[#cfe7d9] dark:border-gray-600 rounded-xl py-3 pl-12 pr-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            placeholder="e.g. 3.8 GPA / First Class"
            type="text"
          />
        </div>
      </div>
    </form>
  );
};

export default index;
