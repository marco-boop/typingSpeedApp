import React, { useState } from "react";
import TextGenerator from "../components/textGenerator/textGenerator";
import FormInput from "../components/formInput/FormInput";
import Results from "../components/results/Results";

const HomePage = () => {
  const [text, setText] = useState("this is text");
  const [input, setInput] = useState("this is input from parent");
  const [textImported, setTextImported] = useState(false);

  const getParagraph = (paragraph) => {
    setText(paragraph);
  };

  return (
    <div>
      <h1 className="app-title">Typing Pro</h1>

      <div className="welcome-title">
        <h1>Welcome to the Typing Master!</h1>
      </div>

      <TextGenerator
        getParagraph={getParagraph}
        textImported={textImported}
        setTextImported={setTextImported}
      />

      <FormInput
        text={text}
        input={input}
        setInput={setInput}
        textImported={textImported}
      />

      {/* <Results text={text} input={input} /> */}

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
