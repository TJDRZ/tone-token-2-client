import "../styles/Input.css";
import React, { useState, useEffect } from "react";

function Input(props) {
  const { type, name, placeholder, pattern, setNameChange, item } = props;

  const [text, setText] = useState("");
  const [textSet, setTextSet] = useState(false);

  useEffect(() => {
    setText(item.name);
    setTextSet(true);
  }, [item.name]);

  const update = (e) => {
    setText(e.target.value);
  };

  const submit = () => {
    setTextSet(true);
    setNameChange([text, item._id]); // Lifts text state up after submit
  };

  const edit = () => {
    setTextSet(false);
  };

  return (
    <div className="Input">
      {textSet ? (
        <div>
          <span>{text} </span>
          <button onClick={edit}>Edit Name</button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <label htmlFor={name}>{name}: </label>
          <input
            type={type}
            name={name}
            required
            maxLength="10"
            placeholder={placeholder}
            pattern={pattern}
            onChange={update}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Input;
