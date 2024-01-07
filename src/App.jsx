import "./App.css";
import Editor from "./componets/Editor";
import ViewForm from "./componets/ViewForm";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    basicinfo: {
      firstName: "Guest",
      lastName: "Awesome",
      profTitle: "Doctor of Social Media",
      aboutYou: "Hello I am the bestest there ever was",
    },
  });

  const handleBasicInfo = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((f) => ({
      ...f,
      basicinfo: { ...f.basicinfo, [name]: value },
    }));
  };

  return (
    <>
      <div className="editor-container">
        <Editor formData={formData} handleChange={handleBasicInfo} />
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
