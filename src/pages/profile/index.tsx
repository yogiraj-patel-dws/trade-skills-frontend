import { useState } from "react";
import BasicProfile from "./BasicProfile";
import EducationProfile from "./EducationProfile";
import ExperienceProfile from "./ExperienceProfile";

const ProfileCompletion = () => {
  const [activeTab, setActiveTab] = useState<
    "basic" | "education" | "experience"
  >("basic");

  // Form data state for all sections
  const [basicData, setBasicData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    about:
      "I'm passionate about web development and love sharing knowledge with others. I enjoy teaching React and TypeScript, and I'm always eager to learn new technologies.",
  });

  const [educationData, setEducationData] = useState({
    educationLevel: "bachelor",
    instituteName: "MIT",
    fieldOfStudy: "Computer Science",
    startYear: "2018",
    endYear: "2022",
    grade: "3.9 GPA",
  });

  const [experienceData, setExperienceData] = useState({
    hasExperience: "yes",
    jobTitle: "Senior Software Engineer",
    organizationName: "Tech Corp",
    experienceType: "Full-time Employment",
    workType: "Remote",
    roleDescription:
      "Led a team of developers in building scalable web applications. Implemented CI/CD pipelines and improved code quality standards.",
    startDate: "2020-01-15",
    endDate: "2023-12-31",
    currentlyWorking: false,
  });

  const tabs = [
    {
      id: "basic" as const,
      label: "Basic Details",
      description: "Personal info & Bio",
      icon: "person",
    },
    {
      id: "education" as const,
      label: "Education",
      description: "Academic background",
      icon: "school",
    },
    {
      id: "experience" as const,
      label: "Experience",
      description: "Work history",
      icon: "work",
    },
  ];

  const handleSaveAndNext = () => {
    // Save current section data
    if (activeTab === "basic") {
      console.log("Basic Profile Data:", basicData);
    } else if (activeTab === "education") {
      console.log("Education Profile Data:", educationData);
    } else if (activeTab === "experience") {
      console.log("Experience Profile Data:", experienceData);
    }

    // Move to next tab
    if (activeTab === "basic") {
      setActiveTab("education");
    } else if (activeTab === "education") {
      setActiveTab("experience");
    } else if (activeTab === "experience") {
      // Last tab - could navigate to next page or show completion
      alert("All sections completed! Check console for all data.");
      console.log("All Profile Data:", {
        basic: basicData,
        education: educationData,
        experience: experienceData,
      });
    }
  };

  const handleSkip = () => {
    // Skip current section and move to next
    if (activeTab === "basic") {
      setActiveTab("education");
    } else if (activeTab === "education") {
      setActiveTab("experience");
    } else if (activeTab === "experience") {
      // Last tab - could navigate to next page
      alert("Skipped to completion. Check console for saved data.");
      console.log("All Profile Data:", {
        basic: basicData,
        education: educationData,
        experience: experienceData,
      });
    }
  };

  const handleBack = () => {
    // Move to previous tab
    if (activeTab === "education") {
      setActiveTab("basic");
    } else if (activeTab === "experience") {
      setActiveTab("education");
    }
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased transition-colors duration-200">
      <div className="relative flex  w-full flex-col overflow-x-hidden">
        <main className="flex-1 flex justify-center py-10 px-4 sm:px-10">
          <div className="flex flex-col w-full max-w-240 gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
              <div className="flex flex-col gap-2 max-w-lg">
                <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                  Let's build your profile!
                </h1>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark glass-panel rounded-4xl shadow-xl border border-white/50 dark:border-white/5 p-6 md:p-10 flex flex-col gap-8">
              <nav className="flex flex-col sm:flex-row border-b border-gray-100 dark:border-gray-800 pb-2 gap-2 sm:gap-8 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`group flex items-center gap-3 px-4 py-3 border-b-[3px] transition-all ${
                        isActive
                          ? "border-primary text-text-main dark:text-white"
                          : "border-transparent text-gray-400 hover:text-text-secondary dark:hover:text-gray-300 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center size-8 rounded-full transition-all ${
                          isActive
                            ? "bg-primary/20 text-primary-darker"
                            : "bg-gray-100 dark:bg-white/5 group-hover:bg-primary/10"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[20px] ${
                            isActive
                              ? "fill-1 text-black"
                              : "group-hover:text-primary"
                          }`}
                        >
                          {tab.icon}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold leading-none">
                          {tab.label}
                        </span>
                        <span
                          className={`text-[11px] font-medium mt-1 ${
                            tab.id === "basic" ? "" : "hidden sm:block"
                          } ${
                            isActive
                              ? "text-text-secondary dark:text-gray-400"
                              : ""
                          }`}
                        >
                          {tab.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>
              {activeTab === "basic" && (
                <BasicProfile formData={basicData} onChange={setBasicData} />
              )}
              {activeTab === "education" && (
                <EducationProfile
                  formData={educationData}
                  onChange={setEducationData}
                />
              )}
              {activeTab === "experience" && (
                <ExperienceProfile
                  formData={experienceData}
                  onChange={setExperienceData}
                />
              )}
              <div className="p-6 md:p-4 pt-4 flex flex-col-reverse md:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-black/10">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  {activeTab !== "basic" && (
                    <button
                      onClick={handleBack}
                      className="w-full md:w-auto flex items-center justify-center gap-2 px-10 py-3.5 rounded-full hover:bg-primary-hover text-slate-500 dark:text-slate-400 font-bold hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_back
                      </span>
                      <span>Back</span>
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <button
                    onClick={handleSkip}
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  >
                    <span>Skip</span>
                  </button>
                  <button
                    onClick={handleSaveAndNext}
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-10 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-slate-900 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transform active:scale-95 transition-all duration-200"
                  >
                    <span>Save & Next</span>
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileCompletion;
