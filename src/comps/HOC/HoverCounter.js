import React, { Component } from "react";
import NewComp from "./NewComp";

export class HoverCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <button
          onMouseOver={() => this.setState({ count: this.state.count + 1 })}
        >
          {this.props.value} Clicked {this.state.count} Times
        </button>
      </div>
    );
  }
}

export default NewComp(HoverCounter);
