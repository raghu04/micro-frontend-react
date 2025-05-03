import React from "react";
import { StylesProvider } from "@material-ui/core";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/pricing" exact component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
