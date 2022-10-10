import Image from "next/image";

const Soon = () => {
  return (
    <div className="container-soon">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 py-5">
            <div className="soon-title py-4">BIG NEWS COMING SOON!</div>
            <div className="py-4">
              <Image
                src="/images/logo.svg"
                width={130}
                height={130}
                alt="logo"
                className="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soon;
