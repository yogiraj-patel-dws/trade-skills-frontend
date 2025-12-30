const index = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#1c170d] dark:text-white antialiased overflow-x-hidden selection:bg-primary/30">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal dark:bg-primary/10"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-emerald-200/40 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal dark:bg-emerald-900/20"></div>
        <div className="absolute top-[20%] left-[30%] w-[30vw] h-[30vw] bg-green-100/40 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-normal dark:bg-green-900/10"></div>
      </div>
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[580px] rounded-lg bg-white/70 dark:bg-[#1c170d]/60 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-glass flex flex-col p-8 sm:p-12 transition-all duration-300">
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <div className="flex items-center gap-3 mb-2 text-[#1c170d] dark:text-white">
              <div className="size-8 text-primary">
                <svg
                  className="w-full h-full drop-shadow-sm"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold leading-tight tracking-[-0.015em]">
                TradeSkill
              </h2>
            </div>
            <h1 className="text-[#1c170d] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
              Join the Exchange
            </h1>
            <p className="text-[#9c8149] dark:text-[#d4b980] text-lg font-medium leading-normal max-w-xs sm:max-w-sm">
              Start trading skills and growing your network today.
            </p>
          </div>
          <form action="#" className="flex flex-col gap-5 w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative group">
                <label
                  className="absolute left-5 top-2 text-[10px] font-bold text-[#9c8149] uppercase tracking-wider z-10 pointer-events-none transition-all group-focus-within:text-primary"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full h-[60px] pt-5 px-5 rounded-full bg-[#fcfbf8] dark:bg-white/5 border border-[#e8e0ce] dark:border-white/10 text-[#1c170d] dark:text-white placeholder:text-[#1c170d]/30 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                  id="firstName"
                  name="firstName"
                  placeholder="Jane"
                  type="text"
                />
              </div>
              <div className="flex-1 relative group">
                <label
                  className="absolute left-5 top-2 text-[10px] font-bold text-[#9c8149] uppercase tracking-wider z-10 pointer-events-none transition-all group-focus-within:text-primary"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full h-[60px] pt-5 px-5 rounded-full bg-[#fcfbf8] dark:bg-white/5 border border-[#e8e0ce] dark:border-white/10 text-[#1c170d] dark:text-white placeholder:text-[#1c170d]/30 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  type="text"
                />
              </div>
            </div>
            <div className="relative group">
              <label
                className="absolute left-5 top-2 text-[10px] font-bold text-[#9c8149] uppercase tracking-wider z-10 pointer-events-none transition-all group-focus-within:text-primary"
                htmlFor="email"
              >
                Email Address
              </label>
              <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-[#9c8149]/50 pointer-events-none">
                mail
              </span>
              <input
                className="w-full h-[60px] pt-5 px-5 rounded-full bg-[#fcfbf8] dark:bg-white/5 border border-[#e8e0ce] dark:border-white/10 text-[#1c170d] dark:text-white placeholder:text-[#1c170d]/30 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                id="email"
                name="email"
                placeholder="jane@example.com"
                type="email"
              />
            </div>
            <div className="relative group">
              <label
                className="absolute left-5 top-2 text-[10px] font-bold text-[#9c8149] uppercase tracking-wider z-10 pointer-events-none transition-all group-focus-within:text-primary"
                htmlFor="password"
              >
                Password
              </label>
              <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-[#9c8149]/50 pointer-events-none cursor-pointer hover:text-primary">
                visibility_off
              </span>
              <input
                className="w-full h-[60px] pt-5 px-5 rounded-full bg-[#fcfbf8] dark:bg-white/5 border border-[#e8e0ce] dark:border-white/10 text-[#1c170d] dark:text-white placeholder:text-[#1c170d]/30 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                id="password"
                name="password"
                placeholder="Create a password"
                type="password"
              />
            </div>
            <div className="relative group">
              <label
                className="absolute left-5 top-2 text-[10px] font-bold text-[#9c8149] uppercase tracking-wider z-10 pointer-events-none transition-all group-focus-within:text-primary"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="w-full h-[60px] pt-5 px-5 rounded-full bg-[#fcfbf8] dark:bg-white/5 border border-[#e8e0ce] dark:border-white/10 text-[#1c170d] dark:text-white placeholder:text-[#1c170d]/30 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
              />
            </div>
            <button
              className="mt-2 w-full h-[56px] flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-[#55f096] text-[#1c170d] text-base font-bold tracking-[0.015em] hover:brightness-105 active:scale-[0.98] transition-all shadow-[0_4px_14px_0_rgba(43,238,121,0.39)]"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#e8e0ce] dark:border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-bold text-[#9c8149] uppercase tracking-wide">
              Or
            </span>
            <div className="flex-grow border-t border-[#e8e0ce] dark:border-white/10"></div>
          </div>
          <button
            className="w-full h-[56px] flex items-center justify-center gap-3 rounded-full bg-white dark:bg-white/5 border border-[#e8e0ce] dark:border-white/10 hover:bg-[#fcfbf8] dark:hover:bg-white/10 text-[#1c170d] dark:text-white text-sm font-bold tracking-[0.015em] transition-all hover:shadow-sm active:scale-[0.98]"
            type="button"
          >
            <img
              alt="Google Logo"
              className="size-5"
              data-alt="Google G Logo multi-colored"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMgZyc25iOE6IR2G1hgTPozuBJgg9RLg8319ZFXeXZg5AcBkLnzG0ojTFoCbVRCsOvbDL8mZKDSbvPEyOCB2atPk26xC_h5Qrni5InCYoaN4cU34tspMcpa0XID_ZmgJ15zh7o-TrmrPfVJg3bqvDE3CrAtI_8TpAsPLbePwhgBJTOyaKHB_9sn4CuPMnGIndhNM8Tr4GK0wO8IUwSur-A7WY7dxcqeYcl_DrmTYoMCPRGR2-ZvWOBM0UMLTAZMSaMkA1vDt3DYSo"
            />
            <span>Continue with Google</span>
          </button>
          <div className="mt-8 text-center">
            <p className="text-sm text-[#9c8149] dark:text-[#d4b980] font-medium">
              Already have an account?
              <a
                className="text-[#1c170d] dark:text-primary font-bold hover:underline decoration-2 decoration-primary underline-offset-4 ml-1"
                href="#"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 flex gap-6 text-xs text-[#9c8149]/70 dark:text-white/30 font-medium">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
