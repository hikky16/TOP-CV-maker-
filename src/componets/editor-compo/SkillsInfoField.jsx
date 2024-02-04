import { useState } from "react";
import genStyles from "./css/GeneralCss.module.css";

function SkillsInfoField({ handleFormSubmit, skillItems, setFormData }) {
  const [skillValue, setSkillValue] = useState("");
  const handleSkillValue = (e) => {
    setSkillValue(e.target.value);
  };

  const handleSubmit = (e) => {
    handleFormSubmit(e);
    setSkillValue("");
  };

  const handleDeleteForm = (e) => {
    setFormData((f) => {
      const updatedSkills = [...f.skills];
      updatedSkills.splice(e.target.dataset.indexValue, 1);
      return { ...f, skills: updatedSkills };
    });
  };

  return (
    <form data-custom-value="skills" onSubmit={handleSubmit}>
      <h3>Skills and Trainings</h3>
      <div className="workItems-container">
        {skillItems
          ? skillItems.map((element, index) => (
              <div className="workItem" key={index}>
                <span className="workItem-name">{element.skill}</span>
                <i
                  className="bi bi-trash"
                  data-index-value={index}
                  data-form-type="skills"
                  onClick={handleDeleteForm}
                ></i>
              </div>
            ))
          : ""}
      </div>
      <fieldset className={genStyles.fieldSet}>
        <div className={genStyles.inputFieldContainer}>
          <span className={genStyles.inputLabel}>Skill or Training: </span>
          <input
            value={skillValue}
            type="text"
            placeholder="Add Skill or Training"
            name="skill"
            required
            className={genStyles.inputField}
            onChange={handleSkillValue}
          />
        </div>

        <button type="submit" className={genStyles.button}>
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default SkillsInfoField;
