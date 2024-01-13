import { useState, useEffect } from "react";
import styles from "./css/EducationInfo.module.css";
import genStyles from "./css/GeneralCss.module.css";
import circlePlus from "./icons/plus-circle.svg";

function EducationInfoField({ handleFormSubmit, educationItems, setFormData }) {
  const [OnGoing, setOnGoing] = useState(false);
  const [addInfo, setAddInfo] = useState([]);
  const [addInfoValue, setAddInfoValue] = useState("");
  const [schoolValue, setSchoolValue] = useState("");
  const [degreeValue, setDegreeValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");

  const currentDate = new Date();

  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;

  const handleSchoolValue = (e) => {
    setSchoolValue(e.target.value);
  };

  const handleDegreeValue = (e) => {
    setDegreeValue(e.target.value);
  };

  const handleStartDateValue = (e) => {
    setStartDateValue(e.target.value);
  };

  const handleEndDateValue = (e) => {
    setEndDateValue(e.target.value);
  };

  const handleOnGoing = (e) => {
    setOnGoing(e.target.checked);
  };

  const showNotOnGoing = (
    <div className={genStyles.inputFieldContainer}>
      <span className={genStyles.inputLabel}>Graduated: </span>
      <input
        value={endDateValue}
        type="month"
        name="endDate"
        className={genStyles.inputField}
        onChange={handleEndDateValue}
        required
      />
    </div>
  );

  const handleAddInfoValue = (e) => {
    setAddInfoValue(e.target.value);
  };

  const handleAddInfo = (e) => {
    if (addInfoValue !== "") {
      setAddInfo((a) => [...a, addInfoValue]);
      setAddInfoValue("");
    }
  };

  const handleRemoveFromAddInfo = (e) => {
    setAddInfo((a) => {
      const arrayCopy = [...a];
      arrayCopy.splice(e.target.dataset.indexValue, 1);
      return [...arrayCopy];
    });
  };

  const handleSubmit = (e) => {
    handleFormSubmit(e);
    setSchoolValue("");
    setDegreeValue("");
    setStartDateValue("");
    setEndDateValue("");
    setAddInfo([]);
  };

  const handleEditForm = (e) => {
    const editData = educationItems[e.target.dataset.indexValue];
    setSchoolValue(editData.school);
    setDegreeValue(editData.degree);
    setStartDateValue(editData.startDate);
    setEndDateValue(editData.endDate);
    if (editData.addInfo) {
      setAddInfo([...editData.addInfo.split(",")]);
    }
    handleDeleteForm(e);
  };

  const handleDeleteForm = (e) => {
    setFormData((f) => {
      const updatedEducation = [...f.education];
      updatedEducation.splice(e.target.dataset.indexValue, 1);
      return { ...f, education: updatedEducation };
    });
  };

  const hoverIn = (e) => {
    const classArray = e.target.className.split(" ");
    if (classArray.includes("bi-pencil")) {
      e.target.className = "bi bi-pencil-fill";
    } else {
      e.target.className = "bi bi-trash-fill";
    }
  };

  const hoverOut = (e) => {
    const classArray = e.target.className.split(" ");
    if (classArray.includes("bi-pencil-fill")) {
      e.target.className = "bi bi-pencil";
    } else {
      e.target.className = "bi bi-trash";
    }
  };

  return (
    <form data-custom-value="education" onSubmit={handleSubmit}>
      <h3>Education Background</h3>
      {educationItems
        ? educationItems.map((element, index) => (
            <div className={styles.edItems}>
              <span>{element.school}</span>
              <i
                className="bi bi-pencil"
                data-index-value={index}
                data-form-type="education"
                onClick={handleEditForm}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              ></i>
              /
              <i
                className="bi bi-trash"
                data-index-value={index}
                data-form-type="education"
                onClick={handleDeleteForm}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              ></i>
            </div>
          ))
        : ""}
      <fieldset className={genStyles.fieldSet}>
        <div className={genStyles.inputFieldContainer}>
          <span className={genStyles.inputLabel}>School: </span>
          <input
            value={schoolValue}
            type="text"
            required
            placeholder="School"
            name="school"
            className={genStyles.inputField}
            onChange={handleSchoolValue}
          />
        </div>
        <div className={genStyles.inputFieldContainer}>
          <span className={genStyles.inputLabel}>Degree: </span>
          <input
            value={degreeValue}
            type="text"
            required
            placeholder="Degree"
            name="degree"
            className={genStyles.inputField}
            onChange={handleDegreeValue}
          />
        </div>
        <div className={genStyles.inputFieldContainer}>
          <span className={genStyles.inputLabel}>Starting Year: </span>
          <input
            value={startDateValue}
            type="month"
            name="startDate"
            className={genStyles.inputField}
            required
            onChange={handleStartDateValue}
          />
        </div>
        <div className={genStyles.inputFieldContainer}>
          <span>OnGoing </span>
          <input
            type="checkbox"
            name="onGoing"
            className=""
            checked={OnGoing}
            onChange={handleOnGoing}
          />
        </div>
        {OnGoing ? "" : showNotOnGoing}
        <input value={addInfo} name="addInfo" hidden />
        <div className={genStyles.inputFieldContainer}>
          <span>Additional Info(Awards,etc): </span>
          <div className={styles.addinfoContainer}>
            {addInfo.map((item, index) => (
              <span key={index} className={styles.addinfo}>
                {item}{" "}
                <i
                  className="bi bi-trash"
                  data-index-value={index}
                  onClick={handleRemoveFromAddInfo}
                ></i>
              </span>
            ))}
          </div>
          <div className={styles.addinfoInputContainer}>
            <input
              type="text"
              value={addInfoValue}
              className={genStyles.inputField}
              onChange={handleAddInfoValue}
            />
            <img
              src={circlePlus}
              onClick={handleAddInfo}
              className={styles.circleImage}
            />
          </div>
        </div>
        <button type="submitt" className={genStyles.button}>
          Submitt
        </button>
      </fieldset>
    </form>
  );
}

export default EducationInfoField;
