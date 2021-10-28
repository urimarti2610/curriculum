import "./Task.scss";
import React from "react";
import { ITasks } from "../../Interfaces/React/Task";
import { TaskElement } from "./TaskElement";
import { getKnowledgeTypes } from "../../Helpers/KnowledgeType";

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
        return (
          <div className="task-group" key={type}>
            <span data-aos="fade-right"
              className={`title ${taskList[0].color}`}
              onClick={() => swapActive(type)}
            >
              {type}
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
