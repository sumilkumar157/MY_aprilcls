import React, { Component } from "react";

class Sunil extends Component {
  constructor() {
    super();
    this.state = {
      name: "akhil",
      age: 21,
    };
  }

  static getDerivedstSateFromProps(state) {
    console.log("this is derived state from props");
    return null;
  }
  componentDidMount() {
    console.log("this is mount");
    return true;
  }
  shouldComponentUpdate() {
    console.log("this is update");
    return true;
  }
  componentWillUnmount() {
    console.log("tihs is um mount");
    return true;
  }

  myButttonClick = (e) => {
    e.preventDefault();
    this.setState({
      name: "l",
      age: 20,
    });
  };
  render() {
    return (
      <div>
        <h1>life </h1>

        <p>{this.state.name}</p>
        <button onClick={(e) => this.myButttonClick(e)}>
          once click enough{" "}
        </button>
      </div>
    );
  }
}
export default Sunil;
