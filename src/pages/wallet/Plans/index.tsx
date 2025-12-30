const Plans = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main antialiased selection:bg-primary selection:text-text-main overflow-x-hidden">
      <main className="grow">
        <section className="relative pt-16 pb-12 px-4 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-bold uppercase tracking-wider text-green-800 dark:text-primary border border-primary/20">
              <span className="material-symbols-outlined text-sm!">bolt</span>{" "}
              Instant Activation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] tracking-tight">
              Fuel Your Learning.
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                Unlock Skills Faster.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                  ></path>
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-main/70 dark:text-gray-300 max-w-2xl leading-relaxed">
              Credits act as your learning currency. Book sessions instantly,
              learn flexibly without subscriptions, and grow at your own pace.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center">
              <div className="group relative flex flex-col h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-text-main dark:text-white">
                    Starter
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-text-main dark:text-white tracking-tight">
                      ₹99
                    </span>
                  </div>
                  <p className="text-sm text-text-muted mt-1">
                    Single session trial
                  </p>
                </div>
                <div className="grow flex flex-col gap-4 py-6 border-t border-dashed border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-text-main/60 dark:text-gray-400">
                      Total Credits
                    </span>
                    <span className="text-3xl font-black text-text-main dark:text-white">
                      100
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>No Bonus Credits</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>15% Platform Fee</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-auto py-3 px-6 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-text-main dark:text-white font-bold transition-colors">
                  Buy Starter
                </button>
              </div>

              <div className="group relative flex flex-col h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-text-main dark:text-white">
                    Learner
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-text-main dark:text-white tracking-tight">
                      ₹499
                    </span>
                  </div>
                  <p className="text-sm text-text-muted mt-1">
                    For casual learning
                  </p>
                </div>
                <div className="grow flex flex-col gap-4 py-6 border-t border-dashed border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-text-main/60 dark:text-gray-400">
                      Total Credits
                    </span>
                    <span className="text-3xl font-black text-text-main dark:text-white">
                      550
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/20 text-xs font-bold text-green-900 dark:text-primary w-fit">
                    +50 Bonus Credits
                  </div>
                  <div className="space-y-3 mt-1">
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>~5 Sessions</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>15% Platform Fee</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-auto py-3 px-6 rounded-full bg-[#e7f3ec] hover:bg-[#d4eadc] dark:bg-primary/20 dark:hover:bg-primary/30 text-text-main dark:text-white font-bold transition-colors">
                  Buy Learner
                </button>
              </div>

              <div className="group card-highlight relative flex flex-col h-full rounded-2xl border-2 border-primary bg-surface-light dark:bg-surface-dark p-6 md:p-8">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-text-main px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-text-main dark:text-white">
                    Pro
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-text-main dark:text-white tracking-tight">
                      ₹999
                    </span>
                  </div>
                  <p className="text-sm text-text-muted mt-1">
                    Serious skill building
                  </p>
                </div>
                <div className="grow flex flex-col gap-4 py-6 border-t border-dashed border-primary/30">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-text-main/60 dark:text-gray-400">
                      Total Credits
                    </span>
                    <span className="text-4xl font-black text-text-main dark:text-white">
                      1150
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-primary to-[#8dfeb9] text-xs font-bold text-text-main w-fit shadow-sm">
                    <span className="material-symbols-outlined !text-sm mr-1">
                      star
                    </span>{" "}
                    +150 Bonus Credits
                  </div>
                  <div className="space-y-3 mt-2">
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>~12 Sessions</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300 font-medium">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>Priority Support</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>15% Platform Fee</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-auto py-4 px-6 rounded-full bg-primary hover:bg-primary-hover text-text-main font-black text-lg shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5">
                  Buy Pro
                </button>
              </div>

              <div className="group relative flex flex-col h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="absolute -top-3 left-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Best Value
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-text-main dark:text-white">
                    Expert
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-text-main dark:text-white tracking-tight">
                      ₹1999
                    </span>
                  </div>
                  <p className="text-sm text-text-muted mt-1">
                    Mastery &amp; teaching
                  </p>
                </div>
                <div className="grow flex flex-col gap-4 py-6 border-t border-dashed border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-text-main/60 dark:text-gray-400">
                      Total Credits
                    </span>
                    <span className="text-3xl font-black text-text-main dark:text-white">
                      2400
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/20 text-xs font-bold text-green-900 dark:text-primary w-fit">
                    +400 Bonus Credits
                  </div>
                  <div className="space-y-3 mt-1">
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>~25 Sessions</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>Early Access Features</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-main dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary !text-xl">
                        check_circle
                      </span>
                      <span>15% Platform Fee</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-auto py-3 px-6 rounded-full bg-[#e7f3ec] hover:bg-[#d4eadc] dark:bg-primary/20 dark:hover:bg-primary/30 text-text-main dark:text-white font-bold transition-colors">
                  Buy Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-[#152a1d]">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">
                Why Buy Credits?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                <div className="mb-4 p-3 bg-primary/10 rounded-full text-text-main dark:text-primary">
                  <span className="material-symbols-outlined !text-3xl">
                    psychology
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-text-main dark:text-white">
                  Learn exactly what you need
                </h3>
                <p className="text-sm text-text-main/70 dark:text-gray-400">
                  Tailored sessions for your specific goals, no fluff.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                <div className="mb-4 p-3 bg-primary/10 rounded-full text-text-main dark:text-primary">
                  <span className="material-symbols-outlined !text-3xl">
                    account_balance_wallet
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-text-main dark:text-white">
                  Pay only for what you use
                </h3>
                <p className="text-sm text-text-main/70 dark:text-gray-400">
                  No monthly subscriptions. Your credits, your timeline.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                <div className="mb-4 p-3 bg-primary/10 rounded-full text-text-main dark:text-primary">
                  <span className="material-symbols-outlined !text-3xl">
                    volunteer_activism
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-text-main dark:text-white">
                  Bonus credits
                </h3>
                <p className="text-sm text-text-main/70 dark:text-gray-400">
                  Get extra learning time when you buy larger packs.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                <div className="mb-4 p-3 bg-primary/10 rounded-full text-text-main dark:text-primary">
                  <span className="material-symbols-outlined !text-3xl">
                    verified_user
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-text-main dark:text-white">
                  Transparent pricing
                </h3>
                <p className="text-sm text-text-main/70 dark:text-gray-400">
                  Clear fee structure. 15% platform fee on earnings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 pb-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <div className="rounded-xl border border-[#cfe7d9] dark:border-primary/20 bg-[#e7f3ec]/50 dark:bg-primary/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="hidden md:block p-2 bg-white dark:bg-surface-dark rounded-full text-primary shadow-sm">
                  <span className="material-symbols-outlined">info</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-text-main dark:text-white mb-1">
                    Transparency &amp; Trust
                  </h4>
                  <p className="text-sm text-text-main/80 dark:text-gray-300">
                    A 15% platform fee is deducted from instructor earnings to
                    maintain the platform infrastructure and community safety.
                    Learners always get the full credit value they purchase.
                  </p>
                </div>
              </div>
              <a
                className="whitespace-nowrap text-sm font-bold flex items-center gap-2 text-text-main hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                href="#"
              >
                Read fee policy{" "}
                <span className="material-symbols-outlined !text-lg">
                  arrow_forward
                </span>
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 opacity-80">
              <div className="flex items-center gap-2 text-text-main dark:text-gray-400 text-sm font-medium">
                <span className="material-symbols-outlined text-primary">
                  lock
                </span>
                100% Secure Payments
              </div>
              <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
              <div className="flex gap-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <div
                  className="h-6 w-10 bg-contain bg-no-repeat bg-center"
                  data-alt="Visa Logo"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlQHWdvKwcD76XoXoNMdBq-fi1oNrittEDQedWl4okpK4q6mDCNRj5iaWsD7Oysb9aw1LWufO8R1357mVkcgC8VXHlGigxoBqjudugiAezPROhX3ZzeG2mHG_YSJxsnsp9QKNESohSJcnfYNwWJERG_amW2P6-JKATrku5DYheRju5qiSI6Yev_d3XPtTfyjGzm4OtnincPYDcqgfsib3dPJ5jHpGTHCR8EBL2E8nvVtkJBBjnLu3R_bmpT7LezGVd4QNvfHWsm7Q')",
                  }}
                ></div>

                <div
                  className="h-6 w-10 bg-contain bg-no-repeat bg-center"
                  data-alt="Mastercard Logo"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCG2WS4bjCOlDsRzccLsGzQLoHQ7PXwSg7colcLAFzQ1JPucNXylDVynaZynv_bzFL-kMA3GxxsekX5QaU4m8Zi7gw4N-pbmAaodYgTPy74FFWhX99_zwrC57URrLE5CW_Etti9-5iFz51mQZqkJNdiCR-8jA916x8hQk0gueuBTTfnE4tTqLAGBMo5bkNqYrv_o4wivIEhayZ6iPcsNv3vCKYi_muLUN_FRJJgEZcG1Q731awVwpD664CTpPMN-2RrvNr5oGRAPak')",
                  }}
                ></div>

                <div
                  className="h-6 w-10 bg-contain bg-no-repeat bg-center"
                  data-alt="Amex Logo"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRqsL2Ue9BQp9-qS4wCmgbbZTRVUT2rbcABY_z2mO9yCFs_OHswfnnEAGNqKtTghNnQhoiw6SRXMs47zgy2LH_6ix6R2fwDALY9SXeVCjOT-nrqMR7j-qYJbkO1H1ptz5nS02MTu7h7eTGBrhz-yrdPY85F8ZKhG6PXWFOkVVAoG3bH-_4Gylw0L5Heyg2uybXB592Lb3J33OHY7aTqBYZ-575RewkzocbLL8ZIpGMT4dDWFjdbf1DN-H5NYV9aKTncN3LbX0hP-Q')",
                  }}
                ></div>
              </div>
              <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
              <div className="flex items-center gap-2 text-text-main dark:text-gray-400 text-sm font-medium">
                <span className="material-symbols-outlined text-primary">
                  bolt
                </span>
                Instant Credit Activation
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Plans;
