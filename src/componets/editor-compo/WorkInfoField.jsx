import { useState } from "react";
import genStyles from "./css/GeneralCss.module.css";
import circlePlus from "./icons/plus-circle.svg";
import "./css/WorkInfoField.css";

function WorkInfoField({ handleFormSubmit, workItems, setFormData }) {
  const [positionValue, setPositionValue] = useState("");
  const handlePositionValue = (e) => {
    setPositionValue(e.target.value);
  };

  const [companyValue, setCompanyValue] = useState("");
  const handleCompanyValue = (e) => {
    setCompanyValue(e.target.value);
  };

  const [startDateValue, setStartDateValue] = useState("");
  const handleStartDateValue = (e) => {
    setStartDateValue(e.target.value);
  };

  const [endDateValue, setEndDateValue] = useState("");
  const handleEndDateValue = (e) => {
    setEndDateValue(e.target.value);
  };

  const [OnGoing, setOnGoing] = useState(false);
  const handleOnGoing = (e) => {
    setOnGoing(e.target.checked);
  };

  const [dutiesValue, setDutiesValue] = useState("");
  const handleDutiesValue = (e) => {
    setDutiesValue(e.target.value);
  };

  const [dutiesArray, setDutiesArray] = useState([]);
  const handleAddDutiesArray = () => {
    if (dutiesValue !== "") {
      setDutiesArray((d) => [...d, dutiesValue]);
      setDutiesValue("");
    }
  };
  const handleRemoveDutiesArray = (e) => {
    setDutiesArray((d) => {
      const arrayCopy = [...d];
      arrayCopy.splice(e.target.dataset.indexValue, 1);
      return [...arrayCopy];
    });
  };

  const handleSubmit = (e) => {
    handleFormSubmit(e);
    setPositionValue("");
    setCompanyValue("");
    setStartDateValue("");
    setEndDateValue("");
    setDutiesArray([]);
  };

  const handleEditForm = (e) => {
    const editData = workItems[e.target.dataset.indexValue];
    setPositionValue(editData.position);
    setCompanyValue(editData.company);
    setStartDateValue(editData.startDate);
    setEndDateValue(editData.endDate);
    if (editData.duties) {
      setDutiesArray([...editData.duties.split(",")]);
    }
    handleDeleteForm(e);
  };

  const handleDeleteForm = (e) => {
    setFormData((f) => {
      const updatedWork = [...f.work];
      updatedWork.splice(e.target.dataset.indexValue, 1);
      return { ...f, work: updatedWork };
    });
  };

  const showNotOnGoing = (
    <div className={genStyles.inputFieldContainer}>
      <span className={genStyles.inputLabel}>End Date: </span>
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

  return (
    <form data-custom-value="work" onSubmit={handleSubmit}>
      <h3>Work Experience</h3>
      <div className="workItems-container">
        {workItems
          ? workItems.map((element, index) => (
              <div className="workItem">
                <span className="workItem-name">{element.position}</span>
                <i
                  className="bi bi-pencil"
                  data-index-value={index}
                  data-form-type="work"
                  onClick={handleEditForm}
                ></i>
                /
                <i
                  className="bi bi-trash"
                  data-index-value={index}
                  data-form-type="work"
                  onClick={handleDeleteForm}
                ></i>
              </div>
            ))
          : ""}
      </div>
      <fieldset className={genStyles.fieldSet}>
        <div className={genStyles.inputFieldContainer}>
          <span className={genStyles.inputLabel}>Position: </span>
          <input
            value={positionValue}
            type="text"
            placeholder="Title/Rank"
            name="position"
            required
            className={genStyles.inputField}
            onChange={handlePositionValue}
          />
        </div>
        <div className={genStyles.inputFieldContainer}>
          <span className={genStyles.inputLabel}>Company: </span>
          <input
            value={companyValue}
            type="text"
            placeholder="Company Name"
            name="company"
            required
            className={genStyles.inputField}
            onChange={handleCompanyValue}
          />
        </div>
        <div className={genStyles.inputFieldContainer}>
          <span className={genStyles.inputLabel}>Start Date: </span>
          <input
            value={startDateValue}
            type="month"
            placeholder="Start Date"
            name="startDate"
            required
            className={genStyles.inputField}
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

        {!OnGoing && showNotOnGoing}

        <input hidden value={dutiesArray} name="duties" />

        <div className={genStyles.inputFieldContainer}>
          <span>
            <strong>Duties/Responsibilities: </strong>
          </span>
          <div className="dutiesItems-container">
            {dutiesArray.map((item, index) => (
              <div className="dutiesItem">
                <span className="dutiesItem-name" key={index}>
                  {item}{" "}
                </span>
                <i
                  className="bi bi-trash"
                  data-index-value={index}
                  onClick={handleRemoveDutiesArray}
                ></i>
              </div>
            ))}
          </div>
          <div className="dutiesInput-container">
            <input
              type="text"
              value={dutiesValue}
              placeholder="List Duties and Responsibilities"
              className={genStyles.inputField}
              onChange={handleDutiesValue}
            />
            <img
              src={circlePlus}
              onClick={handleAddDutiesArray}
              className="cirlce-image"
            />
          </div>
        </div>

        <button type="submit" className={genStyles.button}>
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default WorkInfoField;
