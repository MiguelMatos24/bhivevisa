import Nav from "/components/navbar";
import Footer from "/components/footer";

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
