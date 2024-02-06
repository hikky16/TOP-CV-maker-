import BasicInfoField from "./editor-compo/BasicInfoField";
import ContactInfoField from "./editor-compo/ContactInfoField";
import EducationInfoField from "./editor-compo/EducationInfoField";
import WorkInfoField from "./editor-compo/WorkInfoField";
import SkillsInfoField from "./editor-compo/SkillsInfoField";
import genStyles from "./editor-compo/css/GeneralCss.module.css"

function Editor({ formData, handleChange, handleFormSubmit, setFormData, handlePrint }) {
  return (
    <>
    <div style={{display: "flex", alignItems: "center"}}>
      <h1 style={{marginRight: "auto"}}>CV Generator</h1>
      <button onClick={handlePrint} className={genStyles.button} >Save</button>
    </div>
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
