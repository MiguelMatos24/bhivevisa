import Nav from "/components/navbar";
import Footer from "/components/footer";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="nav-holder">
        <Nav />
      </div>
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
