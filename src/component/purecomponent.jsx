import React, { PureComponent } from "react";

class ComponentPure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Krut",
      // arr:[10]
    };
  }

  handleUpdate = () => {
    this.setState({ name: "Ruth" });
  };

  render() {
    return (
      <div>
        <h1>Name : {this.state.name}</h1>

        <button onClick={this.handleUpdate}>Click</button>
      </div>
    );
  }
}

export default ComponentPure;
