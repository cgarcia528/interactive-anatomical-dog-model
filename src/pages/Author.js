import NavigationBar from "../NavigationBar";
import React from "react";
import styled from "styled-components";

const GoBackButton = styled.button`
  background-color: #f8f9fa;
  color: black;
  border: 2px solid #000000;
`;

export default function Author(){
    return (
        <React.Fragment>
            <GoBackButton onClick={() => window.location = '/home'}>Go back?</GoBackButton>
            <h1>Author Page</h1>
        </React.Fragment>
    );
}