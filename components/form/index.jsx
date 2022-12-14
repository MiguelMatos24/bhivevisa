import { useState } from "react";
import Fade from "react-reveal/Fade";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    country: "",
  });

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("inputs", inputs);
    if (
      inputs.name &&
      inputs.email &&
      inputs.message &&
      inputs.phone &&
      inputs.country
    ) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(inputs),
        });
        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setInputs({
          name: "",
          email: "",
          phone: "",
          message: "",
          country: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };

  return (
    <form
      className="components-form container-fluid py-5"
      onSubmit={(e) => onSubmitForm(e)}
    >
      <Fade bottom big>
        <div className="container">
          <div className="row">
            <h2 className="py-3">CONTACT US</h2>
            <div className="col-6 forms">
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                required
              ></input>
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="col-6 forms">
              <label htmlFor="phone">
                Phone<span>*</span>
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
                required
              ></input>
              <label htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                name="country"
                value={inputs.country}
                onChange={handleChange}
              ></input>
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="1"
                cols="50"
                value={inputs.message || ""}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="container-button py-5">
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </div>
      </Fade>
    </form>
  );
};

export default Form;
