import React from "react";
import Details from "../components/Details";
import Loyout from "../components/Loyout";

import { WrongUrl } from "./wrongUrl";

const routes = () => [
  {
    path: "/",
    element: <Loyout />,
  },
  {
    path: "/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <WrongUrl />,
  },
];

export default routes;
