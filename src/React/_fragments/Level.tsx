import "./Level.scss"
import { ILevel } from "../../Interfaces/React/Fragments"
import React from "react"

export const Level = (props: ILevel) => (
  <div className="level">
    <div
      className="percent"
      style={{ width: (props.level / 5) * 100 + "%" }}
    ></div>
  </div>
)
