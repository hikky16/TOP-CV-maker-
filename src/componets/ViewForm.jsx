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
        {formData.education.map((ed) => {
          const infoList = ed.addInfo.split(",");
          return (
            <li key={ed.school}>
              School: {ed.school} Degree: {ed.degree} Start Date: {ed.startDate}{" "}
              End Date: {ed.endDate} Additional Info:{" "}
              {infoList.map((infoItem, index) => (
                <span key={index}> {infoItem} </span>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ViewForm;
