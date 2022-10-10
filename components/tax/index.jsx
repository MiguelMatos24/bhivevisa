const Tax = () => {
  return (
    <div className="tax">
      <h2 className="title py-5">Tax Representation</h2>
      <div className="container-fluid container-image"></div>
      <div className="container container-tax p-4">
        <div className="row">
          <div className="col-12 subcontainer p-3">
            <div className="subtitle py-3">Tax Department</div>
            <p className="py-3">
              Bhive Visa&lsquo;s tax department incorporates a team of experts
              to assist in applying for a Portuguese tax number, non-habitual
              resident applications and providing tax representation services.
            </p>
          </div>
          <div className="col-12 subcontainer p-3">
            <div className="subtitle py-3">Tax Liability</div>

            <p className="py-3">
              We can help you minimise your tax liability, capitalise on tax
              deductions and manage your tax situation. With more experience
              than standard tax preparers, tax advisers can help with tax
              planning, inheritance issues, charitable donations, and other
              complex tax needs.
            </p>
          </div>
          <div
            className="col-12 subcontainer p-3"
            style={{ borderBottom: "none" }}
          >
            <div className="subtitle py-3">Fiscal Representative</div>

            <p className="py-3">
              We can also represent you before the tax authorities in Portugal.
              Tax representation is the link between a non-resident in Portugal
              and the Portuguese Tax Authority. In practical terms, a fiscal
              representative in Portugal acts on behalf of a non-resident in all
              fiscal and tax matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
