import Footer from "./Footer";
import İnfo from "./İnfo";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <İnfo />
      <Footer />
    </>
  );
};

export default Layout;
