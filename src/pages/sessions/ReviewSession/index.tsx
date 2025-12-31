const ReviewSession = () => {
  return (
    <div className="bg-warm-gradient text-text-main font-display antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <nav className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/80 backdrop-blur-md px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-dark shadow-glow">
              <span className="material-symbols-outlined text-2xl font-bold">
                handshake
              </span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-text-main">
              TradeSkill
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-text-secondary hover:text-primary-hover text-sm font-semibold transition-colors"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-text-main text-sm font-bold transition-colors"
              href="#"
            >
              Sessions
            </a>
            <a
              className="text-text-secondary hover:text-primary-hover text-sm font-semibold transition-colors"
              href="#"
            >
              Messages
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-full border border-border-subtle bg-white pl-1 pr-4 py-1 transition-all hover:bg-input-bg hover:shadow-sm">
              <div
                className="h-8 w-8 overflow-hidden rounded-full bg-input-bg border border-border-subtle"
                data-alt="User Avatar"
              >
                <span className="material-symbols-outlined text-text-secondary text-lg flex h-full w-full items-center justify-center">
                  person
                </span>
              </div>
              <span className="text-sm font-bold text-text-main">Profile</span>
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-1 w-full pb-24">
        <div className="mx-auto max-w-2xl px-4 pt-12">
          <header className="mb-10 text-center md:text-left">
            <h1 className="mb-3 text-4xl md:text-5xl font-black tracking-tight text-text-main leading-[1.1]">
              How was your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#25cf68]">
                session?
              </span>
            </h1>
            <p className="text-text-secondary text-lg font-medium">
              Your feedback helps improve the community.
            </p>
          </header>
          <div className="mb-12 glass-panel rounded-card p-5 transition-transform hover:scale-[1.01] duration-300">
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
              <div className="relative w-full sm:w-32 aspect-video sm:aspect-square shrink-0 overflow-hidden rounded-2xl shadow-md">
                <img
                  alt="Abstract code screen representing React Patterns"
                  className="h-full w-full object-cover"
                  data-alt="Abstract code screen representing React Patterns"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyhRb0qPqcke7WYiM6mLvUPk8Rv0D7-YRVItm0HxWLF4n-lIjHDY0PnBgHjtQKFzdKuu3G1h7wNLx8oQH_ehf74Ww3ZL9sp3f0nEMc4-Bsczmh1C3apcm-h6n89Pq-PweYiq-IbZmtCMfl_2ZGFAuFFYN4YiVIgFtyPZ6iqsXcC1X8DmY-kLfjr3yEA0MH3PL706-uIoaBuSt3ueM8fsnWvgeGGsRg01TFeL9sY3fxPaq9XawqImAgL3DKTwy04pbdpPcLoXqDnvU"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <span className="material-symbols-outlined absolute bottom-2 right-2 text-white drop-shadow-md">
                  code
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center text-center sm:text-left">
                <div className="mb-2 flex items-center justify-center sm:justify-start gap-2">
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-dark border border-primary/20">
                    Completed
                  </span>
                  <span className="text-xs font-medium text-text-secondary">
                    Oct 24th, 2023
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-1">
                  Advanced React Patterns
                </h3>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                  <div className="h-6 w-6 rounded-full overflow-hidden border border-border-subtle shadow-sm">
                    <img
                      alt="Host Avatar"
                      className="h-full w-full object-cover"
                      data-alt="Host Avatar"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMol4fitDuSSl8mvzZ1r9MaJT0pqXM47JCv2Eh0xWQ8PdRBk9Az4r68MQv3MM4fg1RWW0WIMwXnDFKlFOKV_R93CmHfpobRW7Lg8aILYrQKqSk9bwwBsyoY2tNz63H1ZRjymrKaOKE1Ksj9J4rH5XV8pYR1kQ88ezvhbERjKRfNew-sHDrSjxK516SwT6IBoxKzaUIlBwPFdDBDQNVhef4Ttbm0Gk1M0VcCCjkDIPXemMMt170A4yPs4bNxG8AwWhzaTXmRtIMukY"
                    />
                  </div>
                  <p className="text-text-secondary text-sm font-medium">
                    Hosted by{" "}
                    <span className="text-text-main font-bold">Alex Doe</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-8">
            <div className="group relative rounded-card bg-surface-card border border-white p-8 shadow-soft transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex flex-col gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
                  Step 1 of 3
                </span>
                <h3 className="text-2xl font-bold text-text-main">
                  How was the host?
                </h3>
                <p className="text-sm font-medium text-text-secondary">
                  Did Alex explain things clearly and keep a good pace?
                </p>
              </div>
              <div className="mb-8 flex justify-center sm:justify-start">
                <div className="star-rating gap-2">
                  <input
                    id="host-5"
                    name="host-rating"
                    type="radio"
                    value="5"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="host-5"
                  >
                    star
                  </label>
                  <input
                    id="host-4"
                    name="host-rating"
                    type="radio"
                    value="4"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="host-4"
                  >
                    star
                  </label>
                  <input
                    id="host-3"
                    name="host-rating"
                    type="radio"
                    value="3"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="host-3"
                  >
                    star
                  </label>
                  <input
                    id="host-2"
                    name="host-rating"
                    type="radio"
                    value="2"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="host-2"
                  >
                    star
                  </label>
                  <input
                    id="host-1"
                    name="host-rating"
                    type="radio"
                    value="1"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="host-1"
                  >
                    star
                  </label>
                </div>
              </div>
              <details className="group/accordion">
                <summary className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-text-main hover:text-primary transition-colors select-none">
                  <span className="material-symbols-outlined text-lg transition-transform text-primary group-open/accordion:rotate-90">
                    add_circle
                  </span>
                  Add a written note (optional)
                </summary>
                <div className="mt-4">
                  <textarea
                    className="w-full rounded-input border border-border-subtle bg-input-bg p-4 text-text-main placeholder-text-secondary/50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all resize-none h-32 shadow-inner"
                    placeholder="Share details about your interaction..."
                  ></textarea>
                </div>
              </details>
            </div>
            <div className="group relative rounded-card bg-surface-card border border-white p-8 shadow-soft transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex flex-col gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
                  Step 2 of 3
                </span>
                <h3 className="text-2xl font-bold text-text-main">
                  How was the session content?
                </h3>
                <p className="text-sm font-medium text-text-secondary">
                  Was the material relevant and easy to follow?
                </p>
              </div>
              <div className="mb-8 flex justify-center sm:justify-start">
                <div className="star-rating gap-2">
                  <input
                    id="content-5"
                    name="content-rating"
                    type="radio"
                    value="5"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="content-5"
                  >
                    star
                  </label>
                  <input
                    id="content-4"
                    name="content-rating"
                    type="radio"
                    value="4"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="content-4"
                  >
                    star
                  </label>
                  <input
                    id="content-3"
                    name="content-rating"
                    type="radio"
                    value="3"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="content-3"
                  >
                    star
                  </label>
                  <input
                    id="content-2"
                    name="content-rating"
                    type="radio"
                    value="2"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="content-2"
                  >
                    star
                  </label>
                  <input
                    id="content-1"
                    name="content-rating"
                    type="radio"
                    value="1"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="content-1"
                  >
                    star
                  </label>
                </div>
              </div>
              <details className="group/accordion">
                <summary className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-text-main hover:text-primary transition-colors select-none mb-2">
                  <span className="material-symbols-outlined text-lg transition-transform text-primary group-open/accordion:rotate-180">
                    expand_circle_down
                  </span>
                  Hide written note
                </summary>
                <div className="mt-2">
                  <textarea
                    className="w-full rounded-input border border-border-subtle bg-input-bg p-4 text-text-main placeholder-text-secondary/50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all resize-none h-32 shadow-inner"
                    placeholder="e.g. The examples were great, but we ran out of time for the last topic."
                  >
                    The hooks section was incredibly detailed. I finally
                    understand useEffect!
                  </textarea>
                </div>
              </details>
            </div>
            <div className="group relative rounded-card bg-surface-card border border-white p-8 shadow-soft transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex flex-col gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
                  Step 3 of 3
                </span>
                <h3 className="text-2xl font-bold text-text-main">
                  How was your experience with TradeSkill?
                </h3>
                <p className="text-sm font-medium text-text-secondary">
                  Did the video connection and tools work smoothly?
                </p>
              </div>
              <div className="mb-8 flex justify-center sm:justify-start">
                <div className="star-rating gap-2">
                  <input
                    id="platform-5"
                    name="platform-rating"
                    type="radio"
                    value="5"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="platform-5"
                  >
                    star
                  </label>
                  <input
                    id="platform-4"
                    name="platform-rating"
                    type="radio"
                    value="4"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="platform-4"
                  >
                    star
                  </label>
                  <input
                    id="platform-3"
                    name="platform-rating"
                    type="radio"
                    value="3"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="platform-3"
                  >
                    star
                  </label>
                  <input
                    id="platform-2"
                    name="platform-rating"
                    type="radio"
                    value="2"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="platform-2"
                  >
                    star
                  </label>
                  <input
                    id="platform-1"
                    name="platform-rating"
                    type="radio"
                    value="1"
                  />
                  <label
                    className="material-symbols-outlined text-[40px] md:text-[48px]"
                    htmlFor="platform-1"
                  >
                    star
                  </label>
                </div>
              </div>
              <details className="group/accordion">
                <summary className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-text-main hover:text-primary transition-colors select-none">
                  <span className="material-symbols-outlined text-lg transition-transform text-primary group-open/accordion:rotate-90">
                    add_circle
                  </span>
                  Add a written note (optional)
                </summary>
                <div className="mt-4">
                  <textarea
                    className="w-full rounded-input border border-border-subtle bg-input-bg p-4 text-text-main placeholder-text-secondary/50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all resize-none h-32 shadow-inner"
                    placeholder="Any technical issues or feature suggestions?"
                  ></textarea>
                </div>
              </details>
            </div>
            <div className="sticky bottom-4 z-10 pt-4">
              <div className="absolute inset-x-0 -top-24 bottom-0 bg-gradient-to-t from-[#f7f5f2] via-[#f7f5f2]/80 to-transparent pointer-events-none -z-10 h-48"></div>
              <button
                className="w-full group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary py-4 px-8 text-primary-dark shadow-[0_10px_30px_rgba(43,238,121,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(43,238,121,0.5)] active:scale-[0.98]"
                type="submit"
              >
                <span className="relative z-10 text-lg font-black tracking-wide">
                  Submit Review
                </span>
                <span className="material-symbols-outlined relative z-10 font-bold">
                  arrow_forward
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
              </button>
              <p className="mt-4 text-center text-xs font-medium text-text-secondary/60">
                Reviews are verified by TradeSkill to ensure authenticity.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ReviewSession;
