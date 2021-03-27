import { computeHeadingLevel } from "@testing-library/dom";
import React, { Component } from "react";

class MyCls extends Component {
  constructor() {
    super();
    this.state = {
      name: " yes",
      age: "dont know",
    };
  }
  myButton = (e) => {
    this.setState({
      name: "no",
      age: "i know ",
    });
  };

  render() {
    return (
      <div>
        <h>
          {this.state.name}
          {this.state.age}
        </h>
        <button onClick={(e) => this.myButton(e)}>yes</button>
      </div>
    );
  }
}
export default MyCls;
