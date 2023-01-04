import './Page.scss'
import React from "react"
import { IChildren } from '../../Interfaces/React/Body'

export const Page = (props:IChildren) => <section className="page" id={props.id}>{props.children}</section>
