import React from "react";
import TextGenerator from "../components/textGenerator/TextGenerator";
import FormInput from "../components/formInput/FormInput";

const HomePage = () => {
  return (
    <div>
      <h1 className="app-title">Typing Pro</h1>

      <div className="welcome-title">
        <h1>Welcome to the Typing Master!</h1>
      </div>

      <TextGenerator />
      <FormInput />

      <div>
        <button>Start Typing</button>
      </div>
      <div className="btn-restart hidden">
        <button>Restart</button>
      </div>
    </div>
  );
};

export default HomePage;
