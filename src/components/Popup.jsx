import React from "react";
import "./Popup.scss";

export default function Popup(props) {
  return (
    <div
      onClick={() => props.onClose()}
      style={{ display: props.visible ? "block" : "none" }}
      className="popup-mask"
    >
      <div onClick={evt => evt.stopPropagation()} className="popup-box">
        {props.children}
      </div>
    </div>
  );
}
