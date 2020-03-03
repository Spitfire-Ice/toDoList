import React from "react";
import "./Task.scss";
import {MdClose, MdDone} from "react-icons/md";

const Task = ({ task, ...props}) => {
  const ActionBtn = () => (
    <div className='action-btn'>{
      task.done?
      <MdClose onClick={props.deleteTask} className='red'/>:
      <MdDone onClick={props.doneTask} className='green'/>
    }</div>);

  const className = 'task ' + (task.done?'task-done':'');

  return (
    <div className={className}>
      <p>{task.title}</p>
      <ActionBtn />
    </div>
  );
};

export default Task