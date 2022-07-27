import React, { Component } from "react";

const fallbackText = "Please select a button to learn more";

class TextPanel extends Component {
  render() {
    return (
      <div
        className="card bg-primary text-light w-25 h-50"
        style={{
          float: "right",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Panel title</h5>
          <h6 className="card-subtitle mb-2 text-light">Panel subtitle</h6>
          <p className="card-text center">
            {this.props.buttonStateArray.includes(true)
              ? this.props.textFieldArray[this.props.recentlySelected].textField
              : fallbackText}
          </p>
        </div>
      </div>
    );
  }
}
export default TextPanel;
