import React, { useState } from "react";
import styles from "./textGenerator.module.css";
import axios from "axios";

const EndpointAPI = "https://api.quotable.io/random";

// {"_id":"YylNTIZwjyg2","content":"He who angers you conquers you.","author":"Elizabeth Kenny","tags":["Famous Quotes"],"authorSlug":"elizabeth-kenny","length":31,"dateAdded":"2020-04-15","dateModified":"2023-04-14"}

const TextGenerator = () => {
  const [displayText, setDisplayText] = useState("");

  const getText = async () => {
    let paragraph = "";

    for (let i = 0; i < 6; i++) {
      const response = await axios.get(EndpointAPI);
      let new_paragraph = response.data.content;
      paragraph = paragraph + " " + new_paragraph;
      setDisplayText(paragraph);
    }
  };

  return (
    <div>
      <div>
        <article>
          <p>{displayText}</p>
        </article>
      </div>
      <button onClick={getText} className={styles.btn}>
        Get Started
      </button>
    </div>
  );
};

export default TextGenerator;
