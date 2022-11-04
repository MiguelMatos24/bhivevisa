import Fade from "react-reveal/Fade";
import Link from "next/link";

const Nomad = () => {
  return (
    <div className="nomad">
      <Fade bottom>
        <h2 className="py-5">DIGITAL NOMAD VISA</h2>
      </Fade>
      <div className="container-fluid image-container"></div>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 container-nomad p-3">
            <Fade bottom>
              <div className="subtitle">Digital Nomad</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                Portugal is increasingly becoming an exceptional hub for digital
                nomads. <br></br>The cost of living in Portugal is relatively
                affordable and is considered to be one of the main attractions
                for many freelancers and entrepreneurs.
              </p>
            </Fade>
          </div>
          <div className="col-12 container-nomad p-3">
            <Fade bottom>
              <div className="subtitle">
                Why Portugal is perfect for digital nomad?
              </div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                The Portuguese government recently announced new visas for the
                digital nomad community. This visa allows digital nomads to stay
                or settle in Portugal for a certain period of time. This will
                make it incredibly easy for digital nomads to settle in the
                country. The visa is tailored for digital workers who want to
                stay temporarily in Portugal, such as stays of up to one year,
                but also for those who want to stay on a more permanent basis
                afterwards.
              </p>
            </Fade>
          </div>
          <div className="col-12 container-nomad p-3">
            <Fade bottom>
              <div className="subtitle">Did you know?</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                You can also travel throughout the Schengen area without needing
                a visa or going through border control. All we need from you is
                an employment contract or proof that you are self-employed, with
                an income four times higher than the Portuguese minimum wage
                (€705 in 2022).
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="container container-contact">
        <Fade bottom>
          <div className="sub-title py-3">
            Contact us to find out how we can help you apply for your visa.
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

export default Nomad;
