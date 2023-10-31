import React from "react";

const thingstodoarr = [
  "Select price per unit and number of units",
  "Will be published with date of offer",
];

const Sell = () => {
  return (
    <div>
      <h1>Sell your energy here</h1>
      <ul>
        {thingstodoarr.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sell;
