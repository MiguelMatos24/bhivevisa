import Fade from "react-reveal/Fade";
import Link from "next/link";

const componentProperty = () => {
  return (
    <div className="property">
      <Fade bottom>
        <h2 className="py-5">Property Management</h2>
      </Fade>
      <div className="container-fluid image-container"></div>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 container-property p-3">
            <Fade bottom>
              <div className="subtitle">Management Solution</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                We at Bhive Visa are experts in property management or luxury
                real estate. If you are often abroad, we can contact you from
                your property, so you can worry about what's really important to
                you.
              </p>
            </Fade>
          </div>
          <div className="col-12 container-property p-3">
            <Fade bottom>
              <div className="subtitle">Specialities</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                Bhive Visa&rsquo;s real estate department provides professional,
                customised, and effective property management solutions,
                handling daily repairs and ongoing maintenance, security and
                maintenance of your properties, so you have peace of mind while
                abroad to preserve property value while generating income.
              </p>
            </Fade>
          </div>
          <div className="container container-contact">
            <Fade bottom>
              <div className="sub-title py-3">
                Contact us today to advise you on the best way!
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

export default componentProperty;
