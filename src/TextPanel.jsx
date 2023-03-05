import React, { Component } from "react";

class TextPanel extends Component {
  render() {
    const { panelDisplayInfo, mostRecentContainer } = this.props;
    if (panelDisplayInfo) {
      return (
        <div className="card bg-primary text-light w-25 h-50 position-absolute top-0 end-0">
          <div className="card-body">
            <h5 className="card-title">
              {panelDisplayInfo != null
                ? panelDisplayInfo.bodyName
                : mostRecentContainer.textField[0].fallbackText}
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
      );
    }
  }
}
export default TextPanel;
