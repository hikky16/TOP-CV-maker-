function ViewForm({ formData }) {
  return (
    <div>
      <h1>Preview of CCV HERE!</h1>
      <h3>Basic Info</h3>
      <ul>
        {Object.entries(formData.basicinfo).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <hr />
      <h3>Contact Info</h3>
      <ul>
        {Object.entries(formData.contactinfo).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <h3>Education</h3>
      <ul>
        {formData.education.map((ed) => (
          <li key={ed.school}>
            {ed.school} + {ed.degree}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewForm;
