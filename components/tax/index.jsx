import Fade from "react-reveal/Fade";
import Link from "next/link";

const Tax = () => {
  return (
    <div className="tax">
      <Fade bottom>
        <h2 className="title py-5">Tax Representation</h2>
      </Fade>
      <div className="container-fluid container-image"></div>
      <div className="container container-tax p-4">
        <div className="row">
          <div className="col-12 subcontainer p-3">
            <Fade bottom>
              <div className="subtitle py-3">Tax Representative</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                Bhive Visa can act as tax representative for you, so that you do
                not have to deal personally with matters relating to the
                Portuguese tax system. As a new resident in Portugal, you will
                benefit from the Non Habitual Resident status. The NHR status is
                available to anyone who was not a tax resident in Portugal in
                the last five years.
              </p>
            </Fade>
          </div>
          <div className="col-12 subcontainer p-3">
            <Fade bottom>
              <div className="subtitle py-3">NHR Resindent</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                An NHR resident has international income, including salary,
                business earnings, investment yields, rental income, capital
                gains, and pensions, exempt from taxation in Portugal for a
                period of ten years. Additionally, they are also exempt from tax
                on their wealth during this period. Any income generated in
                Portugal will be taxed at a flat rate of 20% instead of the
                bracketed income tax rates that climb as high as 48%.
              </p>
            </Fade>
          </div>
          <div
            className="col-12 subcontainer p-3"
            style={{ borderBottom: "none" }}
          ></div>
          <div className="container container-contact">
            <Fade bottom>
              <div className="sub-title py-3">
                Contact us today to advise you on the best way!
              </div>
            </Fade>
            <Fade bottom>
              <div className="py-5">
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

export default Tax;
