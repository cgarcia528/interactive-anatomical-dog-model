import React, { Component } from "react";
import { StartingPic } from "./images/imageImport";
import "./App.css";

class ImagePanel extends Component {
  render() {
    const { mostRecentContainer, onEnter, onLeave, currentMode } = this.props;
    return (
      <div className="image-container">
        <svg
          version="1.1"
          viewBox="0 0 4204 3294"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // className="image-container"
        >
          <image
            className="opacity-50 img layered-img"
            // width="4204"
            // height="3294"
            preserveAspectRatio="none"
            xlinkHref={StartingPic}
          />
          <image
            className="opacity-50 img layered-img"
            // width="4204"
            // height="3294"
            preserveAspectRatio="none"
            xlinkHref={mostRecentContainer.imageName}
          />
          <g>
            {/*We should only render svg hotspot areas if the current mode is section mode*/}
            {currentMode == "section" &&
              mostRecentContainer.textField[0].array.map((el) => (
                <g key={el.id} className="full-group">
                  <path
                    id={el.id}
                    key={el.id}
                    d={el.path}
                    onMouseEnter={(e) => onEnter(e)}
                    onMouseLeave={onLeave}
                  />
                </g>
              ))}
          </g>
        </svg>
      </div>
    );
  }
}

export default ImagePanel;
