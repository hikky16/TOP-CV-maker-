function BasicInfoField({ basicinfo, handleChange }) {
  return (
    <form>
      <h1>Basic Information</h1>
      <fieldset>
        <div>
          <span>First Name: </span>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            data-custom-value="basicinfo"
            className="input-field"
            value={basicinfo.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Last Name: </span>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            data-custom-value="basicinfo"
            className="input-field"
            value={basicinfo.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Professional Title: </span>
          <input
            type="text"
            placeholder="Professional Title"
            name="profTitle"
            data-custom-value="basicinfo"
            className="input-field"
            value={basicinfo.profTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>About you: </span>
          <textarea
            placeholder="Give a brief description about your self"
            name="aboutYou"
            data-custom-value="basicinfo"
            className="textarea-field"
            value={basicinfo.aboutYou}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default BasicInfoField;
