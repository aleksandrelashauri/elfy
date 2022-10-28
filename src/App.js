import "./App.css";
import Loyout from "./components/Loyout";

import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";
import routes from "./routes/routes";
function App() {
  const routing = useRoutes(routes());
  return <>{routing}</>;
}

export default App;
