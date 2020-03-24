import React from "react";

export default function InputItem({ data, handleChange, idx }) {
  const { text, status } = data;

  return (
    <div className="form_item">
      <p className="input_text">{text}</p>
      <div className="radio">
      <p>
        <input
          id={`${idx}_true`}
          type="radio"
          name={idx}
          value={true}
          checked={status ===  true}
          onChange={handleChange}
          
        />
        <label htmlFor={`${idx}_true`}>Да</label>
      </p>
      <p>
        <input
          id={`${idx}_false`}
          type="radio"
          name={idx}
          value={false}
          checked={status === false}
          onChange={handleChange}
          
        />
        <label htmlFor={`${idx}_false`}>Нет</label>
      </p>
      </div>
    </div>
  );
}
