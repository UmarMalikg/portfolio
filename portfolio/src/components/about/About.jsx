import React from "react";
import { AboutDP } from "./components/AboutDP";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="a-dp-section">
        <AboutDP />
      </div>
      <div className="a-details-section">
        <h1 className="a-title">
          About <span>Me</span>
        </h1>
        <p className="a-description">
          A Higher-Order Component (HOC) is a pattern in React that allows you
          to enhance or extend the behavior of components by wrapping them with
          a higher-order function. In simple terms, a HOC is a function that
          takes a component as an input and returns a new component with
          additional features or behavior.
        </p>
        <button className="a-read-more-btn">Read More</button>
      </div>
    </div>
  );
};
