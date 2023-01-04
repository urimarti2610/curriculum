import "./style/index.scss";

import { setPerson } from "./Controllers/Person";
import { createRoot } from 'react-dom/client';
import React from "react";
import { personData } from "./Data/PersonData";
import { Body } from "./React/Pages/Body";

const user = setPerson(personData);
const bodyClass = "";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(React.createElement(Body, { user, bodyClass }));
