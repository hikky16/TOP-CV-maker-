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
            value={basicinfo.profTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>About you: </span>
          <textarea
            placeholder="Give a brief description about your self"
            name="aboutYou"
            value={basicinfo.aboutYou}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default BasicInfoField;
