import React from "react";
import { Shape } from "react-konva";

class SmallSquare extends React.Component {
  drawScene = (context, shape)  => {
    context.beginPath();
    context.moveTo(this.props.x + 10, this.props.y + 10);
    context.lineTo(this.props.x + 110, this.props.y + 10);
    context.lineTo(this.props.x + 110, this.props.y + 110);
    context.lineTo(this.props.x + 10, this.props.y + 110);
    context.closePath();
    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape);
  };
  render() {
    return (
      <Shape
        name={this.props.key}
        fill="#00D2FF"
        stroke="black"
        strokeWidth={3}
        sceneFunc={(context, shape) => this.drawScene(context, shape) }
      />
    );
  }
}

export default SmallSquare;
