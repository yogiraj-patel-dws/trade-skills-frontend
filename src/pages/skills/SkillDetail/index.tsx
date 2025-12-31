import { Carousel } from 'antd';
import { useParams } from 'react-router-dom';
import { useSkillDetail } from '../../../services/skills/skills.service';
import type { MediaItem, Instructor } from '../../../services/skills/skills.types';
import demoVideo from '../../../assets/my-react-app.mp4';

const index = () => {
  const { id } = useParams<{ id: string }>();
  const { data: skillData, isLoading, error } = useSkillDetail(id || '');

  if (isLoading) {
    return (
      <div className="bg-background-light text-text-main font-display antialiased selection:bg-primary selection:text-text-main">
        <div className="relative flex min-h-screen w-full flex-col pt-10 pb-12 overflow-x-hidden">
          <div className="px-6 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="flex flex-col max-w-250 flex-1 gap-8">
              <div className="animate-pulse">
                <div className="h-64 bg-gray-200 rounded-xl mb-6"></div>
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !skillData) {
    return (
      <div className="bg-background-light text-text-main font-display antialiased selection:bg-primary selection:text-text-main">
        <div className="relative flex min-h-screen w-full flex-col pt-10 pb-12 overflow-x-hidden">
          <div className="px-6 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="flex flex-col max-w-250 flex-1 gap-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Skill</h1>
                <p className="text-text-secondary">Unable to load skill details. Please try again later.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const skill = skillData;

  // Create media items - always show both image and demo video
  const mediaItems: MediaItem[] = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      alt: `${skill.name} preview image`
    },
    {
      type: 'video',
      url: demoVideo,
      alt: `${skill.name} demo video`,
      duration: '2:30'
    }
  ];

  const defaultInstructor: Instructor = {
    name: 'Expert Instructor',
    title: 'Professional',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=instructor'
  };

  return (
    <div className="bg-background-light text-text-main font-display antialiased selection:bg-primary selection:text-text-main">
      <div className="relative flex min-h-screen w-full flex-col pt-10 pb-12 overflow-x-hidden">
        <div className="px-6 md:px-10 lg:px-40 flex flex-1 justify-center">
          <div className="flex flex-col max-w-250 flex-1 gap-8">
            <div className="grid grid-cols-1  gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <Carousel 
                    arrows 
                    dots
                    className="rounded-xl overflow-hidden shadow-sm"
                  >
                    {mediaItems.map((item, index) => (
                      <div key={index}>
                        <div className="relative w-full aspect-video md:aspect-21/9 group">
                          {item.type === 'image' ? (
                            <div
                              className="w-full h-full bg-center bg-no-repeat bg-cover"
                              style={{ backgroundImage: `url('${item.url}')` }}
                            >
                              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                          ) : (
                            <video
                              className="w-full h-full object-cover"
                              controls
                              poster={item.url}
                            >
                              <source src={item.url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                          <div className="absolute top-4 right-4 bg-black/50 px-2 py-1 rounded-lg text-white text-xs font-medium backdrop-blur-sm">
                            {item.type === 'video' ? 'Video' : `${index + 1}/${mediaItems.length}`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main tracking-tight leading-[1.1]">
                        {skill.name}
                      </h1>
                      <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-[#e7f3ec]">
                        <span className="material-symbols-outlined text-yellow-400 text-xl fill-1">
                          star
                        </span>
                        <span className="text-text-main font-bold">4.5</span>
                        <span className="text-text-secondary text-sm">
                          (12 reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 bg-white pl-1 pr-4 py-1 rounded-full border border-[#e7f3ec] shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10"
                          data-alt={`Portrait of ${defaultInstructor.name}`}
                          style={{
                            backgroundImage: `url("${defaultInstructor.avatar}")`,
                          }}
                        ></div>
                        <div className="flex flex-col">
                          <p className="text-text-main text-sm font-bold leading-tight">
                            {defaultInstructor.name}
                          </p>
                          <p className="text-text-secondary text-xs font-medium">
                            {defaultInstructor.title}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-background-light border border-[#e7f3ec] text-text-secondary text-sm font-medium">
                          {skill.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-background-light border border-[#e7f3ec] text-text-secondary text-sm font-medium">
                          English
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="glass-panel p-4 rounded-xl flex flex-col items-start gap-2">
                    <div className="p-2 rounded-full bg-[#e7f3ec] text-primary">
                      <span className="material-symbols-outlined text-xl">
                        category
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">
                        Category
                      </p>
                      <p className="text-text-main font-medium">{skill.category}</p>
                    </div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl flex flex-col items-start gap-2">
                    <div className="p-2 rounded-full bg-[#e7f3ec] text-primary">
                      <span className="material-symbols-outlined text-xl">
                        school
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">
                        Level
                      </p>
                      <p className="text-text-main font-medium">Intermediate</p>
                    </div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl flex flex-col items-start gap-2">
                    <div className="p-2 rounded-full bg-[#e7f3ec] text-primary">
                      <span className="material-symbols-outlined text-xl">
                        translate
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">
                        Language
                      </p>
                      <p className="text-text-main font-medium">
                        English
                      </p>
                    </div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl flex flex-col items-start gap-2">
                    <div className="p-2 rounded-full bg-[#e7f3ec] text-primary">
                      <span className="material-symbols-outlined text-xl">
                        schedule
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">
                        Duration
                      </p>
                      <p className="text-text-main font-medium">4 Weeks</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 pt-6">
                  <h3 className="text-2xl font-bold text-text-main px-2">
                    Student Reviews
                  </h3>
                  <div className="glass-panel p-6 rounded-xl flex flex-col gap-6">
                    <div className="flex flex-col gap-3 pb-6 border-b border-[#e7f3ec]">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10"
                            data-alt="Avatar of a reviewer named Sarah"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYyTi0FUaoaVpyBfb4zuEzLvgn88kPnAiFCFKpWpFZp7ZG3lzbzZ4jWb2tEPYjbrCDJO65ncHEqrf2CrVUUCvYjTyzslblpU8FJn5ew5v51iGfacs6OO9gbXZXlBPX6oIXCp9WzNAsI8jfVsEtH27E8Wa2m438us8qNYrefLhahCq7lfuloux_RDtga93crYQz2PrsNaCsJPo0zCxYTOneblHwL38k1TZHeVYTDiibAs_PJYbfBRhprIlCznWO6IBhJUlQlfzq4p8')",
                            }}
                          ></div>
                          <div>
                            <p className="text-text-main font-bold text-sm">
                              Sarah Jenkins
                            </p>
                            <p className="text-text-secondary text-xs">
                              2 days ago
                            </p>
                          </div>
                        </div>
                        <div className="flex text-primary">
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                        </div>
                      </div>
                      <p className="text-text-main text-sm leading-relaxed">
                        Elena is a fantastic teacher. She breaks down complex
                        movements into simple steps. I finally learned how to
                        center properly after years of struggling!
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10"
                            data-alt="Avatar of a reviewer named Mark"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaDpFK_BHatH89UhZOHJ0s_5gzE34suapn-aG6AGRls1AI7Fed20ITN-FnUCOvfnLrevHTYBVwyuIGDpfj-elobxQxi5oLulbQoQ7TtpsB1xNuTasXPSsqxsxeuhiSyWkPYvJwjy2gOIOGzX66Xac8Yeg3aurhTS8pIlPkwbGxi-Aat1g6xuxvuANEoLwLI4JV5AlOnQamAHTQEaUmQvMIKzHr1wj3NcJiapLMSHfuD1EWS3-dsohH1A2JpXq5zdB2idZPPB9HXD8')",
                            }}
                          ></div>
                          <div>
                            <p className="text-text-main font-bold text-sm">
                              Mark Thompson
                            </p>
                            <p className="text-text-secondary text-xs">
                              1 week ago
                            </p>
                          </div>
                        </div>
                        <div className="flex text-primary">
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[18px] fill-1">
                            star
                          </span>
                          <span className="material-symbols-outlined text-[18px] fill-0">
                            star
                          </span>
                        </div>
                      </div>
                      <p className="text-text-main text-sm leading-relaxed">
                        Great course structure. The video quality is excellent.
                        I wish there was a bit more time spent on glazing
                        techniques, but overall highly recommended.
                      </p>
                    </div>
                  </div>
                  <button className="self-center text-primary font-bold text-sm hover:underline">
                    View all 124 reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;