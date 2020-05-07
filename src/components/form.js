import React from "react";

const Form = (props) => (
  <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="Your City"></input>
    <button>Get forecast</button>
  </form>
);

export default Form;
