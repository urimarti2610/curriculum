import "./Title.scss"
import { ITitle } from "../../Interfaces/React/Body"
import React from "react"

export const Title = (props: ITitle) => <h2 className="title-button">{props.title}</h2>
