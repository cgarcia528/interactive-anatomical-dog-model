import React, { Component } from "react";

function changeOnHover(panelTitle, panelSubTitle, panelText){

}

class TextPanel extends Component {
  render() {
    const { 
      mostRecentContainer,
      panelTitle,
      panelSubTitle,
      panelText,
  } = this.props;
    return (
      <div
        className="card bg-primary text-light w-25 h-50"
        style={{
          float: "right",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{panelTitle}</h5>
          <h6 className="card-subtitle mb-2 text-light">{panelSubTitle}</h6>
          <p className="card-text center">
            {/*If any button is activated, then the text panel should display the current image's text*/}
            {/* {this.props.buttonStateArray.includes(true)
              ? this.props.textFieldArray[this.props.recentlySelected].textField
              : fallbackText} */}
              {
                mostRecentContainer.textField[0].fallbackText
              }
          </p>
        </div>
      </div>
    );
  }
}
export default TextPanel;
