import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Canvas with Redux</h1>
        <h2>
          An attempt to see what happens when redux is stressed with a high
          memory load
        </h2>
        <br />
        <Link to="/canvas">Go to Canvas</Link>
      </div>
    );
  }
}

export default Homepage;
