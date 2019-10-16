import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage";
import CanvasPage from "../components/CanvasPage";

const AppRouter = props => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/canvas" component={CanvasPage} />
    </Switch>
  </Router>
);

export default AppRouter;
