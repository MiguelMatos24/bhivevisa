import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";

const nav = () => {
  return (
    <nav className="nav-container">
      <div classname="container">
        <div className="d-flex flex-row navbar-header row-full">
          <div className="col-12">
            <Menu>
              <Link className="menu-item" href="/about">
                About us
              </Link>
              <Link className="menu-item" href="/globalmobility">
                Global Mobility & Immigration
              </Link>
              <Link className="menu-item" href="/tax">
                Tax Representation
              </Link>
              <Link className="menu-item" href="/property">
                Property Management
              </Link>
              <Link className="menu-item" href="/contacts">
                Contacts
              </Link>
            </Menu>
          </div>
          <div className="logo-container col-12">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={100}
                height={100}
                alt="logo"
                className="logo"
              />
            </Link>
          </div>
        </div>
        <div className="container-nav">
          <Link href="/about">About us</Link>
          <Link href="/globalmobility">Global Mobility & Immigration</Link>
          <Link href="/tax">Tax Representation</Link>
          <Link href="/property">Property Management</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default nav;
