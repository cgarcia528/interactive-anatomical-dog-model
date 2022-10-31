import React, { Component } from "react";
import StartingPic from "./images/startingpic.png";
import layer6 from "./images/layer6.png";
import musclesJson from "./muscles.json";

function handleHover(e) {
  const found = musclesJson.find((element) => {
    return element.id === e.target.id;
  });
  console.log(found.bodyName);
  console.log(found.action);
}

class ImagePanel extends Component {
  render() {
    return (
      // <div className="image-container">
      //   <img
      //     src={StartingPic}
      //     className="visible starting-img"
      //     alt="string"
      //   ></img>

      //   {this.props.imageNameArray.map((object, index) => (
      //     <img
      //       key={index.toString()}
      //       src={
      //         this.props.buttonsArray[index]
      //           ? this.props.imageNameArray[index].imageName
      //           : undefined
      //       }
      //       className="opacity-50 img layered-img"
      //     ></img>
      //   ))}
      // </div>

      <svg
        version="1.1"
        viewBox="0 0 4204 3294"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <image
          className="dog-image"
          width="4204"
          height="3294"
          preserveAspectRatio="none"
          xlinkHref={layer6}
        />
        <g>
          {musclesJson.map((el) => (
            <g key={el.id} className="full-group">
              <path
                id={el.id}
                key={el.id}
                d={el.path}
                onMouseEnter={handleHover}
              />
            </g>
          ))}
        </g>
      </svg>
    );
  }
}

export default ImagePanel;
