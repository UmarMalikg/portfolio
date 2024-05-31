import React from "react";

export const Form = () => {
  return (
    <form className="c-form" type="submit">
      <div className="f-row">
        <input type="text" id="f-name" placeholder="Enter the first name" />
        <input type="text" id="l-name" placeholder="Enter the last name" />
      </div>
      <div className="f-row">
        <input
          type="number"
          id="m-num"
          placeholder="Enter your mobile number"
        />
        <input type="email" id="email" placeholder="Enter your Email" />
      </div>
      <div className="f-row">
        <textarea id="message" type="text" placeholder="Type Message" />
      </div>
      <div className="b-f-row">
        <button type="submit" id="s-form">
          Submit
        </button>
      </div>
    </form>
  );
};
