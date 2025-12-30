import { type ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <header>App Header</header>
      <main>{children}</main>
      <footer>App Footer</footer>
    </div>
  );
};

export default AppLayout;