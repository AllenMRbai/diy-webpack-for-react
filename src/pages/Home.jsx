import React, { Fragment } from "react";
import { login } from "../lib/auth";

import "./Home.scss";

export default function Home() {
  console.log(login()); // eslint-disable-line

  return (
    <Fragment>
      <ul className="carousel" style={{ margin: "15px 0" }}>
        <li className="carousel_item" />
      </ul>
      <ul className="menu-bar flex--around">
        {new Array(4).fill("").map((v, i) => {
          // eslint-disable-next-line
          return <li key={i} className="menu-item" />;
        })}
      </ul>
      <ul className="product-container">
        {new Array(15).fill("").map((v, i) => {
          // eslint-disable-next-line
          return <li key={i} className="product-item" />;
        })}
      </ul>
    </Fragment>
  );
}
