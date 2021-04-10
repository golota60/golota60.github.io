import React from "react";
import "./App.scss";
import { Route, Switch } from 'react-router-dom';
import RootPage from "../pages/RootPage/RootPage";
import WorkPage from "../pages/WorkPage/WorkPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/*">
          <RootPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
