import { useState } from "react";
import styles from "./formInput.module.css";

const FormInput = () => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textDisplay}>
          <h3>
            {/* Some text for the future */}
            {input}
          </h3>
        </div>
        <div className={styles.formField}>
          <form>
            <div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type Here"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
