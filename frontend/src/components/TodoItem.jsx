import React from 'react';
import { useState } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import { deleteTodo, updateTodo } from '../slices/createAction';
import { useDispatch, useSelector } from 'react-redux';


const TodoItem = ({todoItem}) => {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(todoItem.isComplete);

    const removeTodo = (id) => {             
        dispatch(deleteTodo(id));                
      }
    const handleCheck = (event) => {
        //setChecked(!checked);
        
        dispatch(updateTodo({...todoItem, isComplete: !todoItem.isComplete}))
    }
  return (
  <div className='todo'>
    <Card className='my-3 p-3 rounded todo'>
        <Card.Body>
        <Card.Text as='h3'></Card.Text>
            <div class="form-check">
                <input onChange = {handleCheck} class="form-check-input" type="checkbox" value={checked} id="flexCheckDefault" defaultChecked = {checked} />
                <label class="form-check-label" for="flexCheckDefault">
                    <span style={{ textDecoration: todoItem.isComplete ? "line-through" : "" }}>{todoItem.task}</span>
                    <Button variant="outline-danger" onClick={() => removeTodo(todoItem.id)}>✕</Button>
                 </label>
            </div>
        </Card.Body>
    </Card>
            
      </div>
        
    )}
export default TodoItem;
