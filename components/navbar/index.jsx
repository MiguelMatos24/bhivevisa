import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

const nav = () => {
  return (
    <nav className="nav-container">
      <div className="container-fluid">
        <div className="d-flex flex-row row-full">
          <div className="logo-container">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={130}
                height={130}
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
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Global Mobility & Immigration
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <Link className="menu-item" href="#">
                    <li>
                      <a className="dropdown-item" href="#">
                        Golden Visa
                      </a>
                    </li>
                  </Link>
                  <Link className="menu-item" href="#">
                    <li>
                      <a className="dropdown-item" href="#">
                        Digital Nomad Visa
                      </a>
                    </li>
                  </Link>
                  <Link className="menu-item" href="#">
                    <li>
                      <a className="dropdown-item" href="#">
                        Citizenship
                      </a>
                    </li>
                  </Link>
                  <Link className="menu-item" href="#">
                    <li>
                      <a className="dropdown-item" href="#">
                        Refugee & Asylum
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
              <Link className="menu-item" href="/tax">
                Tax Representation
              </Link>
              <Link className="menu-item" href="/property">
                Property Management
              </Link>
              <Link className="menu-item" href="/contacts">
                Contact us
              </Link>
            </Menu>
          </div>
        </div>
        <div className="row-nav">
          <Link className="menu-item" href="/about">
            About us
          </Link>

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

          <ul
            className="dropdown-menu "
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <Link className="menu-item" href="#">
              <li>
                <a className="dropdown-item" href="#">
                  Golden Visa
                </a>
              </li>
            </Link>
            <Link className="menu-item" href="#">
              <li>
                <a className="dropdown-item" href="#">
                  Digital Nomad Visa
                </a>
              </li>
            </Link>
            <Link className="menu-item" href="#">
              <li>
                <a className="dropdown-item" href="#">
                  Citizenship
                </a>
              </li>
            </Link>
            <Link className="menu-item" href="#">
              <li>
                <a className="dropdown-item" href="#">
                  Refugee & Asylum
                </a>
              </li>
            </Link>
          </ul>

          <Link className="menu-item" href="/tax">
            Tax Representation
          </Link>
          <Link className="menu-item" href="/property">
            Property Management
          </Link>
          <Link className="menu-item" href="/contacts">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default nav;
