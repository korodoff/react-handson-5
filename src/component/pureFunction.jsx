import React from "react";

const PureFunction = () => {
  return (
    <div className="pure">
      <h1>Pure Function</h1>
      <h3>
        A React component is considered pure if it renders the same output for
        the same state and props. For this type of class component, React
        provides the PureComponent base class. Class components that extend the
        React.PureComponent class are treated as pure components.
      </h3>
      ;
    </div>
  );
};

export default PureFunction;
