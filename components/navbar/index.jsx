import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

const nav = () => {
  const menuItems = [
    {
      title: "About us",
      url: "/about",
    },
    {
      title: "Global Mobility & Immigration",
      url: "/global-mobility",
    },
    {
      title: "Tax Representation",
      url: "/tax",
    },
    {
      title: "Property Management",
      url: "/property",
    },
    {
      title: "Contact us",
      url: "/contacts",
    },
  ];
  const subMenu = [
    {
      title: "Golden Visa",
      url: "#",
    },
    {
      title: "Digital Nomad Visa",
      url: "#",
    },
    {
      title: "Citizenship",
      url: "#",
    },
    {
      title: "Refugee & Asylum",
      url: "#",
    },
  ];
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
              {menuItems.map((menu, key) => {
                return (
                  <Link className="menu-item" href={menu.url} key={key}>
                    {menu.title}
                  </Link>
                );
              })}
            </Menu>
          </div>
        </div>
        <div className="row-nav">
          {menuItems.map((menu, key) => {
            return (
              <Link href={menu.url} key={key}>
                {menu.title}
              </Link>
            );
          })}

          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default nav;
