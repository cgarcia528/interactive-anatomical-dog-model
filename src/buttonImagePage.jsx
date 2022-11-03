import React, { Component } from "react";
import ButtonPanel from "./ButtonPanel";
import { ButtonImageContainer } from "./images/ButtonImageContainer";
import ImagePanel from "./ImagePanel";
import TextPanel from "./TextPanel";

class ButtonImagePage extends Component {
  state = {
    // buttonSelectedState: Array(ButtonImageContainer.length).fill(false),
    // mostRecentButton: null,
    mostRecentButton: 0,
    mostRecentContainer: ButtonImageContainer[0],
    panelDisplay: null
  };

  /** 
 * Name: handleHover
 * Use: When a g path is hovered, it's id corresponding to the dog bodypart (101,102...)
 *      is passed to the function along with the json file corresponding to the current image.
 *      The function loops through all the json objects to find the correct one with all the 
 *      text information and returns it to display for the text panel.
 * **/
 onHover = (e) => {
  const mostRecentContainerText = this.state.mostRecentContainer.textField;
  const found = mostRecentContainerText[0].array.find((element) => {
    return element.id === e.target.id;
  });
  let newState = Object.assign({},this.state);
  newState.panelDisplay = found;
  this.setState(newState);
  // const objectInfo = {bodyName: found.bodyName, action: found.action, id: found.id}
  // return objectInfo;
  // console.log(found.bodyName); //This is panel title
  // console.log(found.action); //this is panel text
  // console.log(found.id); //this is panel subtitle
}

onLeave =() =>{
  let newState = Object.assign({},this.state);
  newState.panelDisplay = null;
  this.setState(newState);
}
  containerLookup(buttonIndexId){
    return ButtonImageContainer[buttonIndexId];
  }

  handleClick = (event) => {
    const selectedButtonIndex = Number.parseInt(event.target.value, 10);
    // const newButtons = this.state.buttonSelectedState.slice();
    let recentButton;
    let newContainer;
    // newButtons[selectedButtonIndex] = !newButtons[selectedButtonIndex];
    // newButtons.includes(true)
    //   ? (recentButton = newButtons.lastIndexOf(true))
    //   : (recentButton = null);
    recentButton = selectedButtonIndex;
    newContainer = this.containerLookup(selectedButtonIndex);

    this.setState({
      // buttonSelectedState: newButtons,
      mostRecentButton: recentButton,
      mostRecentContainer: newContainer,
    });
  };

  render() {
    return (
      <div>
        <p className="pTitle p1" align="center" style={{ fontSize: "18px" }}>
          {" "}
          <strong>
            Please click on the buttons to display parts of the dog anatomy.{" "}
          </strong>
        </p>
        <button onClick={window.print} className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-printer"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
          </svg>{" "}
          Print
        </button>

        <ButtonPanel
          buttonNameArray={ButtonImageContainer}
          // buttonStateArray={this.state.buttonSelectedState}
          mostRecentButton = {this.state.mostRecentButton}
          mostRecentContainer = {this.state.mostRecentContainer}
          handleButtons={this.handleClick}
        ></ButtonPanel>

        <ImagePanel
          imageNameArray={ButtonImageContainer}
          // imageNameArray={this.state.buttonSelectedState}
          mostRecentContainer = {this.state.mostRecentContainer}
          mostRecentButton = {this.state.mostRecentButton}
          onEnter = {this.onHover}
          onLeave = {this.onLeave}
        ></ImagePanel>

        <TextPanel
          textFieldArray={ButtonImageContainer}
          recentlySelected={this.state.mostRecentButton}
          mostRecentContainer = {this.state.mostRecentContainer}
          panelDisplayInfo = {this.state.panelDisplay}
          //TODO: Get the found data object to then display hover info
          // buttonStateArray={this.state.buttonSelectedState}
        ></TextPanel>
      </div>
    );
  }
}

export default ButtonImagePage;
