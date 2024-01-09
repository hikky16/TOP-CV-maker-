function EducationInfoField({ handleFormSubmit }) {
  return (
    <form data-custom-value="education" onSubmit={handleFormSubmit}>
      <h3>Education Background</h3>
      <fieldset>
        <div>
          <span>School: </span>
          <input
            type="text"
            placeholder="School"
            name="school"
            className="input-field"
          />
        </div>
        <div>
          <span>Degree: </span>
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            className="input-field"
          />
        </div>
        <button type="submitt">Submitt</button>
      </fieldset>
    </form>
  );
}

export default EducationInfoField;
