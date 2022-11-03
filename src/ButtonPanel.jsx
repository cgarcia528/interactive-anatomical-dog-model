import React, { Component } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class ButtonPanel extends Component {
  render() {
    const { buttonNameArray, handleButtons } = this.props;
    return (
      <div className="position-absolute mid-left">
        <ButtonToolbar className="btn-group-vertical">
          {/* This line of code doesn't work without buttonObject? Idk why*/}
          {buttonNameArray.map((buttonObject, index) => (
            <button
              key={index.toString()}
              className={"btn btn-primary btn-s mb-2"}
              value={index.toString()}
              onClick={handleButtons}
              style={{ fontSize: "18px" }}
            >
              {buttonNameArray[index].buttonName}
            </button>
          ))}
        </ButtonToolbar>
      </div>
    );
  }
}

export default ButtonPanel;
