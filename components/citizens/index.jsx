import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";

const Citizens = () => {
  return (
    <div className="container-citizens">
      <Fade bottom>
        <div className="title py-5">Citizanship</div>
      </Fade>
      <div className="container">
        <Fade bottom>
          <div className="row pb-5">
            <div className="col-lg-6 col-12 text-container nopadding">
              <div className="py-5 subtitle">Overview</div>
              <p className="px-4">
                Citizenship provides a legal status and relation between an
                individual and a state to which a person’s rights and duties are
                attached.
              </p>
            </div>
            <div className="col-lg-6 col-12 nopadding">
              <Image
                src="/images/pass.jpg"
                alt="image10"
                width={600}
                height={400}
              />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="row pb-5">
            <div className="col-lg-6 col-12 portugal-container nopadding">
              <div className="py-5 subtitle">Portuguese Nationality</div>
              <p className="px-4">
                Portuguese nationality can be granted at birth or acquired
                anytime during your lifetime.
              </p>
            </div>
            <div className="col-lg-6 col-12 nopadding">
              <Image
                src="/images/portugal.jpg"
                alt="image10"
                width={600}
                height={400}
              />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="row pb-5">
            <div className="col-lg-6 col-12 law-container nopadding">
              <div className="py-5 subtitle">Portuguese Law</div>
              <p className="px-4">
                Portuguese law allows a Portuguese person to have other
                nationalities. Therefore, it is not necessary to give up another
                nationality to acquire Portuguese nationality. However, the laws
                of other countries may require one to give up Portuguese
                nationality in order to have the nationality of one of those
                countries. There are several ways to acquire Portuguese
                Nationality.
              </p>
            </div>
            <div className="col-lg-6 col-12 nopadding">
              <Image
                src="/images/law.jpg"
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
            Contact us today to find out which is the best way for you to become
            Portuguese.
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

export default Citizens;
