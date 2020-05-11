import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value,
    };
  }

  changeState = () => {
    this.setState((state) => {
      return { color: (state.color = "#333") };
    });
  };

  render() {
    return (
      <div
        className="cell"
        onClick={this.changeState}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
