import { render } from "@testing-library/react";
import React, { Component } from "react";

class MyFirstClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      ramesh: "red",
    };
  }
  mybuttonclick = (e) => {
    e.preventDefault();

    this.setState({
      counter: this.state.counter + 2,
      ramesh: "sunil",
    });
  };
  render() {
    return (
      <div>
        <h1>This my first class component {this.state.counter}</h1>
        <h1>this is my 2nd class component {this.state.ramesh}</h1>
        <button onClick={(e) => this.mybuttonclick(e)}>onclic</button>
      </div>
    );
  }
}
export default MyFirstClassComponent;
