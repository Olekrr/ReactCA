import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Layout.scss";

/**
 * A layout component that wraps around the main content of the page.
 * It includes the site's header and footer, with a main content area in between where
 * child components (passed as "children") are rendered.
 *
 * @param {Object} props The props passed to the Layout component.
 * @param {React.ReactNode} props.children The content to be displayed in the main area of the layout.
 *
 * @returns {React.ReactElement} The layout wrapper including the header, main content, and footer.
 */

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
