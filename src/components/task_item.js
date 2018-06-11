import React from 'react';

const TaskItem = (props) => {
  const removeTask = {
    props.removeTask(props.key);
  }

  return (
    <li 
      key={props.index} 
      className="taskListing" 
      onClick={() => this.removeTask(key)}>
      {props.item}
    </li>
  );
};

export default TaskItem;
