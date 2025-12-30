import { Facebook, Instagram, Repeat, Twitter } from 'lucide-react';

const Footer = () => {
  
  return (
    <div>
      <footer className="w-full bg-white border-t border-slate-200 pt-6 pb-8">
          <div className="px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center justify-center size-8 rounded-full bg-[#2beea0]"><Repeat size={16} /></div>
                  <span className="text-lg font-bold">TradeSkill</span>
                </div>
                <p className="text-slate-500 text-sm max-w-xs mb-6">The world's friendliest skill exchange platform. Connect, learn, and grow together.</p>
                <div className="flex gap-4 text-slate-400">
                  <Facebook size={20} className="hover:text-[#2beea0] cursor-pointer" />
                  <Twitter size={20} className="hover:text-[#2beea0] cursor-pointer" />
                  <Instagram size={20} className="hover:text-[#2beea0] cursor-pointer" />
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">Platform</h4>
                <div className="flex flex-col gap-3 text-sm text-slate-500">
                  <a href="#">Browse Skills</a><a href="#">How it Works</a><a href="#">Pricing</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <div className="flex flex-col gap-3 text-sm text-slate-500">
                  <a href="#">About Us</a><a href="#">Careers</a><a href="#">Blog</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <div className="flex flex-col gap-3 text-sm text-slate-500">
                  <a href="#">Terms</a><a href="#">Privacy</a><a href="#">Cookies</a>
                </div>
              </div>
            </div>
            <div className="border-t pt-8 flex flex-col md:row justify-between items-center gap-4 text-sm text-slate-400">
              <p>© 2025 TradeSkill Inc. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span className="size-2 bg-green-500 rounded-full" />
                All systems operational
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer