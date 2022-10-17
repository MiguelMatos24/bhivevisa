import Fade from "react-reveal/Fade";

const componentAbout = () => {
  return (
    <div className="container-about">
      <Fade bottom>
        <div className="title py-5">ABOUT US</div>
      </Fade>
      <div className="container-fluid container-img"></div>
      <Fade bottom>
        <div className="title p-5">
          Bhive Visa is all about cross-border living
        </div>
      </Fade>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 p-3 subcontainer">
            <Fade bottom>
              <div className="subtitle">What drives us</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                What drives us is to help our clients fulfill their aims of
                relocation into Portugal or to acquire a second European
                residence, through safe and responsible investment options.
              </p>
            </Fade>
          </div>
          <div
            className="col-12 p-3 subcontainer"
            style={{ borderBottom: "none" }}
          >
            {" "}
            <Fade bottom>
              <div className="subtitle">Our approach</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                With an experienced and multidisciplinary team, Bhive Visa takes
                a holistic approach to immigration consultancy services, tax
                representation and global property, handling all matters to
                ensure a smooth and worry-free transition.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default componentAbout;
