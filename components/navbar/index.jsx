import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

const nav = () => {
  return (
    <nav className="nav-container">
      <div classname="container-fluid">
        <div className="d-flex flex-row row-full">
          <div className="logo-container">
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
          <div className="menu-container">
            <Menu right>
              <Link className="menu-item" href="/about">
                About us
              </Link>
              <Link href="/global-mobility">
                <a
                  className="menu-item dropdown-toggle nav-link"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Global Mobility & Immigration
                </a>
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <Link href="#">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="#">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="#">
                  <a className="dropdown-item">Action</a>
                </Link>
              </ul>

              <Link className="menu-item" href="/tax">
                Tax Representation
              </Link>
              <Link className="menu-item" href="/property">
                Property Management
              </Link>
              <Link className="menu-item" href="/contact">
                Contact us
              </Link>
            </Menu>
          </div>
        </div>
        <div className="row-nav">
          <Link className="menu-item" href="/about">
            About us
          </Link>
          <Link className="menu-item" href="/global-mobility">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Global Mobility & Immigration
            </a>
          </Link>
          <ul
            className="dropdown-menu "
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
                Golden Visa
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Digital Nomad Visa
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Citizenship
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Refugee & Asylum
              </a>
            </li>
          </ul>
          <Link className="menu-item" href="/tax">
            Tax Representation
          </Link>
          <Link className="menu-item" href="/property">
            Property Management
          </Link>
          <Link className="menu-item" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default nav;
