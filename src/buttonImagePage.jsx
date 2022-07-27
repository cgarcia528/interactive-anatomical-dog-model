import React, { Component } from "react";
import ButtonPanel from "./ButtonPanel";
import { ButtonImageContainer } from "./images/ButtonImageContainer";
import ImagePanel from "./ImagePanel";
import TextPanel from "./TextPanel";

class ButtonImagePage extends Component {
  state = {
    buttonSelectedState: Array(ButtonImageContainer.length).fill(false),
    mostRecentButton: null,
  };

  handleClick = (event) => {
    const selectedButtonIndex = Number.parseInt(event.target.value, 10);
    const newButtons = this.state.buttonSelectedState.slice();
    let recentButton;
    newButtons[selectedButtonIndex] = !newButtons[selectedButtonIndex];
    newButtons.includes(true)
      ? (recentButton = selectedButtonIndex)
      : (recentButton = null);

    this.setState({
      buttonSelectedState: newButtons,
      mostRecentButton: recentButton,
    });
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

        <TextPanel
          textFieldArray={ButtonImageContainer}
          recentlySelected={this.state.mostRecentButton}
          buttonStateArray={this.state.buttonSelectedState}
        ></TextPanel>
      </div>
    );
  }
}

export default ButtonImagePage;
