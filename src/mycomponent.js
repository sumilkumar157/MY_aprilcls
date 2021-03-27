import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      name: "sunil",
      age: 22,
    };
  }
  myButtonClick = (e) => {
    e.preventDefault();
    this.setState({
      name: "ramesh",
    });
  };

  render() {
    return (
      <div>
        <h1>Thisis my fisrt cls component {this.props.mydata}</h1>
        <p>{this.state.name}</p>
        <button onClick={(e) => this.myButtonClick(e)}>click here</button>
      </div>
    );
  }
}
export default MyComponent;
