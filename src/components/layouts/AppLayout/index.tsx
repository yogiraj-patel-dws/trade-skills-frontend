import { type ReactNode } from "react";
import Navigation from "../../Header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <footer>App Footer</footer>
    </div>
  );
};

export default AppLayout;
