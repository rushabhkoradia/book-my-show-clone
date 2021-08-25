/*
import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { planet: "Earth" };
    console.log("I'm from constructor");
  }

  componentDidMount() {
    this.setState({ planet: "Jupiter" });
    console.log("I'm from ComponentDidMount");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("I'm from shouldComponentUpdate");
    console.log({ nextProp, nextState });
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("I'm from getSnapshotBeforeUpdate");
    console.log({ prevProp, prevState });
    return true;
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    console.log("I'm from render");
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}

export default User;

*/