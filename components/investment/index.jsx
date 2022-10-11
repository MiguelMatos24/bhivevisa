import Image from "next/image";
import Fade from "react-reveal/Fade";

const Investment = () => {
  return (
    <div className="container container-investment">
      <div className="row d-flex flex-row">
        <Fade bottom>
          <div className="col-sm-4 col-md-6 col-lg-4">
            <Image
              src="/images/image2.jpg"
              alt="image2"
              width={400}
              height={400}
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="col-12 col-md-8">
            <div className="title p-3">
              Bhive Visa provides one stop shop experience tailoring our
              services to the investors needs and interests.
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Investment;
