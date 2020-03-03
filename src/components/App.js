import React, { Component } from "react";
import './app.scss';
import Task from "./Task";


class App extends Component {
  state = {
    tasks: [
      { id: 0, title: "Task list item 1", done: false },
      { id: 1, title: "Task list item 2", done: true },
      { id: 2, title: "Task list item 3", done: false },
    ]
  };

  doneTask = id => {
    const index = this.state.tasks.map( task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks
    });
  };
  deleteTask = id => {
    const index = this.state.tasks.map( task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="app">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks,...doneTasks].map( task =>(
          <Task
            doneTask={()=>this.doneTask(task.id)}
            deleteTask={()=>this.deleteTask(task.id)}
            task={task}
            key={task.id} />
        ))}
      </div>
    );
  }
}

export default App;