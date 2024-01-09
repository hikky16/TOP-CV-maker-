import "./App.css";
import Editor from "./componets/Editor";
import ViewForm from "./componets/ViewForm";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    basicinfo: {
      firstName: "",
      lastName: "",
      profTitle: "",
      aboutYou: "",
    },
    contactinfo: {
      email: "",
      phone: "",
      location: "",
      website: "",
    },
    education: [],
  });

  const handleInfoChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const dataset = e.target.dataset.customValue;

    setFormData((f) => ({
      ...f,
      [dataset]: { ...f[dataset], [name]: value },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formType = e.target.dataset.customValue;
    const fomData = new FormData(e.target);

    console.log(e.target);

    const recivedData = {};

    fomData.forEach((value, key) => {
      recivedData[key] = value;
    });

    console.log(recivedData);
    setFormData((f) => ({
      ...f,
      [formType]: [...f[formType], recivedData],
    }));

    console.log(formData);
  };

  return (
    <>
      <div className="editor-container">
        <Editor
          formData={formData}
          handleChange={handleInfoChange}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
      <hr />
      <hr />
      <div className="ccv-container">
        <ViewForm formData={formData} />
      </div>
    </>
  );
}

export default App;
