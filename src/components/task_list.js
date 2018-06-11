import React from 'react';

const TaskList = (props) => {
  const tasks = props.list.map((task, index) => {
    return <li 
      key={index} 
      className="taskListing" 
      onClick={() => props.removeTask(index)}>
      {task}
    </li>;
  });
  
  return (
    <ul>
      {tasks}
    </ul>
  );
};

export default TaskList;
