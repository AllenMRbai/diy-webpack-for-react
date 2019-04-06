import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./NavBar.scss";

function NavBar(props) {
  const { style, navList, value, onChange } = props;

  return (
    <Fragment>
      <ul style={{ ...style }} className="nav-bar flex--around">
        {navList.map(item => {
          return (
            <li
              key={item.path}
              className={`nav-item ${value === item.path ? "active" : ""}`}
            >
              <a
                href={item.path}
                onClick={evt => {
                  evt.preventDefault();
                  onChange(item.path);
                }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div style={{ height: "40px" }} />
    </Fragment>
  );
}
NavBar.defaultProps = {
  style: {}
};

NavBar.propTypes = {
  style: PropTypes.object,
  navList: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NavBar;
