import React, { Component } from "react";
import StartingPic from "./images/startingpic.png";
import layer6 from "./images/layer6.png";
import musclesJson from "./muscles.json";
import DOGSVG from "./DOGSVG";

class ImagePanel extends Component {
  render() {
    return (
      <DOGSVG></DOGSVG>
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
      // <div className="image-container">
      //   <svg
      //     version="1.1"
      //     viewBox="0 0 4204 3294"
      //     xmlns="http://www.w3.org/2000/svg"
      //     xmlnsXlink="http://www.w3.org/1999/xlink"
      //   >
      //     <image
      //       className="opacity-50 img layered-img"
      //       width="4204"
      //       height="3294"
      //       preserveAspectRatio="none"
      //       xlinkHref={layer6}
      //     />
      //     <g>
      //       {musclesJson.map((el) => (
      //         <g key={el.id} className="full-group">
      //           <path
      //             id={el.id}
      //             key={el.id}
      //             d={el.path}
      //             onMouseEnter={handleHover}
      //           />
      //         </g>
      //       ))}
      //     </g>
      //   </svg>
      // </div>
    );
  }
}

export default ImagePanel;
