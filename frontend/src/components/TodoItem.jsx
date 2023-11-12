import React from 'react';
import { useState } from "react";
import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import { deleteTodo, updateTodo } from '../slices/createAction';
import { useDispatch, useSelector } from 'react-redux';


const TodoItem = ({todoItem }) => {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(todoItem.isComplete);
    
    const [editing, setEditing] = useState(false);
    const [newTask, setNewTask] = useState("");

    let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

    const removeTodo = (id) => {             
        dispatch(deleteTodo(id));                
      }
    const handleCheck = (event) => {
        //setChecked(!checked);
        
        dispatch(updateTodo({...todoItem, isComplete: !todoItem.isComplete}))
    }
    const handleEdit = () => {
        setEditing(true);

    }  
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        dispatch(updateTodo({...todoItem, task: newTask}));

    }
return (
  <>
            <div  className = "todo" style={viewMode}>
                <input onChange = {handleCheck} className="form-check-input  me-3" type="checkbox"  id={`${todoItem.id}-checkbox`} defaultChecked = {checked} />
                <label htmlFor={`${todoItem.id}-checkbox`} className="form-check-label" />
                    <span className="todo-text" style={{ textDecoration: todoItem.isComplete ? "line-through" : ""}}>{todoItem.task}</span>
                    <div className= "todo-butt" >
                    <Button onClick={handleEdit} name={todoItem._id} variant='outline-dark' >
                                            <i className='fas fa-edit'></i>
                                        </Button>
                    
                    <Button variant="outline-danger mx-2" onClick={() => removeTodo(todoItem.id)}>
                    <i className='fas fa-trash'></i>
                    </Button>
                    </div>
                 
            </div>
            <div>
            <Form style={editMode} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="toDoItem">
            <InputGroup >
                
                <Form.Control
                    
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    name="textInput"
                    placeholder={todoItem.task}
                    value={newTask}
                    required
                />
                
                    <Button className = "ms-2" variant = "outline-success" type="submit" >Add Edited Item</Button>
                    </InputGroup>
            </Form.Group>
            
        </Form>  

        </div>
            
      </>
        
    )}
export default TodoItem;
