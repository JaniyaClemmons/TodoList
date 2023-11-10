import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { deleteTodo } from '../slices/createAction';
import { useDispatch, useSelector } from 'react-redux';


const TodoItem = ({todoItem}) => {

    const dispatch = useDispatch();
    
    const removeTodo = (id) => {             
        dispatch(deleteTodo(id));                
      }
  return (
    
    <div className='todo'>
            <Card className='my-3 p-3 rounded todo'>
              <Card.Body>
              <Card.Text as='h3'></Card.Text>
            <span style={{ textDecoration: todoItem.isComplete ? "line-through" : "" }}>{todoItem.task}</span>
            <Button variant="outline-danger" onClick={() => removeTodo(todoItem.id)}>✕</Button>
              </Card.Body>
            </Card>
            <div>
       
        
      </div>
      </div>
        
)}
export default TodoItem;
