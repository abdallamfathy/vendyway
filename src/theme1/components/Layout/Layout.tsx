import React, { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar/>

      {/* Content */}
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
