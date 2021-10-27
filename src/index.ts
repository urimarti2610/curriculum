import './style/style.scss'

import { setOriol } from "./Data/Oriol";
import ReactDOM from "react-dom";
import React from "react";
import { Person } from "./React/Person";

const el = document.getElementById("Oriol");
ReactDOM.render(React.createElement(Person, { user: setOriol() }), el);