import genStyles from "./css/GeneralCss.module.css";

function ContactInfoField({ contactinfo, handleChange }) {
  return (
    <form>
      <h3>Contact Information</h3>
      <fieldset className={genStyles.fieldSet}>
        <div className={genStyles.infoFieldContainer}>
          <span className={genStyles.inputLabel}>Email Address: </span>
          <input
            type="text"
            placeholder="Email"
            name="email"
            data-custom-value="contactinfo"
            className={genStyles.inputField}
            value={contactinfo.email}
            onChange={handleChange}
          />
        </div>
        <div className={genStyles.infoFieldContainer}>
          <span className={genStyles.inputLabel}>Phone Number: </span>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            data-custom-value="contactinfo"
            className={genStyles.inputField}
            value={contactinfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className={genStyles.infoFieldContainer}>
          <span className={genStyles.inputLabel}>Address: </span>
          <input
            type="text"
            placeholder="Address"
            name="location"
            data-custom-value="contactinfo"
            className={genStyles.inputField}
            value={contactinfo.location}
            onChange={handleChange}
          />
        </div>
        <div className={genStyles.infoFieldContainer}>
          <span className={genStyles.inputLabel}>Website: </span>
          <input
            type="text"
            placeholder="Website"
            name="website"
            data-custom-value="contactinfo"
            className={genStyles.inputField}
            value={contactinfo.website}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default ContactInfoField;
