import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row container-footer">
          <div className="col-12 description">
            <Image src="/images/logo.svg" width={80} height={80} alt="logo" />
          </div>
          <div className="icons">
            <Image
              src="/icons/facebook.svg"
              width={40}
              height={40}
              alt="icons"
              className="icon pe-3"
            />
            <Image
              src="/icons/instagram.svg"
              width={40}
              height={40}
              alt="icons"
              className="icon pe-3"
            />
            <Image
              src="/icons/linkedin.svg"
              width={40}
              height={40}
              alt="icons"
              className="icon pe-3"
            />
            <Image
              src="/icons/whatsapp.svg"
              width={40}
              height={40}
              alt="icons"
              className="icon pe-3"
            />
          </div>
          <div>Privacy and Legal</div>
          <div>© Bhive Visa. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
