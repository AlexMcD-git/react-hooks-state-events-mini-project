import React from "react";
import CatOption from "./CatOption";

function NewTaskForm({categories, handleCategory, handleDetails, onTaskFormSubmit, details, cate}) {
  return (
    <form className="new-task-form" onSubmit={e=>onTaskFormSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetails} value={details}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory} value={cate}>
          {categories.filter(cat=>cat==="All"?false:true).map(cat=><CatOption key={cat} cat={cat}/>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
