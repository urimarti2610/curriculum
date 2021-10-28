import React from "react";
import IUser from "../../Interfaces/IUser";

export const Name = (props: IUser) => {
    const [user] = React.useState(props.user)

    return <React.Fragment>
        <h1>{user.name}</h1>
        <h2>{user.lastName}</h2>
    </React.Fragment>
}