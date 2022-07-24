import React, { Component } from "react";
import StartingPic from "./images/startingpic.png";

class ImagePanel extends Component {
  render() {
    return (
      <div className="image-container">
        <img
          src={StartingPic}
          className="visible starting-img"
          alt="string"
        ></img>

        {this.props.imageNameArray.map((object, index) => (
          <img
            key={index.toString()}
            src={
              this.props.buttonsArray[index]
                ? this.props.imageNameArray[index].imageName
                : undefined
            }
            className="opacity-50 img layered-img"
          ></img>
        ))}
      </div>
    );
  }
}

export default ImagePanel;
