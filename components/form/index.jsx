const Form = () => {
  return (
    <form className="components-forms">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name"></input>
      <label htmlFor="email">Email:</label>
      <input type="text" name="email"></input>
      <label htmlFor="email">Phone:</label>
      <input type="text" name="email"></input>
      <label htmlFor="email">Email:</label>
      <input type="selected" name="country"></input>
      <label htmlFor="description">Message:</label>
      <textarea name="description"></textarea>
      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
