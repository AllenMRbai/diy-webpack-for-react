import React, { Component } from "react";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="carousel" style={{ margin: "15px 0" }}>
          <li className="carousel_item" />
        </ul>
        <ul className="menu-bar flex--around">
          {new Array(4).fill("").map((v, i) => {
            return <li key={i} className="menu-item" />;
          })}
        </ul>
        <ul className="product-container">
          {new Array(15).fill("").map((v, i) => {
            return <li key={i} className="product-item" />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}
