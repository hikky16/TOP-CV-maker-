import "./editor-compo/css/ViewForm.css";

function ViewForm({ formData }) {
  const EdItemCreate = (edItem, index) => (
    <div key={index} className="education-info">
      <div className="ed-heading">
        <h2 className="ed-school">{edItem.school}</h2>
        <span className="ed-date">
          {formatDate(edItem.startDate)} -{" "}
          {edItem.onGoing ? "present" : formatDate(edItem.endDate)}
        </span>
      </div>
      <div>
        <span>{edItem.degree}</span>
        {edItem.addInfo ? (
          <ul>
            {edItem.addInfo.split(",").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );

  const edItemEmpty = (
    <div className="education-info">
      <div className="ed-heading">
        <h2 className="ed-school">Harvard University</h2>
        <span className="ed-date">January 2023 - January 2024</span>
      </div>
      <div>
        <span>BS in Computer Science</span>
        <ul>
          <li>Graduated with honors</li>
          <li>Suma Cum Laude</li>
        </ul>
      </div>
    </div>
  );

  const WorkItemCreate = (workItem, index) => (
    <div key={index} className="education-info">
      <div className="ed-heading">
        <h2 className="ed-school">{workItem.position}</h2>
        <span className="ed-date">
          {formatDate(workItem.startDate)} -{" "}
          {workItem.onGoing ? "present" : formatDate(workItem.endDate)}
        </span>
      </div>
      <div>
        <span>{workItem.company}</span>
        {workItem.duties ? (
          <ul>
            <span>
              <i>Duties</i>
            </span>
            {workItem.duties.split(",").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );

  const workItemEmpty = (
    <div className="education-info">
      <div className="ed-heading">
        <h2 className="ed-school">Computer Engineer</h2>
        <span className="ed-date">January 2023 - January 2024</span>
      </div>
      <div>
        <span>ACOR Engineering Services</span>
        <ul>
          <span>
            <i>Duties</i>
          </span>
          <li>Maintaining Servers</li>
          <li>Creating Website Using MERN stack</li>
        </ul>
      </div>
    </div>
  );

  const skillItemEmpty = (
    <>
      <h5>HTML</h5>
      <h5>CSS</h5>
      <h5>Javascript</h5>
    </>
  );

  const formatDate = (inputDate) => {
    const [year, month] = inputDate.split("-");
    const formattedDate = new Date(`${month}-01-${year}`);
    const monthName = formattedDate.toLocaleString("en-US", { month: "long" });
    return `${monthName} ${year}`;
  };

  return (
    <>
      <div className="info-container">
        <div className="basicinfo-container">
          <div className="basicinfo-fullname">
            <span>
              {formData.basicinfo.firstName
                ? formData.basicinfo.firstName
                : "Guest"}{" "}
              {formData.basicinfo.lastName
                ? formData.basicinfo.lastName
                : "Guest Lastname"}
            </span>
          </div>
          <div className="basicinfo-profTitle">
            <span>
              {formData.basicinfo.profTitle
                ? formData.basicinfo.profTitle
                : "Thes best Worker in the World"}
            </span>
            <div className="basicinfo-about">
              {formData.basicinfo.aboutYou
                ? formData.basicinfo.aboutYou
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto enim voluptatibus consequatur doloribus. Quibusdam consequatur laudantium tenetur minima iure eligendi praesentium iste fugiat saepe, error veniam fugit porro ea!"}
            </div>
          </div>
        </div>
        <div className="contactinfo-container">
          <div className="contactinfo-item">
            <i class="bi bi-envelope-fill"></i>{" "}
            <span>
              {formData.contactinfo.email
                ? formData.contactinfo.email
                : "guest@example.com"}
            </span>
          </div>
          <div className="contactinfo-item">
            <i class="bi bi-telephone-fill"></i>{" "}
            <span>
              {formData.contactinfo.phone
                ? formData.contactinfo.phone
                : "+63-999-9999-999"}
            </span>
          </div>
          <div className="contactinfo-item">
            <i class="bi bi-geo-alt-fill"></i>{" "}
            <span>
              {formData.contactinfo.location
                ? formData.contactinfo.location
                : "Purok 3, Bilwang, Isabel, Leyte"}
            </span>
          </div>
          <div className="contactinfo-item">
            <i class="bi bi-browser-chrome"></i>{" "}
            <span>
              {formData.contactinfo.website
                ? formData.contactinfo.website
                : "www.example.com"}
            </span>
          </div>
        </div>
      </div>
      <div className="lower-bottom">
        <div className="left-side">
          <div className="educationinfo-container">
            <h3>Educational Background</h3>
            <hr />
            {formData.education && formData.education.length > 0
              ? formData.education.map((edItem, index) =>
                  EdItemCreate(edItem, index)
                )
              : edItemEmpty}
          </div>
          <div className="workinfo-container">
            <h3>Work Experience</h3>
            <hr />
            {formData.work && formData.work.length > 0
              ? formData.work.map((workItem, index) =>
                  WorkItemCreate(workItem, index)
                )
              : workItemEmpty}
          </div>
        </div>
        <div className="right-side">
          <div>
            <h3>Skills and Trainings</h3>
            <hr />
            <div>
              {formData.skills && formData.skills.length > 0
                ? formData.skills.map((skillItem, index) => (
                    <h5 key={index}>{skillItem.skill}</h5>
                  ))
                : skillItemEmpty}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewForm;
