const RequestSession = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased selection:bg-primary selection:text-text-main">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-8">
            <section className="flex flex-col gap-6">
              <div className="group relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-sm">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Abstract code pattern background with green accents representing React skill"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDC-11ByH72ZcTD_xTA9jZM9i18iFOw8mh2h2Zf2PofQg6YzQvkRJHRnFruU9pu7v26QI2aTSomd0KBSwicdTrHvQw6wLfjwNzBCq49fD5OL2qDMQd7-TiE4S43YFVKsYxT6hgj8DuJa-mJq9Qm6Q5Ytb_lFWB9WFPghyeH2i8pa7sE-noNosUi7J97xRjOxeAYARyzdjNQbx9c92FFya_KKW_7VvhfIAGKHvL_4H9zJGW7KwtqAmyRFcbdD0zHT5nnta_Shzbod2E')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    Frontend Development
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold tracking-tight text-text-main md:text-4xl">
                      Advanced React Patterns
                    </h1>
                    <p className="mt-2 text-lg text-text-secondary">
                      Master modern React architecture, hooks, and performance
                      patterns with a senior engineer.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-black text-text-main">
                        4.8
                      </span>
                      <span className="material-symbols-outlined fill-current text-primary">
                        star
                      </span>
                    </div>
                    <span className="text-sm font-medium text-text-secondary underline decoration-primary/30 underline-offset-4">
                      203 reviews
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 border-t border-b border-[#e7f3ec] py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-12 rounded-full bg-cover bg-center ring-2 ring-offset-2 ring-primary/20"
                      data-alt="Sarah Jenkins profile picture"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHvm-OjgNQ041rAVufzG6XMJcy1wLbhHAKI8MtjT4WttiCb1nopi_ltzEOSQtsNreLjhgkqWl8ERKT1lGQGMmLGEJk0Y7cczosTshaPeW0-RUdIczxLTaxpb2K4rCwoBU8G9jcl9J3j_tFzVqMoJwEHdLoSSOtOHTrad39HmFl2fZb2fTcJy73QE2AySGaUa4WZXWpOYqvVdlERPdfP4GJLZDwn36H5EOUn05LuC5uyXAPCxQAyzIY1e3qjtwqKDzxNEW0cGeVy7s')",
                      }}
                    ></div>
                    <div>
                      <p className="font-bold text-text-main">Sarah Jenkins</p>
                      <p className="text-xs text-text-secondary">
                        Senior Engineer @ TechCorp
                      </p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-[#e7f3ec]"></div>
                  <div className="flex gap-2">
                    <div className="flex items-center rounded-full bg-accent-bg px-3 py-1 text-sm font-medium text-text-main">
                      <span className="material-symbols-outlined mr-1 text-[18px]">
                        language
                      </span>{" "}
                      English
                    </div>
                    <div className="flex items-center rounded-full bg-accent-bg px-3 py-1 text-sm font-medium text-text-main">
                      <span className="material-symbols-outlined mr-1 text-[18px]">
                        signal_cellular_alt
                      </span>{" "}
                      Advanced
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl bg-black aspect-video group cursor-pointer shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity group-hover:opacity-40"
                  data-alt="Video thumbnail showing code editor and instructor"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-text-main shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-4xl">
                      play_arrow
                    </span>
                  </div>
                </div>
                <span className="absolute bottom-4 right-4 rounded bg-black/70 px-2 py-1 text-xs font-bold text-white">
                  Preview
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-text-main">
                    <span className="material-symbols-outlined text-primary">
                      school
                    </span>
                    Prerequisites
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="material-symbols-outlined mt-0.5 text-base text-primary">
                        check_circle
                      </span>
                      Strong understanding of JavaScript (ES6+)
                    </li>
                    <li className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="material-symbols-outlined mt-0.5 text-base text-primary">
                        check_circle
                      </span>
                      Basic React knowledge (Components, Props)
                    </li>
                    <li className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="material-symbols-outlined mt-0.5 text-base text-primary">
                        check_circle
                      </span>
                      Experience with async data fetching
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-[#f0f0f0]">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                    Includes
                  </p>
                  <div className="mt-2 flex gap-4">
                    <span className="flex items-center gap-1 text-sm font-medium text-text-main">
                      <span className="material-symbols-outlined text-lg text-primary">
                        description
                      </span>{" "}
                      Code Reviews
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-text-main">
                      <span className="material-symbols-outlined text-lg text-primary">
                        folder_zip
                      </span>{" "}
                      Project Files
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-text-main">
                  Enter Your Desired Topics
                </h2>
                <p className="text-sm text-text-secondary">
                  Detail the specific skills, concepts, or problems you'd like
                  to work on during this session.
                </p>
              </div>
              <div className="relative w-full">
                <textarea
                  className="w-full resize-none rounded-2xl border-none bg-background-light px-5 py-4 text-text-main shadow-sm ring-1 ring-[#e7f3ec] placeholder:text-text-secondary/60 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  placeholder="Hi Sarah, I'm really interested in deep diving into custom hooks and understanding how to optimize context for larger applications..."
                  rows={6}
                ></textarea>
                <div className="absolute bottom-4 right-4 pointer-events-none text-primary opacity-50">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
              </div>
            </section>
            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-text-main">
                  Session Duration
                </h2>
                <p className="text-sm text-text-secondary">
                  Select the duration you would like to book for this session.
                </p>
              </div>
              <div className="relative w-full">
                <select className="w-full appearance-none rounded-2xl border-none bg-background-light px-5 py-4 text-text-main shadow-sm ring-1 ring-[#e7f3ec] focus:ring-2 focus:ring-primary focus:outline-none transition-all cursor-pointer">
                  <option value="30">30 mins</option>
                  <option value="45">45 mins</option>
                  <option value="60">60 mins</option>
                  <option value="75">75 mins</option>
                  <option value="90">90 mins</option>
                  <option value="105">105 mins</option>
                  <option value="120">120 mins</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </section>
            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-text-main">
                  Propose Availability
                </h2>
                <p className="text-sm text-text-secondary">
                  Suggest up to 5 time slots for the session.
                </p>
              </div>
              <div className="flex flex-col gap-6 md:flex-row md:items-end">
                <div className="flex-1 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-full border-none bg-background-light px-4 py-3 text-text-main shadow-sm ring-1 ring-[#e7f3ec] focus:ring-2 focus:ring-primary"
                      type="date"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    Time (UTC-5)
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-full border-none bg-background-light px-4 py-3 text-text-main shadow-sm ring-1 ring-[#e7f3ec] focus:ring-2 focus:ring-primary"
                      type="time"
                    />
                  </div>
                </div>
                <button className="flex h-[48px] items-center gap-2 rounded-full bg-black px-6 font-medium text-white transition-transform active:scale-95 hover:bg-gray-800">
                  <span className="material-symbols-outlined text-lg">add</span>
                  Add Slot
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-[#f0fdf4] pl-4 pr-2 py-1.5 transition-colors hover:border-primary">
                  <span className="text-sm font-semibold text-text-main">
                    Oct 24, 2:00 PM
                  </span>
                  <button className="flex h-6 w-6 items-center justify-center rounded-full text-text-secondary hover:bg-red-100 hover:text-red-500">
                    <span className="material-symbols-outlined text-base">
                      close
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-[#f0fdf4] pl-4 pr-2 py-1.5 transition-colors hover:border-primary">
                  <span className="text-sm font-semibold text-text-main">
                    Oct 25, 10:00 AM
                  </span>
                  <button className="flex h-6 w-6 items-center justify-center rounded-full text-text-secondary hover:bg-red-100 hover:text-red-500">
                    <span className="material-symbols-outlined text-base">
                      close
                    </span>
                  </button>
                </div>
                <p className="flex items-center text-xs text-text-secondary ml-2 animate-pulse">
                  <span className="material-symbols-outlined mr-1 text-base">
                    info
                  </span>
                  Add at least 1 more
                </p>
              </div>
            </section>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-primary/5 ring-1 ring-black/5">
                <div className="bg-gradient-to-r from-[#102217] to-[#1a3324] px-6 py-4">
                  <h3 className="text-lg font-bold text-white">
                    Session Summary
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-4">
                      <span className="text-text-secondary">
                        Total Selected Duration
                      </span>
                      <span className="font-bold text-text-main text-lg">
                        60 mins
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-text-secondary">
                        Estimated Credits Required
                      </span>
                      <div className="text-right">
                        <span className="block text-2xl font-black text-primary">
                          60 Credits
                        </span>
                        <span className="text-xs text-text-secondary">
                          ~ $60.00 USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-base font-bold text-[#0d1b13] shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-primary/40 active:scale-[0.98]">
                    Request Session
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                  <p className="mt-4 text-center text-xs text-text-secondary">
                    You won't be charged yet. The host has 48h to accept one of
                    your proposed slots.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-bg text-primary">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </div>
                <p className="text-xs text-text-secondary">
                  <strong className="text-text-main">
                    Satisfaction Guarantee:
                  </strong>
                  Credits held in escrow until session completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#e7f3ec] bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-text-secondary">Total Est.</p>
            <p className="text-lg font-bold text-primary">60 Credits</p>
          </div>
          <button className="flex-1 rounded-full bg-primary py-3 text-sm font-bold text-[#0d1b13]">
            Request Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestSession;
