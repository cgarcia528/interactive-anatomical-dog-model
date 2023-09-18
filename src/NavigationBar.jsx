import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContainer = styled(Container)`
  color: #e3e3e3;
  justify-content: !important center;
`;

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
      <Navbar className="navBar test" expand="lg">
        <StyledContainer id="bootstrap-overrides">
          <Navbar.Brand className="me-3" id="title">
            <i>Dogs: an Atlas of Kinetic Anatomy</i> Virtual Demo
          </Navbar.Brand>
          <NavDropdown
            title="Muscles"
            id="basic-nav-dropdown"
            className="me-3"
            onSelect={this.handleButtonClick}
          >
            <NavDropdown.Item eventKey={"0"}>100s</NavDropdown.Item>
            <NavDropdown.Item eventKey={"1"}>200s</NavDropdown.Item>
            <NavDropdown.Item eventKey={"2"}>300s</NavDropdown.Item>
            <NavDropdown.Item eventKey={"3"}>400s</NavDropdown.Item>
            <NavDropdown.Item eventKey={"4"}>500s</NavDropdown.Item>
            <NavDropdown.Item eventKey={"5"}>600s</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="Forelimb/Hindlimb Medial"
            id="basic-nav-dropdown"
            className="me-3"
            onSelect={this.handleButtonClick}
          >
            <NavDropdown.Item eventKey={"6"}>
              Superficial Layer
            </NavDropdown.Item>
            <NavDropdown.Item eventKey={"7"}>Deep Layer</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Forelimb/Hindlimb Lateral"
            id="basic-nav-dropdown"
            className="me-3"
            onSelect={this.handleButtonClick}
          >
            <NavDropdown.Item eventKey={"8"}>Deep Layer</NavDropdown.Item>
            <NavDropdown.Item eventKey={"9"}>Middle Layer</NavDropdown.Item>
            <NavDropdown.Item eventKey={"10"}>
              Superficial Layer
            </NavDropdown.Item>
          </NavDropdown>
          <Nav className="authorNavOption">
            <Nav.Link as={Link} to="/author" className="authorNavOption">
              About the Author
            </Nav.Link>
          </Nav>
        </StyledContainer>
      </Navbar>
    );
  }
}
export default NavigationBar;
