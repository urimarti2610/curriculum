import IButtonAge from "../Interfaces/IButtonAge";
import React from 'react'

export const ButtonAge = (props: IButtonAge) => {
    const [open, setOpen] = React.useState(props.open)
    const [age] = React.useState(props.age)

    const switchOpen = () => setOpen(!open)

    const getAge = () => open ? <span className="age">{age}</span> : ''
    const getButton = () => <span className="btn btn-default" onClick={() => switchOpen()}>{open ? 'Ocultar' : 'Mostrar'}</span>

    return <React.Fragment>
        {getAge()} 
        {getButton()}
    </React.Fragment>
}