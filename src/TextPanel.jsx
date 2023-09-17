import React, { Component } from "react";
import "./App.css";

const fallback =
  "Please hover over the image to learn more about the canine anatomy functions";
class TextPanel extends Component {
  render() {
    const { panelDisplayInfo, mostRecentContainer } = this.props;
    return (
      <div className="centeringPanel">
        <div
          className="card bg-primary text-light position-absolute text-fill"
          id="screenSize"
        >
          <div className="card-body">
            <h5 className="card-title">
              {panelDisplayInfo != null ? panelDisplayInfo.bodyName : fallback}
            </h5>
            <h6 className="card-subtitle mb-2 text-light">
              {panelDisplayInfo != null
                ? panelDisplayInfo.id
                : mostRecentContainer.textField[0].fallbackText}
            </h6>
            <p className="card-text center">
              {panelDisplayInfo != null
                ? panelDisplayInfo.action
                : mostRecentContainer.textField[0].fallbackText}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default TextPanel;
