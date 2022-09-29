const Form = () => {
  return (
    <form className="components-form">
      <label htmlFor="title">Job Title:</label>
      <input type="text" name="title"></input>
      <label htmlFor="location">Location:</label>
      <input type="text" name="location"></input>
      <label htmlFor="description">Description:</label>
      <textarea name="description"></textarea>
      <label htmlFor="company_name">Company Name:</label>
      <input type="text" name="company_name"></input>
      <label htmlFor="apply_url">Apply Url</label>
      <input type="text" name="apply_url"></input>
      <label htmlFor="min_yearly_salary">Minimum Salary</label>
      <input type="number" name="min_yearly_salary"></input>
      <label htmlFor="max_yearly_salary">Maximum Salary</label>
      <input type="number" name="max_yearly_salary"></input>
    </form>
  );
};

export default Form;
