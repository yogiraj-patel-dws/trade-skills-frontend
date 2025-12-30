const MyWallet = () => {
  return (
    <div className="text-text-main font-display overflow-x-hidden min-h-screen flex flex-col">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main mb-2">
            My Wallet
          </h1>
          <p className="text-text-muted text-lg">
            Manage your credits and earnings securely.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 xl:col-span-6 wallet-card-container group">
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-80 transition duration-700"></div>
            <div className="wallet-card w-full aspect-[1.586/1] rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative hover:scale-[1.01] transition-transform duration-500 ease-out border border-white/10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-white/5 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-white/5 pointer-events-none"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <p className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-2">
                    Total Balance
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl sm:text-6xl font-black text-white tracking-tight text-emboss">
                      $2,450.00
                    </span>
                  </div>
                </div>
                <div className="w-12 h-9 rounded-md chip-gradient relative overflow-hidden border border-yellow-600/30 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-black/30 mb-[2px]"></div>
                  <div className="w-full h-[1px] bg-black/30 mt-[2px]"></div>
                  <div className="absolute w-[1px] h-3/5 bg-black/30 left-1/3 top-1/5"></div>
                  <div className="absolute w-[1px] h-3/5 bg-black/30 right-1/3 top-1/5"></div>
                </div>
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-white/50 text-3xl rotate-90">
                  wifi
                </span>
              </div>
              <div className="relative z-10 flex justify-between items-end mt-auto">
                <div>
                  <p className="text-white/60 text-xs font-medium mb-1 uppercase tracking-widest">
                    Card Holder
                  </p>
                  <p className="text-white text-lg font-bold tracking-widest text-emboss font-mono">
                    ALEX MORGAN
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-end">
                    <span className="text-primary font-black italic tracking-tighter text-2xl drop-shadow-[0_0_8px_rgba(43,238,121,0.6)]">
                      TradeSkill
                    </span>
                    <span className="text-[10px] text-white/70 uppercase tracking-widest">
                      Platinum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-between gap-6">
            <div className="bg-surface border border-border-light shadow-soft p-6 rounded-2xl flex-1 flex flex-col justify-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-text-main mb-2">
                  Quick Actions
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Top up your wallet instantly or withdraw your earnings to your
                  bank account securely.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 h-14 bg-primary hover:bg-primary-hover text-slate-900 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-[0_4px_14px_rgba(43,238,121,0.4)]">
                  <span className="material-symbols-outlined">add_circle</span>
                  Buy Credits
                </button>
                <button className="flex-1 h-14 bg-white border border-border-light hover:border-primary text-text-main hover:bg-slate-50 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                  <span className="material-symbols-outlined text-text-muted">
                    account_balance_wallet
                  </span>
                  Withdraw
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-white border border-border-light p-5 rounded-2xl flex items-center gap-4 shadow-sm">
              <div className="min-w-[48px] h-12 rounded-full bg-green-100 flex items-center justify-center text-primary-hover">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <p className="text-text-main font-bold text-sm">
                  Secure &amp; Encrypted
                </p>
                <p className="text-text-muted text-xs mt-0.5">
                  Your funds are held in a secure escrow until sessions are
                  completed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-surface border border-border-light p-6 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all shadow-soft hover:shadow-md">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-5xl text-primary">
                trending_up
              </span>
            </div>
            <p className="text-text-muted font-medium mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(43,238,121,0.6)]"></span>
              Earned Credits
            </p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-text-main">
                $1,200.00
              </span>
              <span className="text-green-700 text-xs font-bold mb-1.5 bg-green-100 px-2 py-0.5 rounded-full">
                +15%
              </span>
            </div>
          </div>
          <div className="bg-surface border border-border-light p-6 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all shadow-soft hover:shadow-md">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-5xl text-slate-400">
                credit_card
              </span>
            </div>
            <p className="text-text-muted font-medium mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              Purchased Credits
            </p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-text-main">$850.00</span>
              <span className="text-slate-500 text-xs font-medium mb-1.5">
                Lifetime
              </span>
            </div>
          </div>
          <div className="bg-surface border border-border-light p-6 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all shadow-soft hover:shadow-md">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-5xl text-orange-400">
                pending
              </span>
            </div>
            <p className="text-text-muted font-medium mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]"></span>
              Pending Clearing
            </p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-text-main">$400.00</span>
              <span className="text-orange-700 text-xs font-bold mb-1.5 bg-orange-100 px-2 py-0.5 rounded-full">
                On Hold
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-bold text-text-main">
              Recent Transactions
            </h2>
            <a
              className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors"
              href="#"
            >
              View All
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="bg-surface border border-border-light rounded-2xl overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-border-light">
                    <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider">
                      Transaction
                    </th>
                    <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider">
                      Date &amp; Time
                    </th>
                    <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                  <tr className="group transaction-row transition-colors cursor-pointer">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-primary-hover shadow-sm">
                          <span className="material-symbols-outlined text-xl">
                            call_received
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-main group-hover:text-primary-hover transition-colors">
                            Session: Advanced React Patterns
                          </p>
                          <p className="text-xs text-text-muted">
                            From: Sarah Jenkins
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-text-main">Oct 24, 2023</p>
                      <p className="text-xs text-text-muted">02:30 PM</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Completed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <p className="text-sm font-bold text-green-600">
                        +$150.00
                      </p>
                    </td>
                  </tr>
                  <tr className="group transaction-row transition-colors cursor-pointer">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm">
                          <span className="material-symbols-outlined text-xl">
                            add_card
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-main group-hover:text-primary-hover transition-colors">
                            Credit Top-up
                          </p>
                          <p className="text-xs text-text-muted">
                            Visa •••• 4242
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-text-main">Oct 22, 2023</p>
                      <p className="text-xs text-text-muted">10:15 AM</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Completed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <p className="text-sm font-bold text-green-600">
                        +$500.00
                      </p>
                    </td>
                  </tr>
                  <tr className="group transaction-row transition-colors cursor-pointer">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm">
                          <span className="material-symbols-outlined text-xl">
                            call_made
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-main group-hover:text-primary-hover transition-colors">
                            Withdrawal to Bank
                          </p>
                          <p className="text-xs text-text-muted">
                            Chase Bank •••• 8899
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-text-main">Oct 20, 2023</p>
                      <p className="text-xs text-text-muted">09:00 AM</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                        Processing
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <p className="text-sm font-bold text-text-main">
                        -$200.00
                      </p>
                    </td>
                  </tr>
                  <tr className="group transaction-row transition-colors cursor-pointer">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-primary-hover shadow-sm">
                          <span className="material-symbols-outlined text-xl">
                            school
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-main group-hover:text-primary-hover transition-colors">
                            Session: UI Design Basics
                          </p>
                          <p className="text-xs text-text-muted">
                            From: Mike Chen
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-text-main">Oct 18, 2023</p>
                      <p className="text-xs text-text-muted">04:45 PM</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Completed
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <p className="text-sm font-bold text-green-600">
                        +$85.00
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyWallet;
