import Link from "next/link";
import Image from "next/image";

const nav = () => {
  return (
    <nav className="nav-container">
      <div classname="container-fluid">
        <div className="d-flex flex-row  row-full">
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
        </div>
        <div className="row-nav">
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
