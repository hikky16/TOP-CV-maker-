import BasicInfoField from "./editor-compo/BasicInfoField";
import ContactInfoField from "./editor-compo/ContactInfoField";
import EducationInfoField from "./editor-compo/EducationInfoField";

function Editor({ formData, handleChange, handleFormSubmit }) {
  return (
    <>
      <h1>CV Generator</h1>
      <BasicInfoField
        basicinfo={formData.basicinfo}
        handleChange={handleChange}
      />
      <hr />
      <ContactInfoField
        contactinfo={formData.contactinfo}
        handleChange={handleChange}
      />
      <hr />
      <EducationInfoField handleFormSubmit={handleFormSubmit} />
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
