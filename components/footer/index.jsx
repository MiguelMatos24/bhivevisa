import Image from "next/image";

const footer = () => {
  return (
    <footer className="footer p-4">
      <div className="container-fluid">
        <div className="row container-footer">
          <div className="col-12 description">
            <Image src="/images/logo.svg" width={80} height={80} alt="logo" />

            <div className="icons">
              <a>
                <Image
                  src="/icons/facebook.svg"
                  width={21}
                  height={21}
                  alt="icons"
                  className="icon"
                />
              </a>
              <a>
                <Image
                  src="/icons/instagram.svg"
                  width={23}
                  height={23}
                  alt="icons"
                  className="icon"
                />
              </a>
              <a>
                <Image
                  src="/icons/linkedin.svg"
                  width={23}
                  height={23}
                  alt="icons"
                  className="icon"
                />
              </a>
              <a>
                <Image
                  src="/icons/whatsapp.svg"
                  width={23}
                  height={23}
                  alt="icons"
                  className="icon"
                />
              </a>
            </div>
            <div>info@bhivevisa.com</div>
            <div>Privacy and Legal</div>
            <div>© Bhive Visa. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
