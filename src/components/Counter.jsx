import React from "react";
import PropTypes from "prop-types";
import "./Counter.scss";

function Counter(props) {
  const { onRemove, value, onAdd } = props;
  return (
    <div className="counter-bar">
      <button
        type="button"
        onClick={() => onRemove()}
        className="counter-button"
      >
        {"-"}
      </button>
      <input className="counter-input" readOnly value={value} type="text" />
      <button type="button" onClick={() => onAdd()} className="counter-button">
        {"+"}
      </button>
    </div>
  );
}

Counter.defaultProps = {
  value: 0,
  onRemove() {},
  onAdd() {}
};

Counter.propTypes = {
  onRemove: PropTypes.func,
  value: PropTypes.number,
  onAdd: PropTypes.func
};

export default Counter;
