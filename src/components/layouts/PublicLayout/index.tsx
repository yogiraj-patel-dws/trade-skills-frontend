import { type ReactNode } from "react";
import Navigation from '../../Header';
import Footer from '../../../pages/home/Footer';
import { useFooter } from '../../../services/community/community.service';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  const { data: footerData } = useFooter();
  
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer footerData={footerData?.data} />
    </div>
  );
};

export default PublicLayout;
