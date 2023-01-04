import React from "react"
import { IMenu, IMenuItem } from "../../Interfaces/React/Body"

export const NavMenu = (props: IMenu) => {

    const [links, setLinks] = React.useState(props.links)

    const goToLink = (id: string) => {
        document.getElementById(id).scrollIntoView()

        const newLinks: Array<IMenuItem> = []

        links.forEach(link => {
            newLinks.push({
                ...link,
                active: link.id === id
            })
        })

        setLinks(newLinks)
    }

    return (
        <div id="menu">
            {links.map(link =>
                <span key={link.id} className={link.active ? 'active' : null} onClick={() => goToLink(link.id)}>
                    {link.name}
                </span>
            )}
        </div>
    )
}
