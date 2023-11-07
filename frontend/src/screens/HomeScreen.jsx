import React, {useState} from "react";
import { useDispatch} from "react-redux";
import { addTodo } from "../slices/todoSlice";
import Tasks from "../components/Tasks";

const HomeScreen = () =>
    {
    
        const [input, setInput] = useState('');
        const dispatch = useDispatch()
       
    
        const handleChange = (e) => {
            setInput(e.target.value);
           
        }
        const handleSubmit = (e) => {
            e.preventDefault();       
            dispatch(addTodo(input));
            setInput('');
            
        }
    
      return (
        <>
            <form onSubmit = {handleSubmit}>
            <label htmlFor="item">
                Todo
            </label>
            <input onChange= {handleChange} name='item' type='text' placeholder="Wash the car" value={input} />
            <button  type='submit' value='submit'>
            Submit
            </button>
     
            </form>
            <Tasks />
            
        </>
        
    
    
      ) 
    }

export default HomeScreen;
