import React from "react";
import { Shape } from "react-konva";

class LargeSquare extends React.Component {
  drawScene = (context, shape) => {
    context.beginPath();
    context.moveTo(this.props.x, this.props.y);
    context.lineTo(this.props.x + 1000, this.props.y);
    context.lineTo(this.props.x + 1000, this.props.y + 1000);
    context.lineTo(this.props.x, this.props.y + 1000);
    context.closePath();
    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape);
  };
  render() {
    return (
      <Shape
        name={this.props.key}
        fill="red"
        stroke="black"
        strokeWidth={3}
        sceneFunc={(context, shape) => this.drawScene(context, shape) }
      />
    );
  }
}

export default LargeSquare;
