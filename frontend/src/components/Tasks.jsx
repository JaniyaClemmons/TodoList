import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../slices/todoSlice";

const Tasks = () => {
    
    const dispatch = useDispatch()
    const taskList = useSelector(state => state.tasks);
    
    const removeTask = (id) => {
        dispatch(removeTodo(id))
    }

  return (
    <>
    <h1>
        ToDo List 
    </h1>
    
        <ul>
            {taskList.map((task) => (
                <li key= {task.id}>
                    {task.text}
                    <button onClick={() => removeTask(task.id)}> Delete</button>
                </li>
            ))}
        </ul>    
    </>
)}
export default Tasks;
