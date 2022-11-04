import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";

const Golden = () => {
  return (
    <div className="container-golden">
      <Fade bottom>
        <div className="title py-5">GOLDEN VISA</div>
      </Fade>
      <div className="container">
        <Fade bottom>
          <div className="row pb-5">
            <div className="col-lg-6 col-12 text-container nopadding">
              <div className="py-5 subtitle">Overview</div>
              <p className="px-4">
                The Golden Visa is a Goverment Program created in 2012, and
                consists in the granting of a residency permit for the investors
                and their families. The Golden Visa Program is commonly used for
                5 years, being each residency card valid for 2 years.
              </p>
            </div>
            <div className="col-lg-6 col-12 nopadding">
              <Image
                src="/images/image12.jpg"
                alt="image10"
                width={600}
                height={400}
              />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="row pb-5">
            <div className="col-lg-6 residence nopadding">
              <div className="py-5 subtitle">Residence Card</div>
              <p className="px-4">
                During the validity of each residency card the applicants shall
                stay 14 days in Portugal, having the total freedom to do the 14
                days of stay in any period and amount of trips that suits best,
                as long as is done within the validity of the residency card.
                After 5 years, which counts from the issue date of the 1st
                residency card, the applicants are entitled to apply for
                Permanent Residency and also for Portuguese Citizenship.
              </p>
            </div>
            <div className="col-lg-6 nopadding">
              <Image
                src="/images/image11.jpg"
                alt="image10"
                width={600}
                height={400}
              />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="row pb-5">
            <div className="col-lg-6  nopadding applicants">
              <div className="py-5 subtitle">Advantages</div>
              <p className="px-4">
                Besides the possibility to acquire the Portuguese citizenship
                after the initial 5 years of the Golden Visa, a great advantage
                that the Golden Visa offers, is that the all Golden Visa holders
                are entitled to freely travel within Schengen area, not being
                required to request/hold a Schengen Visa, as long as they
                present at the Schengen borders the valid residency permit
                (Golden Visa).
              </p>
            </div>
            <div className="col-lg-6 nopadding">
              <Image
                src="/images/image9.jpg"
                alt="image10"
                width={600}
                height={400}
              />
            </div>
          </div>
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
  );
};
export default Golden;
