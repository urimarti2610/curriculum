import React from "react"
import { IBody } from "../../Interfaces/React/Body"
import { ToggleTemplate } from "../_fragments/ToggleTemplate"
import { NavMenu } from './NavMenu'
import { Description } from "./Description"
import { Jobs } from "./Jobs"
import { Knowledges } from "./Knowledges"

export const Body = (props: IBody) => {
  const [bodyClass, setBodyClass] = React.useState(props.bodyClass)
  const [user] = React.useState(props.user)

  const updateBodyClass = () => setBodyClass(bodyClass === "" ? "theme-dark" : "")

  const menu = [
    {
      id: 'description',
      name: 'Sobre Mí',
      active: true,
    },
    {
      id: 'knowledges',
      name: 'Conocimientos',
      active: false,
    },
    {
      id: 'jobs',
      name: 'Trabajos',
      active: false,
    },
  ]

  return (
    <section className={bodyClass}  onScroll={console.log}>
      <ToggleTemplate parentClick={updateBodyClass} />
      <NavMenu links={menu} />
      <Description user={user} />
      <Knowledges knowledges={user.knowledge} />
      <Jobs jobs={user.jobs} />
    </section>
  )
}
