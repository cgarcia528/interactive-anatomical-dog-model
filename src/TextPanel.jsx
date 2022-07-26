import React, { Component } from "react";

class TextPanel extends Component {
  render() {
    return (
      <div
        className="card bg-primary text-light w-25 h-50"
        style={{
          //   width: "auto",
          //   height: 600,
          float: "right",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Panel title</h5>
          <h6 className="card-subtitle mb-2 text-light">Panel subtitle</h6>
          <p className="card-text center">
            Lorem ipsum dolor sit amet, impedit honestatis no vix, mutat malorum
            ad vim. Eos alii sonet nullam ea. At vel ferri suscipit instructior,
            cu percipit splendide eum, eum noster sadipscing an. Vis stet putant
            detraxit eu, esse cibo vitae mel in, ex denique tincidunt abhorreant
            vim. An nostrud adolescens vis. Eu cum nonumy torquatos inciderint.
            Eruditi ceteros maluisset eu eos. Amet repudiandae qui ex, ne sit
            altera scripta, sed et eligendi dissentias. At erat homero voluptua
            sit, nostrud pericula sadipscing per cu, ei quo aeterno elaboraret
            disputationi.
          </p>
        </div>
      </div>
    );
  }
}
export default TextPanel;
