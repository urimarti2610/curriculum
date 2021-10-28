import "./style/index.scss";

import { setPerson } from "./Controllers/Person";
import ReactDOM from "react-dom";
import React from "react";
import { personData } from "./Data/PersonData";
import { Body } from "./React/Pages/Body";

const user = setPerson(personData);
const bodyClass = "";

ReactDOM.render(
  React.createElement(Body, { user, bodyClass }),
  document.getElementById("app")
);
