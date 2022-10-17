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
                The Golden Visa is a Government Programme created in 2012 and
                consists of granting a Portuguese residence permit to investors
                and their families.
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
                The investors and their family will hold a Portuguese residence
                card which allows them to live and work in Portugal and travel
                visa-free between the 26 countries of the Schengen Area.
                <br></br> Check the list of Schengen countries
                <Link href="https://vistos.mne.gov.pt/pt/vistos-schengen/informacao-geral/area-schengen">
                  <span> here</span>
                </Link>
                .
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
              <div className="py-5 subtitle">Applicants</div>
              <p className="px-4">
                More than 25,000 citizens have already obtained a Portuguese
                residence permit through the Portuguese Golden Visa programme.
                Applicants of the Golden Visa are eligible to apply, at the end
                of the programme, for Portuguese Permanent Residency or
                Portuguese Citizenship and Passport.
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
        <Fade bottom>
          <div className="row pb-5">
            <div className="col-lg-6 text-container nopadding">
              <div className="py-5 subtitle">Residency Program</div>
              <p className="px-4">
                The Golden Visa programme has become a successful programme, in
                part due to its low minimum stay requirements. It is one of the
                most attractive residency programmes for investors worldwide.
              </p>
            </div>
            <div className="col-lg-6 nopadding">
              <Image
                src="/images/image8.jpg"
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
            Contact us today to learn about the various investment projects
            available to you.
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
  );
};
export default Golden;
