import React from 'react';
import { useState } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import { deleteTodo, updateTodo } from '../slices/createAction';
import { useDispatch, useSelector } from 'react-redux';


const TodoItem = ({todoItem}) => {

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
        dispatch(updateTodo({...todoItem, task: newTask}))

    }
return (
  <div className='todo'>
    <Card className='my-3 p-3 rounded todo'>
        <Card.Body>
        <Card.Text as='h3'></Card.Text>
            <div className="form-check" style={viewMode}>
                <input onChange = {handleCheck} className="form-check-input" type="checkbox" value={checked} id="flexCheckDefault" defaultChecked = {checked} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    <span style={{ textDecoration: todoItem.isComplete ? "line-through" : "" }}>{todoItem.task}</span>
                    <Button onClick={handleEdit} name={todoItem._id} variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                    <Button variant="outline-danger" onClick={() => removeTodo(todoItem.id)}>
                    <i className='fas fa-trash'></i>
                    </Button>
                 </label>
            </div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="toDoItem">
                
                <Form.Control
                    style={editMode}
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    name="textInput"
                    placeholder={todoItem.task}
                    value={newTask}
                    required
                />
                
                    <Button type="submit" >Add Item</Button>
           
            </Form.Group>
            
        </Form>  

        </Card.Body>
    </Card>
            
      </div>
        
    )}
export default TodoItem;
