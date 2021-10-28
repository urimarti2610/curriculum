import "./ToggleTemplate.scss";
import React from "react";
import { IClick } from "../../Interfaces/React/Body";

export const ToggleTemplate = (props: IClick) => (
  <span className="btn" id="toggle" onClick={() => props.parentClick()}>
    Cambiar tema
  </span>
);
