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
              <div>
                <Image
                  src="/images/logo.svg"
                  width={130}
                  height={130}
                  alt="logo"
                  className="logo"
                />
              </div>
            </Link>
          </div>
          <div className="menu-container">
            <Menu right>
              <Link className="menu-item" href="/about">
                About us
              </Link>
              <li className="dropdown">
                <a
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
                  <Link className="menu-item" href="/goldenvisa">
                    <li>
                      <a className="dropdown-item">Golden Visa</a>
                    </li>
                  </Link>
                  <Link className="menu-item" href="/digital">
                    <li>
                      <a className="dropdown-item">Digital Nomad Visa</a>
                    </li>
                  </Link>
                  <Link className="menu-item" href="/citizenship">
                    <li>
                      <a className="dropdown-item">Citizenship</a>
                    </li>
                  </Link>
                  <Link className="menu-item" href="/entrepreneurs">
                    <li>
                      <a className="dropdown-item">Entrepreneurs</a>
                    </li>
                  </Link>
                  <Link className="menu-item" href="/retirement">
                    <li>
                      <a className="dropdown-item">Retirement & Own Income</a>
                    </li>
                  </Link>
                  <Link className="menu-item" href="/startup">
                    <li>
                      <a className="dropdown-item">Start Up & Tech Visa </a>
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
            <Link className="menu-item" href="/goldenvisa">
              <li>
                <a className="dropdown-item">Golden Visa</a>
              </li>
            </Link>
            <Link className="menu-item" href="/digital">
              <li>
                <a className="dropdown-item">Digital Nomad Visa</a>
              </li>
            </Link>
            <Link className="menu-item" href="/citizenship">
              <li>
                <a className="dropdown-item">Citizenship</a>
              </li>
            </Link>
            <Link className="menu-item" href="/entrepreneurs">
              <li>
                <a className="dropdown-item">Entrepreneurs</a>
              </li>
            </Link>
            <Link className="menu-item" href="/retirement">
              <li>
                <a className="dropdown-item">Retirement & Own Income</a>
              </li>
            </Link>
            <Link className="menu-item" href="/startup">
              <li>
                <a className="dropdown-item">Start Up & Tech Visa </a>
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
