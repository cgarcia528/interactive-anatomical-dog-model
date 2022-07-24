import React, { Component } from "react";
import ButtonPanel from "./ButtonPanel";
import { ButtonImageContainer } from "./images/ButtonImageContainer";
import ImagePanel from "./ImagePanel";

class ButtonImagePage extends Component {
  state = {
    buttonSelectedState: Array(ButtonImageContainer.length).fill(false),
  };

  handleClick = (event) => {
    const newButtons = this.state.buttonSelectedState.slice();
    newButtons[Number.parseInt(event.target.value, 10)] =
      !newButtons[Number.parseInt(event.target.value, 10)];
    this.setState({ buttonSelectedState: newButtons });
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

        <ButtonPanel
          buttonNameArray={ButtonImageContainer}
          buttonStateArray={this.state.buttonSelectedState}
          handleButtons={this.handleClick}
        ></ButtonPanel>

        <ImagePanel
          imageNameArray={ButtonImageContainer}
          buttonsArray={this.state.buttonSelectedState}
        ></ImagePanel>
      </div>
    );
  }
}

export default ButtonImagePage;
