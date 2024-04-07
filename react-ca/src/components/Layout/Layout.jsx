import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Layout.scss"; 

const Layout = ({ children }) => {
  return (
    <div className="main-container"> 
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
