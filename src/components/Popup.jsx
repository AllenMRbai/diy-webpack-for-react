import React from "react";
import PropTypes from "prop-types";
import "./Popup.scss";

function Popup(props) {
  const { onClose, children, visible } = props;
  function maskKeyDown(evt) {
    if (evt.keyCode === 13) {
      onClose();
    }
  }
  return (
    <div
      onClick={() => onClose()}
      onKeyDown={maskKeyDown}
      role="button"
      tabIndex="0"
      style={{ display: visible ? "block" : "none" }}
      className="popup-mask"
    >
      <div
        role="button"
        tabIndex="0"
        onClick={evt => evt.stopPropagation()}
        onKeyDown={evt => evt.stopPropagation()}
        className="popup-box"
      >
        {children}
      </div>
    </div>
  );
}

Popup.defaultProps = {
  visible: false
};

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  visible: PropTypes.bool
};

export default Popup;
