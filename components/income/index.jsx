import Fade from "react-reveal/Fade";
import Link from "next/link";

const Income = () => {
  return (
    <div className="income-container">
      <Fade bottom>
        <h2 className="py-5">RETIREMENT & OWN INCOME</h2>
      </Fade>
      <div className="container-fluid image-container"></div>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 container-retirement p-3">
            <Fade bottom>
              <div className="subtitle">Visa for Pensioners</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                There is a visa for pensioners, retired foreign citizens or
                others living off of a stable income. It allows foreigner
                citizens, who wish to reside in Portugal as retirees or live on
                their own income, regardless of age, the entrance in Portugal in
                order to obtain a residence permit. Single applicants need to
                generate and provide proof of a passive derived income of at
                least €705 per month. Additional €352,5 per month is required
                for the dependant adult and for children under 18 equals €211,5
                per month.
              </p>
            </Fade>
          </div>
          <div className="col-12 container-retirement p-3">
            <Fade bottom>
              <div className="subtitle">Visa Holders</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                The visa holders can obtain a residence permit in Portugal for a
                period of one year, which can then be renewed for successive
                periods of 2 years and can be converted into a permanent
                residence permit after 5 years You will enjoy visa-free travel
                to any one of the Schengen Countries. Ultimately, you enjoy the
                same travel benefits as Portuguese citizens, such as access to
                the National Health Service. And the possibility to apply for
                citizenship after 5 years.
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

export default Income;
