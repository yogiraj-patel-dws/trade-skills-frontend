import { Facebook, Instagram, Repeat, Twitter, Linkedin } from 'lucide-react';
import type { FooterData } from '../../../services/community/community.types';

interface FooterProps {
  footerData?: FooterData;
}

const Footer = ({ footerData }: FooterProps) => {
  if (!footerData) return null;
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook': return <Facebook size={20} className="hover:text-[#2beea0] cursor-pointer" />;
      case 'twitter': return <Twitter size={20} className="hover:text-[#2beea0] cursor-pointer" />;
      case 'instagram': return <Instagram size={20} className="hover:text-[#2beea0] cursor-pointer" />;
      case 'linkedin': return <Linkedin size={20} className="hover:text-[#2beea0] cursor-pointer" />;
      default: return <div className="w-5 h-5" />;
    }
  };
  
  return (
    <div>
      <footer className="w-full bg-white border-t border-slate-200 pt-6 pb-8">
          <div className="px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center justify-center size-8 rounded-full bg-[#2beea0]"><Repeat size={16} /></div>
                  <span className="text-lg font-bold">{footerData.company.name}</span>
                </div>
                <p className="text-slate-500 text-sm max-w-xs mb-6">{footerData.company.description}</p>
                <div className="flex gap-4 text-slate-400">
                  {footerData.social.map((social, i) => (
                    <a key={i} href={social.url} target="_blank" rel="noopener noreferrer">
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">Platform</h4>
                <div className="flex flex-col gap-3 text-sm text-slate-500">
                  {footerData.links.platform.map((link, i) => (
                    <a key={i} href={link.url}>{link.name}</a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <div className="flex flex-col gap-3 text-sm text-slate-500">
                  {footerData.links.company.map((link, i) => (
                    <a key={i} href={link.url}>{link.name}</a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <div className="flex flex-col gap-3 text-sm text-slate-500">
                  {footerData.links.legal.map((link, i) => (
                    <a key={i} href={link.url}>{link.name}</a>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>{footerData.copyright}</p>
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