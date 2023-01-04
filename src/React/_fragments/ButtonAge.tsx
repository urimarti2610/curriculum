import "./ButtonAge.scss"
import {IButtonAge} from "../../Interfaces/React/Fragments"
import React from "react"

export const ButtonAge = (props: IButtonAge) => {
  const [open, setOpen] = React.useState(props.open)
  const [age] = React.useState(props.age)

  const switchOpen = () => setOpen(!open)

  const getAge = () => (open ? <span className="age">{age} años</span> : "")
  const getButton = () => (
    <span className="btn btn-primary float-right" onClick={() => switchOpen()}>
      {open ? "Ocultar Años" : "Mostrar Años"}
    </span>
  )

  return (
    <React.Fragment>
      {getAge()}
      {getButton()}
    </React.Fragment>
  )
}
