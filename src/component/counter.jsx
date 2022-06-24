import React from "react";
import counterHOC from "./counterHOC";

const CounterClick = (props) => {
  const { counter, handleIncrement } = props;

  return (
    <>
      <h1>Click Counter: {counter}</h1>
      <button onClick={handleIncrement}>Click Counter</button>
    </>
  );
};

const EnhancedClickCounter = counterHOC(CounterClick, 2);

export default EnhancedClickCounter;
