import BasicInfoField from "./BasicInfoField";

function Editor({ formData, handleChange }) {
  return (
    <>
      <h1>CV Generator</h1>
      <BasicInfoField
        basicinfo={formData.basicinfo}
        handleChange={handleChange}
      />
      <hr />
      <h3>Contact Informations</h3>
      <hr />
      <h3>Educational Background</h3>
      <hr />
      <h3>Work Experience</h3>
      <hr />
      <h3>Skills and Trainings</h3>
      <hr />
      <h3>Other Info</h3>
      <hr />
    </>
  );
}

export default Editor;
