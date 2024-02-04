import { useState } from "react";
import genStyles from "./css/GeneralCss.module.css";

function BasicInfoField({ basicinfo, handleChange }) {
  const fieldContent = (
    <form>
      <fieldset className={genStyles.fieldSet}>
        <div className={genStyles.infoFieldContainer}>
          <span className={genStyles.inputLabel}>First Name: </span>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            data-custom-value="basicinfo"
            className={genStyles.inputField}
            value={basicinfo.firstname}
            onChange={handleChange}
          />
        </div>
        <div className={genStyles.infoFieldContainer}>
          <span className={genStyles.inputLabel}>Last Name: </span>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            data-custom-value="basicinfo"
            className={genStyles.inputField}
            value={basicinfo.lastname}
            onChange={handleChange}
          />
        </div>
        <div className={genStyles.infoFieldContainer}>
          <span className={genStyles.inputLabel}>Professional Title: </span>
          <input
            type="text"
            placeholder="Professional Title"
            name="profTitle"
            data-custom-value="basicinfo"
            className={genStyles.inputField}
            value={basicinfo.profTitle}
            onChange={handleChange}
          />
        </div>
        <div className={genStyles.infoFieldContainer}>
          <span className={genStyles.inputLabel}>About you: </span>
          <textarea
            placeholder="Give a brief description about your self"
            name="aboutYou"
            data-custom-value="basicinfo"
            className={genStyles.inputFieldTextArea}
            value={basicinfo.aboutYou}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );

  return (
    <div>
      <h3>Basic Information</h3>
      {fieldContent}
    </div>
  );
}

export default BasicInfoField;
