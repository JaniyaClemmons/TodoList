import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
 import { fetchTodos, addTodo, deleteTodo } from '../slices/createAction';
import {
    Row,
    Col,
    Card,
    Form,
    FormControl,
    InputGroup,
    Badge,
    ListGroup,
    Button
  } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import TodoItem from "../components/TodoItem";


const HomeScreen = () =>
    {
        const dispatch = useDispatch();
        const state = useSelector((state) => state.todo);

        console.log("state", state);
        
        
    
        useEffect(()=> {
            dispatch(fetchTodos());

        },[])
        const [input, setInput] = useState('');
        
       
    
        const handleChange = (e) => {
            setInput(e.target.value);
           
        }
        const handleSubmit = (e) => {
            e.preventDefault(); 
            console.log(input)      
            dispatch(addTodo(input));
            setInput('');
            
        }
       
                  
      return (
        <>
          {state.isLoading ? (
        <Loader />
      ) : (
        <> 
        <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="toDoItem">
                <Form.Label>Todo Item</Form.Label>
                <Form.Control
                    type="text"
                    onChange={handleChange}
                    name="todoItem"
                    placeholder="New Todo Item"
                    value={input}
                    required
                />
            </Form.Group>
            <div className="mb-3">
                    <Button type="submit" disabled={state.isLoading}>Add Item</Button>
            </div> 
        </Form>  
      


       
        {state.todoItems?.map((todoItem) => {
          return (
      
                <TodoItem key = {todoItem.id} todoItem={todoItem} /> 
                      
          );
        })
        }
       
            
        </>   
      )}

        </>
        
      
    
      )
    }

export default HomeScreen;
