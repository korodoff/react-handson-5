import React from "react";
import CounterClick from "./highcomponetoperation";

const HighOrderComponent = () => {
  return (
    <div className="hoc">
      <h1>High Order Component</h1>
      <ul>
        <li>The Higher-Order component is simply called HOC..</li>
        <li>
          A higher-order component (HOC) is an advanced technique in React for
          reusing component logic.
        </li>
      </ul>
      <h3>Reason to use Higher-Order component:</h3>
      <ul>
        <li>Reason to use Higher-Order component:</li>

        <li>Get rid of copying the same logic in every component</li>

        <li>Reason to use Higher-Order component:</li>
        <li>Makes code more readable</li>
      </ul>
      <CounterClick />
    </div>
  );
};

export default HighOrderComponent;
