import React from 'react';
import Navbar from '../Header';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>;
    </>
  );
}

export default Layout;
