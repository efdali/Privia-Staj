import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BacktoTop from '../BacktoTop';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <BacktoTop />
      <Footer />
    </div>
  );
}

export default Layout;
