const componentProperty = () => {
  return (
    <div className="property">
      <h2 className="py-5">Property Management</h2>
      <div className="container-fluid image-container"></div>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 container-property p-3">
            <div className="subtitle">Management Solution</div>
            <p className="py-3">
              Bhive Visa’s department provides professional, customised, and
              effective property management solutions.
            </p>
          </div>
          <div
            className="col-12 container-property p-3"
            style={{ borderBottom: "none" }}
          >
            <div className="subtitle">Specialities</div>
            <p className="py-3">
              Our specialities are responsibility for the daily repairs and
              on-going maintenance, security and upkeep of your properties, so
              that you have peace of mind whilst abroad to preserve the value of
              the properties whilst generating income.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default componentProperty;
