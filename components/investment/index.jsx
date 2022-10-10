import Image from "next/image";
import Link from "next/link";

const Investment = () => {
  return (
    <div className=" container-fluid container-investment p-5">
      <div className="container">
        <div className="row d-flex flex-row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <Image
              src="/images/image2.jpg"
              alt="image2"
              width={400}
              height={400}
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="title">
              Bhive Visa provides one stop shop experience tailoring our
              services to the investors needs and interests.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
