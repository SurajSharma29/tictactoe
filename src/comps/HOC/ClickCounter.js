import React, { Component } from "react";
import NewComp from "./NewComp";

export class ClickCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.props.value} Clicked {this.state.count} Times
        </button>
      </div>
    );
  }
}

export default NewComp(ClickCounter);
