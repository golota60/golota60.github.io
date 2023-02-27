import React from "react";
import RootPage from "../pages/RootPage/RootPage";
import { createBrowserRouter, Link } from "found";

const routeConfig = [
  {
    path: "/",
    Component: () => <RootPage />
  },
];

const BrowserRouter = createBrowserRouter({ routeConfig });

const App = () => {
  return (
    <BrowserRouter />
  );
};
export default App;
