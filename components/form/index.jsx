const Form = () => {
  return (
    <form className="components-form container p-4">
      <div className="row ">
        <h2>CONTACT US</h2>
        <div className="col-6 forms">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input type="text" name="name" required></input>
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input type="text" name="email" required></input>
        </div>
        <div className="col-6 forms">
          <label htmlFor="phone">
            Phone<span>*</span>
          </label>
          <input type="text" name="Phone" required></input>
          <label htmlFor="country">Country</label>
          <input type="selected" name="country"></input>
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea name="message" rows="4" cols="50"></textarea>
        </div>
        <div className="container-button">
          <button>SUBMIT</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
