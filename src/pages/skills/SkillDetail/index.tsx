const index = () => {
  return (
    <div className="bg-background-light text-text-main font-display antialiased selection:bg-primary selection:text-text-main">
      <div className="relative flex min-h-screen w-full flex-col pt-24 pb-12 overflow-x-hidden">
        <div className="px-6 md:px-10 lg:px-40 flex flex-1 justify-center">
          <div className="flex flex-col max-w-[1000px] flex-1 gap-8">
            <div className="grid grid-cols-1  gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <div
                    className="w-full aspect-video md:aspect-[21/9] bg-center bg-no-repeat bg-cover rounded-xl shadow-sm relative group overflow-hidden"
                    data-alt="Hands shaping clay on a pottery wheel close up"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7ZGRb0ptuwP5pL6QE00Ynlh-Pau5tsbfGNbPAHjFfJeFD0GiLXgB-usKsG6nKn7HEofbNqQNoh6e-PKFT8SFEXvWuJNpDONS5EBMFjKJ29SmixBI-cey4MH6-Nh9pd5TkpMLOxm2kFQBc0Et5G_PUzOdBZsR49wcPKONLbN9TAfUEmWPWGgTzBhjimG1UIy_8qf0h7NXIe_nh1C9ShKrHyuumJge1ZcA3wUixVlxXifSvxULuEZoRBpuoDLK0D0dYL3q-B_iv8KI')",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main tracking-tight leading-[1.1]">
                        Mastering Ceramic Art: Wheel Throwing Fundamentals
                      </h1>
                      <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-[#e7f3ec]">
                        <span className="material-symbols-outlined text-yellow-400 text-xl fill-1">
                          star
                        </span>
                        <span className="text-text-main font-bold">4.9</span>
                        <span className="text-text-secondary text-sm">
                          (124 reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 bg-white pl-1 pr-4 py-1 rounded-full border border-[#e7f3ec] shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10"
                          data-alt="Portrait of Elena Rodriguez the instructor"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWpkL0KDBg01qDoDq4gUg-Q_G4ZItzErutmjAPWivug-rsLkF1qpSj1ZwhSErtXX63N0Crj5mxd5Sqyjl0VRxPMsfYkTocUxTTbe4sXGKE7tJIYwnVd7G98PPsV3hnPl6CfypT65zjc9KCOYUaxfuDL2NBzGRImiLQ2RZnoNdAmbYRuDyTU_CeAfhkdRAXVZwMpwhD4Hz8rpMbmUFap2k4FtPwvQQ5Nd0vODq_HRCkKezd5zOLjt-IXR4dsTyR6Kj_xeGf2Tx95uU")',
                          }}
                        ></div>
                        <div className="flex flex-col">
                          <p className="text-text-main text-sm font-bold leading-tight">
                            Elena Rodriguez
                          </p>
                          <p className="text-text-secondary text-xs font-medium">
                            Master Ceramist
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-background-light border border-[#e7f3ec] text-text-secondary text-sm font-medium">
                          Arts &amp; Crafts
                        </span>
                        <span className="px-3 py-1 rounded-full bg-background-light border border-[#e7f3ec] text-text-secondary text-sm font-medium">
                          English
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass-panel rounded-xl p-2">
                  <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-60"
                      data-alt="Video thumbnail showing pottery tools and clay"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQ1PlLtkrLPMqTvOhndVJRFkiqUpMqFLk7zQtVJUFFZbHoKmfFROnjgddyeFDNKMF1IQij_RBlU3WcBezKgL88KOvVUF3L3le9qSIzzYRffcl1ggIxKfTBNmY2jwRFB1op4r6XER7XlwPRZTCYsjyIleHbUL0V1bgS9BIsHj_2puIalyx8XKT5mkNg5PzPEJWeNMzjM7GmE9-YijfjvUaOIbCdQe9-trniiAzMp1XgYBGvgnk4Pccb306MrdLyG8KWY_dSSV0rQoY')",
                      }}
                    ></div>
                    <div className="z-10 size-16 bg-primary rounded-full flex items-center justify-center text-text-main shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-4xl ml-1">
                        play_arrow
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-lg text-white text-xs font-medium backdrop-blur-sm">
                      Watch Preview • 2:30
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
                      <p className="text-text-main font-medium">Ceramics</p>
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
                        English, Spanish
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
                <div className="glass-panel p-6 md:p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-secondary">
                      check_circle
                    </span>
                    Prerequisites
                  </h3>
                  <p className="text-text-main leading-relaxed mb-4">
                    To get the most out of this session, you should be
                    comfortable with getting messy! We will be working with wet
                    clay.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 size-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-symbols-outlined text-[14px] font-bold">
                          check
                        </span>
                      </div>
                      <span className="text-text-main">
                        Basic understanding of clay types (stoneware vs
                        earthenware).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 size-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-symbols-outlined text-[14px] font-bold">
                          check
                        </span>
                      </div>
                      <span className="text-text-main">
                        Access to a potter's wheel (local studio or personal).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 size-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-symbols-outlined text-[14px] font-bold">
                          check
                        </span>
                      </div>
                      <span className="text-text-main">
                        Your own basic trimming tools and sponge.
                      </span>
                    </li>
                  </ul>
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
