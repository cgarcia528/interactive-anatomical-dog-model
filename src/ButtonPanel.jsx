import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

class ButtonPanel extends Component {
  render() {
    return (
      <div className="position-absolute mid-left">
        <ButtonGroup vertical>
          {this.props.buttonNameArray.map((buttonObject, index) => (
            <button
              key={index.toString()}
              className="btn btn-primary btn-s"
              value={index.toString()}
              onClick={this.props.handleButtons}
            >
              {this.props.buttonNameArray[index].buttonName}
            </button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

export default ButtonPanel;
