import { type ReactNode } from "react";
import Navigation from "../../Header";
import Footer from '../../../pages/home/Footer';
import { useFooter } from '../../../services/community/community.service';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { data: footerData } = useFooter();
  
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer footerData={footerData?.data} />
    </div>
  );
};

export default AppLayout;
