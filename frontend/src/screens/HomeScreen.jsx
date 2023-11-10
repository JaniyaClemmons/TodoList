import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
 import { fetchTodos } from '../slices/createAction';
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
        /*const handleSubmit = (e) => {
            e.preventDefault();       
            dispatch(addTodo(input));
            setInput('');
            
        }*/
                  
      return (
        <>
          {state.isLoading ? (
        <Loader />
      ) : (
        <>  
            <InputGroup className="mb-3">
              <FormControl
                placeholder="New Todo Item"
                aria-label="input text"
                onChange={handleChange}
              />
            </InputGroup>  
            
            <ListGroup variant="flush">
            
            {state.data?.map((todoItem) => {
                return (
                    <Col  key = {todoItem.id} >
                    <TodoItem todoItem={todoItem} /> 
                    </Col>
                );
            })
            }
            </ListGroup>
        </>   
      )}

        </>
        
      
    
      )
    }

export default HomeScreen;
