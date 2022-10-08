import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <footer className="footer p-5">
      <div className="container-fluid">
        <div className="row container-footer">
          <div className="col-12 description">
            <Image src="/images/logo.svg" width={80} height={80} alt="logo" />

            <div className="icons py-2">
              <Link href="#">
                <a>
                  <Image
                    src="/icons/facebook.svg"
                    width={21}
                    height={21}
                    alt="icons"
                    className="icon"
                  />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Image
                    src="/icons/instagram.svg"
                    width={23}
                    height={23}
                    alt="icons"
                    className="icon"
                  />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Image
                    src="/icons/linkedin.svg"
                    width={23}
                    height={23}
                    alt="icons"
                    className="icon"
                  />
                </a>
              </Link>
            </div>
            <Link href="#">
              <div className="py-2" style={{ cursor: "pointer" }}>
                info@bhivevisa.com
              </div>
            </Link>
            <Link href="#">
              <div className="py-2">Privacy and Legal</div>
            </Link>
            <div className="py-2">© Bhive Visa. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
