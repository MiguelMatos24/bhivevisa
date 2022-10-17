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
                Digital nomads are remote workers who travel and work in
                different countries. They often live a nomadic lifestyle and use
                technology to supplement their work responsibilities.
              </p>
            </Fade>
          </div>
          <div className="col-12 container-nomad p-3">
            <Fade bottom>
              <div className="subtitle">Why is perfect for digital nomad?</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                The visa is perfect for freelancers, remote workers and digital
                nomads who seek to live and work freely without borders.
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

export default Nomad;
