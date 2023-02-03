//import React from 'react';

const Task = ({task}) => {
  return (
    <div className = "task">
        <p> {task.text}</p>
        <p> {task.day} </p>
    </div>
  );
}

export default Task;
 