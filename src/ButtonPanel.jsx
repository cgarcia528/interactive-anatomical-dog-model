import React, { Component } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class ButtonPanel extends Component {
  render() {
    return (
      <div className="position-absolute mid-left">
        <ButtonToolbar className="btn-group-vertical">
          {this.props.buttonNameArray.map((buttonObject, index) => (
            <button
              key={index.toString()}
              className={"btn btn-primary btn-s mb-2"}
              value={index.toString()}
              onClick={this.props.handleButtons}
              style={{ fontSize: "18px" }}
            >
              {this.props.buttonNameArray[index].buttonName}
            </button>
          ))}
        </ButtonToolbar>
      </div>
    );
  }
}

export default ButtonPanel;
