import { useState, useEffect } from "react";
import styles from "./css/EducationInfo.module.css";

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

  const showOnGoing = (
    <input type="month" name="endDate" defaultValue={formattedDate} hidden />
  );

  const showNotOnGoing = (
    <div>
      <span>Graduated: </span>
      <input
        value={endDateValue}
        type="month"
        name="endDate"
        className={styles.inputField}
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

  return (
    <form data-custom-value="education" onSubmit={handleSubmit}>
      <h3>Education Background</h3>
      {educationItems
        ? educationItems.map((element, index) => (
            <div>
              <span>{element.school}</span>
              <i
                className="bi bi-pencil"
                data-index-value={index}
                data-form-type="education"
                onClick={handleEditForm}
              ></i>
              /
              <i
                className="bi bi-trash"
                data-index-value={index}
                data-form-type="education"
                onClick={handleDeleteForm}
              ></i>
            </div>
          ))
        : ""}
      <fieldset>
        <div>
          <span>School: </span>
          <input
            value={schoolValue}
            type="text"
            required
            placeholder="School"
            name="school"
            className={styles.inputField}
            onChange={handleSchoolValue}
          />
        </div>
        <div>
          <span>Degree: </span>
          <input
            value={degreeValue}
            type="text"
            required
            placeholder="Degree"
            name="degree"
            className={styles.inputField}
            onChange={handleDegreeValue}
          />
        </div>
        <div>
          <span>Starting Year: </span>
          <input
            value={startDateValue}
            type="month"
            name="startDate"
            className={styles.inputField}
            required
            onChange={handleStartDateValue}
          />
        </div>
        <div>
          <span>OnGoing </span>
          <input
            type="checkbox"
            name="onGoing"
            className=""
            checked={OnGoing}
            onChange={handleOnGoing}
          />
        </div>
        {OnGoing ? showOnGoing : showNotOnGoing}
        <input value={addInfo} name="addInfo" hidden />
        <div>
          <span>Additional Info(Awards,etc): </span>
          <div>
            {addInfo.map((item, index) => (
              <span key={index} className={styles.edItem}>
                {item}{" "}
                <i
                  className="bi bi-trash"
                  data-index-value={index}
                  onClick={handleRemoveFromAddInfo}
                ></i>
              </span>
            ))}
          </div>
          <div>
            <input
              type="text"
              value={addInfoValue}
              className={styles.inputField}
              onChange={handleAddInfoValue}
            />
            <i className="bi bi-plus-circle-fill" onClick={handleAddInfo}></i>
          </div>
        </div>
        <button type="submitt">Submitt</button>
      </fieldset>
    </form>
  );
}

export default EducationInfoField;
