import { ReactNode } from 'react';

import Header from 'components/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="h-screen">{children}</main>
    </>
  );
};

export default Layout;
