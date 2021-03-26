import React, { Component } from "react";

class Shanu extends Component {
  constructor() {
    super();
    this.state = {
      name: "sunil",
      age: 22,
    };
  }

  static getDerivedStateFromProps() {
    console.log("this is crt");
    return null;
  }
  componentDidMount() {
    console.log("this is mount");
  }
  shouldComponentUpdate() {
    console.log("this is update");
    return true;
  }
  componentWillUnmount() {
    console.log("this will unmount");
  }
  mybutton = (e) => {
    e.preventDefault();
    this.setState({
      name: "sun",
      age: 21,
    });
  };
  render() {
    return (
      <div>
        <p>This is paragraph</p>
        <p>{this.state.name}</p>
        <button onClick={(e) => this.mybutton(e)}>click</button>
      </div>
    );
  }
}
export default Shanu;
