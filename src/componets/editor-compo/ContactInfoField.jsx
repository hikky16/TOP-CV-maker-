function ContactInfoField({ contactinfo, handleChange }) {
  return (
    <form>
      <h1>Contact Information</h1>
      <fieldset>
        <div>
          <span>Email Address: </span>
          <input
            type="text"
            placeholder="Email"
            name="email"
            data-custom-value="contactinfo"
            className="input-field"
            value={contactinfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Phone Number: </span>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            data-custom-value="contactinfo"
            className="input-field"
            value={contactinfo.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Address: </span>
          <input
            type="text"
            placeholder="address"
            name="location"
            data-custom-value="contactinfo"
            className="input-field"
            value={contactinfo.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Website: </span>
          <input
            type="text"
            placeholder="Website"
            name="website"
            data-custom-value="contactinfo"
            className="input-field"
            value={contactinfo.website}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default ContactInfoField;
