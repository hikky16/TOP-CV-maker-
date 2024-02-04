import BasicInfoField from "./editor-compo/BasicInfoField";
import ContactInfoField from "./editor-compo/ContactInfoField";
import EducationInfoField from "./editor-compo/EducationInfoField";
import WorkInfoField from "./editor-compo/WorkInfoField";
import SkillsInfoField from "./editor-compo/SkillsInfoField";

function Editor({ formData, handleChange, handleFormSubmit, setFormData }) {
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
      <EducationInfoField
        handleFormSubmit={handleFormSubmit}
        educationItems={formData.education}
        setFormData={setFormData}
      />
      <hr />
      <WorkInfoField
        handleFormSubmit={handleFormSubmit}
        workItems={formData.work}
        setFormData={setFormData}
      />
      <hr />
      <SkillsInfoField
        handleFormSubmit={handleFormSubmit}
        skillItems={formData.skills}
        setFormData={setFormData}
      />
    </>
  );
}

export default Editor;
