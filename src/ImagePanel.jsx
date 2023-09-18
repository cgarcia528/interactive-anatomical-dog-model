import React, { Component } from "react";
import startingpic from "./images/startingpic.png";
import "./App.css";

class ImagePanel extends Component {
  /**
   * Name: onClick
   * Use: Handles devices with touchscreen input. It simulates the normal hover function used for
   *      non-touch screen devices and simulates the onLeave (exiting hover) function after a timeout.
   * **/
  onClick = (e, touchScreen, onEnter, onLeave) => {
    if (touchScreen) {
      onEnter(e);
      setTimeout(function () {
        onLeave();
      }, 5000);
    }
  };
  render() {
    const { mostRecentContainer, onEnter, onLeave } = this.props;
    const touchScreen = window.ontouchstart !== undefined;

    return (
      <div className="image-container">
        <svg
          version="1.1"
          width="60%"
          height="20%"
          viewBox="0 0 4204 3294"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <image
            className="opacity-50 img layered-img"
            preserveAspectRatio="none"
            xlinkHref={startingpic}
          />
          <g>
            <image
              key={"section_active_image"}
              className="img layered-img"
              preserveAspectRatio="none"
              xlinkHref={mostRecentContainer.imageName}
            />
            ,
            {mostRecentContainer.textField[0].array.map((el) => (
              <g key={el.id} className="full-group">
                <path
                  id={el.id}
                  key={el.id}
                  d={el.path}
                  onMouseEnter={(e) => onEnter(e, null)}
                  onMouseLeave={onLeave}
                  onClick={(e) =>
                    this.onClick(e, touchScreen, onEnter, onLeave)
                  }
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
