import Fade from "react-reveal/Fade";

const Asylum = () => {
  return (
    <div className="asylum-container">
      <Fade bottom>
        <h2 className="py-5">Refugee & Asylum</h2>
      </Fade>
      <div className="container-fluid image-container"></div>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 container-sephardic p-3">
            <Fade bottom>
              <div className="subtitle">
                Are you a descendant of Portuguese Sephardic Jews?
              </div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                Sephardic Jews are the descendants of the ancient Jews of
                Portugal and Spain.<br></br> You can apply for Portuguese
                nationality under these conditions if you are over 18 years old
                and belong to a Sephardic community of Portuguese origin.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asylum;
