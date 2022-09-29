import Nav from "/components/navbar";
import Footer from "/components/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
