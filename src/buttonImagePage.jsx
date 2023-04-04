import React, { Component } from "react";
import ButtonPanel from "./ButtonPanel";
import { ButtonImageContainer } from "./images/ButtonImageContainer";
import ImagePanel from "./ImagePanel";
import TextPanel from "./TextPanel";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";

const PrinterButton = styled.button`
  background-color: "#f8f9fa";
  border: "2px solid #000000";
`;
class ButtonImagePage extends Component {
  state = {
    // The following section is beginnig values for section mode
    mostRecentButton: 0,
    mostRecentContainer: ButtonImageContainer[0],
    panelDisplay: null,
  };

  /**
   * Name: onHover
   * Use: When a g path is hovered in an svg, it's id corresponding to the dog bodypart (101,102...)
   *      is passed to the function through the event variable.
   *      The function loops through all the svg objects in the json to find the correct one with all the
   *      text information for the text panel and sets it as a state variable.
   * **/
  onHover = (e) => {
    const mostRecentContainerText = this.state.mostRecentContainer.textField;
    const found = mostRecentContainerText[0].array.find((element) => {
      return element.id === e.target.id;
    });
    let newState = Object.assign({}, this.state);
    newState.panelDisplay = found;
    this.setState(newState);
  };

  /**
   * Name: onLeave
   * Use: When a g path is hovered away from, the panel display variable is set to null.
   *      The text panel will later see the variable as null and instead display fallback
   *      text for that particular image.
   * **/
  onLeave = () => {
    let newState = Object.assign({}, this.state);
    newState.panelDisplay = null;
    this.setState(newState);
  };

  /**
   * Name: containerLookup
   * Use: Simple function that uses a selected button's current index value to find
   *      a button image container. This is used to label the buttons with their
   *      corresponding names.
   * **/
  containerLookup(buttonIndexId) {
    return ButtonImageContainer[buttonIndexId];
  }

  setSectionModeButtonClickState(selectedButtonIndex) {
    console.log("Resetting section state!");
    let recentButton = selectedButtonIndex;
    let newContainer = this.containerLookup(selectedButtonIndex);
    this.setState({
      mostRecentButton: recentButton,
      mostRecentContainer: newContainer,
    });
  }

  setLayerModeButtonClickState(selectedButtonIndex) {
    console.log("Setting layer state!");
    const newButtons = this.state.buttonSelectedState.slice();
    let recentButton;
    newButtons[selectedButtonIndex] = !newButtons[selectedButtonIndex];
    newButtons.includes(true)
      ? (recentButton = newButtons.lastIndexOf(true))
      : (recentButton = null);
    console.log("New array of buttons selected is: " + newButtons);

    this.setState({
      buttonSelectedState: newButtons,
      mostRecentButton: recentButton,
    });
  }

  /**
   * Name: handleButtonClick
   * Use: A button handler function which fetches the target value of the button
   *      which also happens to be the button's index in the ButtonImageContainer array(0,1,2...).
   *      This is used to keep track of the most recent button selected and the new info container
   *      which contains the button name, new image/svg name, and the new json file that will populate
   *      the text panel's text fields.
   * **/
  handleButtonClick = (event) => {
    // console.log(event);
    const selectedButtonIndex = event;
    this.setSectionModeButtonClickState(selectedButtonIndex);
  };

  onSectionMode = () => {
    let newState = Object.assign({}, this.state);
    newState.mostRecentButton = 0;
    newState.mostRecentContainer = ButtonImageContainer[0];
    newState.panelDisplay = null;
    this.setState(newState);
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

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="me-3">
              React-Bootstrap
            </Navbar.Brand>
            <NavDropdown
              title="Muscles"
              id="basic-nav-dropdown"
              className="me-3"
              onSelect={this.handleButtonClick}
            >
              <NavDropdown.Item href="#action/3.1" eventKey={"0"}>
                100s
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" eventKey={"1"}>
                200s
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey={"2"}>
                300s
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey={"3"}>
                400s
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey={"4"}>
                500s
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey={"5"}>
                600s
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Forelimb/Hindlimb Medial"
              id="basic-nav-dropdown"
              className="me-3"
              onSelect={this.handleButtonClick}
            >
              <NavDropdown.Item href="#action/3.2" eventKey={"6"}>
                Superficial Layer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey={"7"}>
                Deep Layer
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Forelimb/Hindlimb Lateral"
              id="basic-nav-dropdown"
              className="me-3"
              onSelect={this.handleButtonClick}
            >
              <NavDropdown.Item href="#action/3.2" eventKey={"8"}>
                Deep Layer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey={"9"}>
                Middle Layer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" eventKey={"10"}>
                Superficial Layer
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">About the Author</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <PrinterButton
          onClick={window.print}
          className="btn btn-info"
          style={{
            backgroundColor: "#f8f9fa",
            border: "2px solid #000000",
          }}
        >
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
        </PrinterButton>

        <ImagePanel
          mostRecentContainer={this.state.mostRecentContainer}
          buttonSelectedState={this.state.buttonSelectedState}
          onEnter={this.onHover}
          onLeave={this.onLeave}
        ></ImagePanel>

        <TextPanel
          mostRecentContainer={this.state.mostRecentContainer}
          panelDisplayInfo={this.state.panelDisplay}
        ></TextPanel>
      </div>
    );
  }
}

export default ButtonImagePage;
