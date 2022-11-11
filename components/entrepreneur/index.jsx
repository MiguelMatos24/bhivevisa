import Fade from "react-reveal/Fade";
import Link from "next/link";

const Asylum = () => {
  return (
    <div className="entrepreneurs-container">
      <Fade bottom>
        <h2 className="py-5">ENTREPRENEURS</h2>
      </Fade>
      <div className="container-fluid image-container"></div>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 container-entrepreneurs p-3">
            <Fade bottom>
              <div className="subtitle">
                Why is Portugal becoming increasingly attractive for investors
                and entrepreneurs?
              </div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                Portugal is becoming increasingly attractive for investors and
                entrepreneurs. With a thriving business network, many companies
                are moving to the country, and many investors are opening new
                offices in major Portuguese cities.
              </p>
            </Fade>
          </div>
          <div className="col-12 container-entrepreneurs p-3">
            <Fade bottom>
              <div className="subtitle">Special Visa</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                There is a special visa for entrepreneurs, freelancers, and
                independent service providers to reside in Portugal. You should
                either have set up a company operating in Portuguese territory
                or have the financial resources in Portugal that demonstrate you
                can set up a company in the country.
              </p>
            </Fade>
          </div>
          <div className="container container-contact">
            <Fade bottom>
              <div className="sub-title py-3">
                Contact us today to find out which is the best way for you!
              </div>
            </Fade>
            <Fade bottom>
              <div className="pt-5">
                <Link href="/contacts">
                  <button>Contact Us</button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asylum;
