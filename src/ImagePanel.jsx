import React, { Component } from "react";
import startingpic from "./images/startingpic.png";
import "./App.css";
import { ButtonImageContainer } from "./images/ButtonImageContainer";

class ImagePanel extends Component {
  render() {
    const {
      mostRecentContainer,
      onEnter,
      onLeave,
      currentMode,
      buttonSelectedState,
    } = this.props;
    return (
      <div className="image-container">
        <svg
          version="1.1"
          width="60%"
          height="20%"
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
            xlinkHref={startingpic}
          />
          {currentMode == "layer"
            ? [
                ButtonImageContainer.map((object, index) => (
                  <img
                    key={index.toString()}
                    src={
                      buttonSelectedState[index]
                        ? console.log(
                            ButtonImageContainer[index].imageName.toString()
                          )
                        : undefined
                    }
                    className="opacity-50 img layered-img"
                  ></img>
                )),
              ]
            : null}
          <g>
            {/*We should only render svg hotspot areas and a single image if the current mode is section mode*/}
            {currentMode == "section"
              ? [
                  <image
                    key={"section_active_image"}
                    className="opacity-50 img layered-img"
                    // width="4204"
                    // height="3294"
                    preserveAspectRatio="none"
                    xlinkHref={mostRecentContainer.imageName}
                  />,

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
                  )),
                ]
              : null}
          </g>
        </svg>
      </div>
    );
  }
}

export default ImagePanel;
