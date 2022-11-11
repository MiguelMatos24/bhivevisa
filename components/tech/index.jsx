import Fade from "react-reveal/Fade";
import Link from "next/link";

const Tech = () => {
  return (
    <div className="tech-container">
      <Fade bottom>
        <h2 className="py-5">START UP & TECH VISA</h2>
      </Fade>
      <div className="container-fluid image-container"></div>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 container-start p-3">
            <Fade bottom>
              <div className="subtitle">Start Up Visa</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                All entrepreneurs who want to develop a project in Portugal can
                apply for a Start Up Visa, even if they do not have a registered
                company, or who already have a business project in their home
                country and want to continue their activities in Portugal.
              </p>
            </Fade>
          </div>
          <div className="col-12 container-start p-3">
            <Fade bottom>
              <div className="subtitle">Applying</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                Applying for this visa requires a solid business and financial
                plan, demonstrating that the startup has strong job creation
                potential and is able to generate a valid annual income.
                Benefits of this visa include the possibility to travel across
                Schengen Area visa-free, the option to apply for NHR Tax Status,
                and qualification for permanent residence or citizenship in
                Portugal after 5 years.
              </p>
            </Fade>
          </div>
          <div className="container container-contact">
            <Fade bottom>
              <div className="sub-title py-3">
                Contact us today to advise you on the best way to get this visa!
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

export default Tech;
