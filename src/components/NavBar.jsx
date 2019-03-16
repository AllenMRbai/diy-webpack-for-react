import React from "react";
import "./NavBar.scss";

export default function NavBar(props) {
  return (
    <React.Fragment>
      <ul style={{ ...props.style }} className="nav-bar flex--around">
        {props.navList.map(item => {
          return (
            <li
              key={item.path}
              className={`nav-item ${
                props.value === item.path ? "active" : ""
              }`}
              onClick={() => props.onChange(item.path)}
            >
              <a href={item.path} onClick={evt => evt.preventDefault()}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div style={{ height: "40px" }} />
    </React.Fragment>
  );
}
