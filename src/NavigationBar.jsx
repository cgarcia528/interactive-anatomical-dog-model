import React, { Component } from "react";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";

class NavigationBar extends Component {
  /**
   * Name: handleButtonClick
   * Use: A button handler function which fetches the target value of the button
   *      which also happens to be the button's index in the ButtonImageContainer array(0,1,2...).
   *      This is used to keep track of the most recent button selected and the new info container
   *      which contains the button name, new image/svg name, and the new json file that will populate
   *      the text panel's text fields.
   * **/
  handleButtonClick = (event) => {
    const selectedButtonIndex = event;
    this.props.handler(selectedButtonIndex);
  };

  render() {
    return (
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
    );
  }
}
export default NavigationBar;
