import React, {useState} from "react";

import Task from "./Task";

function TaskList({ tasks, handleDelete, active }) {
  

  return (
    <div className="tasks">
      {tasks.filter(task =>(active==="All"?true:task.category===active?true:false)).map(item=><Task key={item.text} name={item.text} category={item.category} handleDelete={handleDelete}/>)}
    </div>
  );
}

export default TaskList;
