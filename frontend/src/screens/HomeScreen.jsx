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
    Button,
    Container
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
        <div className="home container">
          <h1 className="text-center mb-4">Todo List</h1>
        

          
          {state.isLoading ? (
        <Loader />
      ) : (
        <> 
       
        <Form className="form-inline" onSubmit={handleSubmit}>


            <Form.Group controlId="toDoItem">
            <InputGroup >
                <Form.Control
                    className =" mb-4"
                    type="text"
                    onChange={handleChange}
                    name="todoItem"
                    placeholder="Enter New Todo Item"
                    value={input}
                    required
                />
                 
                  <Button  variant= "outline-success ms-2 mb-4" type="submit" disabled={state.isLoading}>Add Item</Button>
                  
                  </InputGroup>
            </Form.Group>
            
            
        </Form>  
      
       
        
        <div>

       
        {state.todoItems?.map((todoItem) => {
          return (
          
                
                  
            <Card>
              <Card.Body>
                <TodoItem key = {todoItem.id} todoItem={todoItem} /> 
                </Card.Body>
            </Card>
                      
          );
        })
        }
       
       
        </div>  
        </>   
      )}
      
  
        </div>
        
      
    
      )
    }

export default HomeScreen;
