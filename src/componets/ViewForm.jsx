function ViewForm({ formData }) {
  return (
    <div>
      <h1>Preview of CCV HERE!</h1>
      <ul>
        {Object.entries(formData.basicinfo).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewForm;
