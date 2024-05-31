import React from "react";
import { Form } from "./components/Form";

export const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 className="c-title">
        Contact <span>Me!</span>
      </h1>
      <div className="c-form-holder">
        <Form />
      </div>
    </div>
  );
};
