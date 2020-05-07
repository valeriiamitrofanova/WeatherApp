import React from "react";

const Weather = (props) => (
  <div className="infoWeath">
    {props.city && (
      <div>
        <p>
          City: {props.city}, {props.country}
        </p>
        <p>Temperature: {props.temp} &#8451;</p>
        <p>Pressure: {props.pressure}</p>
        <p>Sunset: {props.sunset}</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;
