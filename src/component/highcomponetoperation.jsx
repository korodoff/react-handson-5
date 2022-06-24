import React, { useState } from "react";

const counterHOC = (Component) => {
  const UpgradedComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter(counter + 1);

    return <Component counter={counter} handleIncrement={handleIncrement} />;
  };
  return UpgradedComponent;
};

export default counterHOC;
