import React from "react"
import { ITask } from "../../Interfaces/React/Task"
export const TaskElement = (props:ITask) => {
    const [task] = React.useState(props.task)
    return <div className={`task ${task.color}`}>
        <h5>{task.name}</h5>
        <p>{task.description}</p>
    </div>
}
