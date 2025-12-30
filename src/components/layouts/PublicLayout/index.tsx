import { type ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div>
      <header className="bg-primary">Public Header</header>
      <main>{children}</main>
      <footer>Public Footer</footer>
    </div>
  );
};

export default PublicLayout;
