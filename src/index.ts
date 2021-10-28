import './style/style.scss'

import { setPerson } from "./Controllers/Person";
import ReactDOM from "react-dom";
import React from "react";
import { Person } from "./React/Person/Person";
import { personData } from './Data/PersonData';

const el = document.getElementById("Person");
ReactDOM.render(React.createElement(Person, { user: setPerson(personData) }), el);