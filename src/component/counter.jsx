import React from "react";
// import { useState } from 'react';
import counterHOC from "./highcomponetoperation";

const Counter = (props) => {
  // const [counter,setCounter] = useState(0);
  // const handleCounterIncrement = () => setCounter(counter+1);

  const { counter, handleIncrement } = props;

  return (
    <>
      <h1>Click Counter: {counter}</h1>
      <button onClick={handleIncrement}>Click Counter</button>
    </>
  );
};

const EnhancedClickCounter = counterHOC(Counter);

export default EnhancedClickCounter;
