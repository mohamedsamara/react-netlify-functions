import { ReactNode } from 'react';

import Header from 'components/common/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="h-full">{children}</main>
    </>
  );
};

export default Layout;
