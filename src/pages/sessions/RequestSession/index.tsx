import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SkillItem } from "../../services/user/user.service";

const RequestSession = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const skill = location.state?.skill as SkillItem | undefined;

    useEffect(() => {
        if (skill) {
            console.log("Requesting session for skill:", skill);
        }
    }, [skill]);

    if (!skill) {
        return (
            <div className="flex items-center justify-center min-h-screen text-text-main dark:text-white">
                No skill selected for session request.
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen p-8 text-text-main dark:text-white">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Request Session</h1>
                <div className="p-6 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-white/10">
                    <h2 className="text-xl font-bold mb-4">
                        Session for: {skill.skillTitle}
                    </h2>
                    <div className="flex flex-col gap-4">
                        <img
                            src={skill.bannerImage}
                            alt={skill.skillTitle}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Instructor:</span>
                            <span>
                                {skill.user.profile.firstName} {skill.user.profile.lastName}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Category:</span>
                            <span>{skill.subcategory}</span>
                        </div>
                        {/* Additional form fields would go here */}
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-dashed border-gray-300 dark:border-gray-600">
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                Review the console log for the skill data passed to this page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestSession;
