import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categories, setCategories] = useState(CATEGORIES)
  const [active, setActive] = useState("All")
  const [taskList, setTaskList] = useState(TASKS)
  const [details, setDetails]=useState("")
  const [cate, setCate]= useState("Code")

  function handleDetails(e){
    setDetails(e.target.value)
  }
  function handleCategory(e){
    setCate(e.target.value)
  }
  function onTaskFormSubmit(e){
    e.preventDefault()
    setTaskList([...taskList, {text: details, category: cate}])
    setDetails("")
    setCate("Code")
  }

  function categorySelect(clickedCat){
    setActive(clickedCat)
  }
  function handleDelete(id){
    setTaskList(e=>e.filter(item=>{
      if (item.text === id){
        return false}
      else return true
    }))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter active={active} categories = {categories} categorySelect={categorySelect} />
      <NewTaskForm categories = {categories} onTaskFormSubmit={onTaskFormSubmit} handleDetails={handleDetails} handleCategory={handleCategory} details={details} cate={cate} />
      <TaskList tasks = {taskList} handleDelete={handleDelete} active={active}/>
    </div>
  );
}

export default App;
