import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import { ButtonImageContainer } from "./images/ButtonImageContainer";
import StartingPic from "./images/startingpic.png";

class ButtonImagePage extends Component {
  state = {
    buttons: Array(ButtonImageContainer.length).fill(false),
  };

  handleClick = (event) => {
    const newButtons = this.state.buttons.slice();
    newButtons[Number.parseInt(event.target.value, 10)] =
      !newButtons[Number.parseInt(event.target.value, 10)];
    this.setState({ buttons: newButtons });
  };

  render() {
    return (
      <div>
        <p className="pTitle" align="center">
          {" "}
          <strong>
            Please click on one of the buttons to display a part of the Kerry
            Blue Terrier anatomy.{" "}
          </strong>
        </p>

        <div className="position-absolute mid-left">
          <ButtonGroup vertical>
            {this.state.buttons.map((buttonObject, index) => (
              <button
                key={(index + 1).toString()}
                className="btn btn-primary btn-s"
                value={index.toString()}
                onClick={this.handleClick}
              >
                {ButtonImageContainer[index].buttonName}
              </button>
            ))}
          </ButtonGroup>
        </div>

        <div className="image-container">
          <img
            src={StartingPic}
            className="visible starting-img"
            alt="string"
          ></img>

          {ButtonImageContainer.map((object, index) => (
            <img
              key={index.toString()}
              src={
                this.state.buttons[index]
                  ? ButtonImageContainer[index].imageName
                  : undefined
              }
              className="opacity-50 img layered-img"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}
export default ButtonImagePage;
