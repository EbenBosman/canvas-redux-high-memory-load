import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Stage, Layer } from "react-konva";

import API from "./utilities/API";

import { addLorumChunks, resetLorumChunks } from "../actions/canvas";

import SomeText from "./canvas/SomeText";
import SmallSquare from "./canvas/SmallSquare";
import LargerSquare from "./canvas/LargerSquare";

const canvasHeight = 4000;
const canvasWidth = 4000;

class CanvasPage extends React.Component {
  componentDidMount() {
    const self = this;
    API()
      .get("https://baconipsum.com/api/?type=meat-and-filler&paras=100")
      .then(response => {
        if (response && response.status === 200)
          self.props.dispatch(addLorumChunks(response.data));
      });
  }
  componentWillUnmount() {
    this.props.dispatch(resetLorumChunks());
  }
  getSomeTextElements = () => {
    let someText = [];
    for (var n = 0; n < 100; n++) {
      someText = [
        ...someText,
        <SomeText
          key={`st${n}`}
          x={Math.random() * canvasWidth}
          y={Math.random() * canvasHeight}
          canvasHeight={canvasHeight}
          color="blue"
        >
          {`Some Text ${n}`}
        </SomeText>
      ];
    }
    return someText;
  };
  getLargeSquareElements = () => {
    let largeSquares = [];
    for (var n = 0; n < 5; n++) {
      largeSquares = [
        ...largeSquares,
        <LargerSquare
          key={`ls${n}`}
          x={Math.random() * canvasWidth}
          y={Math.random() * canvasHeight}
        />
      ];
    }
    return largeSquares;
  };
  getSmallSquareElements = () => {
    let smallSquares = [];
    for (var n = 0; n < 500; n++) {
      smallSquares = [
        ...smallSquares,
        <SmallSquare
          key={`ss${n}`}
          x={Math.random() * canvasWidth}
          y={Math.random() * canvasHeight}
        />
      ];
    }
    return smallSquares;
  };
  getSomeTextLorumElements = () => {
    if(!this.props.canvas || !this.props.canvas.lorum_chunks || this.props.canvas.lorum_chunks.length <= 0)
      return null;

      console.log(this.props.canvas)

    let lorumChunks = [];
    for (var n = 0; n < this.props.canvas.lorum_chunks.length - 1; n++) {
      lorumChunks = [
        ...lorumChunks,
        <SomeText
          key={`lc${n}`}
          x={0}
          y={Math.random() * canvasHeight}
          canvasHeight={canvasHeight}
          color="#015c05"
        >
          {this.props.canvas.lorum_chunks[n]}
        </SomeText>
      ];
    }
    return lorumChunks;
  };
  render() {
    return (
      <div className="App">
        <Link to="/">Back</Link>
        <h2>Let's overload that canvas</h2>

        <div className="page-container">
          <div className="graph-container-wrapper">
            <div className="graph-container">
              <div
                style={{
                  height: "100%",
                  position: "relative",
                  backgroundColor: "#ddd"
                }}
              >
                <div
                  className="canvas-scrollbar"
                  style={{
                    height: "100%",
                    overflow: "auto",
                    backgroundColor: "#ddd"
                  }}
                >
                  <div
                    className="canvas-scrollbar"
                    style={{
                      height: "100%",
                      overflow: "auto"
                    }}
                  >
                    <Stage
                      style={{
                        backgroundColor: "white",
                        position: "inline-block"
                      }}
                      width={canvasWidth}
                      height={canvasHeight}
                    >
                      <Layer>
                        {this.getSomeTextElements()}
                      </Layer>
                      <Layer>
                        {this.getLargeSquareElements()}
                        {this.getSmallSquareElements()}
                      </Layer>
                      <Layer>
                        {this.getSomeTextLorumElements()}
                      </Layer>
                    </Stage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    canvas: state.canvas
  };
};

export default connect(mapStateToProps)(CanvasPage);
