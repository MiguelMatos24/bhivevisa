import Image from "next/image";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container ">
        <div className="row container-footer">
          <div className="col-12 description">
            <div>Privacy and Legal</div>
          </div>
          <div className="col-12 description">
            <Image src="/images/logo.svg" width={80} height={80} alt="logo" />
          </div>
          <div className="col-12 description">
            <div>© Bhive Visa. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
