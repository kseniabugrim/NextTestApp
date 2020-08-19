import React, { useState } from "react";
import styles from "./Searchbar.module.scss";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [tags, setTag] = useState([]);

  const handleInput = e => {
    const value = e.target.value;
    if (value.includes(", ")) {
      setTag([...tags, value.substring(0, value.length - 2)]);
      setInput("");
    } else {
      setInput(value);
    }
  };

  const handleErase = () => {
    setInput("");
    setTag([]);
  };

  return (
    <div className={styles.Searchbar}>
      <img src="/star.svg" alt="Save" className={styles.star} />
      <label className={styles.inputField}>
        {tags.map((tag, key) => (
          <span className={styles.tag} key={key}>
            {tag}
          </span>
        ))}
        <input
          className={styles.input}
          type="text"
          onChange={handleInput}
          value={input}
        />
      </label>
      <img
        src="/close.svg"
        alt="Remove"
        className={styles.close}
        onClick={handleErase}
      />
    </div>
  );
};

export default Searchbar;
