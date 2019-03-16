import React from "react";
import "./Counter.scss";

export default function Counter(props) {
  return (
    <div className="counter-bar">
      <button onClick={() => props.onRemove()} className="counter-button">
        -
      </button>
      <input
        className="counter-input"
        readOnly
        value={props.value}
        type="text"
      />
      <button onClick={() => props.onAdd()} className="counter-button">
        +
      </button>
    </div>
  );
}
