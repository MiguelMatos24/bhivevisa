import Fade from "react-reveal/Fade";

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
              <div className="subtitle py-3">Tax Department</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                Bhive Visa&lsquo;s tax department incorporates a team of experts
                to assist in applying for a Portuguese tax number, non-habitual
                resident applications and providing tax representation services.
              </p>
            </Fade>
          </div>
          <div className="col-12 subcontainer p-3">
            <Fade bottom>
              <div className="subtitle py-3">Tax Liability</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                We can help you minimise your tax liability, capitalise on tax
                deductions and manage your tax situation. With more experience
                than standard tax preparers, tax advisers can help with tax
                planning, inheritance issues, charitable donations, and other
                complex tax needs.
              </p>
            </Fade>
          </div>
          <div
            className="col-12 subcontainer p-3"
            style={{ borderBottom: "none" }}
          >
            <Fade bottom>
              <div className="subtitle py-3">Fiscal Representative</div>
            </Fade>
            <Fade bottom>
              <p className="py-3">
                We can also represent you before the tax authorities in
                Portugal. Tax representation is the link between a non-resident
                in Portugal and the Portuguese Tax Authority. In practical
                terms, a fiscal representative in Portugal acts on behalf of a
                non-resident in all fiscal and tax matters.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
