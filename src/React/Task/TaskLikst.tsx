import "./Task.scss";
import React from "react";
import { ITasks } from "../../Interfaces/React/Task";
import { TaskElement } from "./TaskElement";
import { getKnowledgeTypes } from "../../Helpers/KnowledgeType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const TaskList = (props: ITasks) => {
  const [tasks, setTasks] = React.useState(props.tasks);
  const taskTipes = getKnowledgeTypes();

  const swapActive = (type: any) =>
    setTasks(
      tasks.map((task, i) => {
        if (task.type === type) {
          task.open = !task.open;
        }
        return task;
      })
    );

  const renderTasks = () => {
    return taskTipes.map((type) => {
      const taskList = tasks.filter((v) => v.type === type);
      if (taskList.length) {
        const open = taskList[0].open
        const color = taskList[0].color
        return (
          <div className="task-group" key={type}>
            <span data-aos="fade-right"
              className={`title ${color}`}
              onClick={() => swapActive(type)}
            >
              {type} <FontAwesomeIcon icon={ open ? faChevronDown : faChevronUp} className={color}/>
            </span>
            {taskList.map((task, index) =>
              task.open ? (
                <TaskElement key={`${type}-${index}`} task={task} />
              ) : null
            )}
          </div>
        );
      }
    });
  };

  return <div className="task-list">{renderTasks()}</div>;
};
