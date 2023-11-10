import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

import { TASKS_URL } from '../constants';


//fetchTodos
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    /*const res = await fetch(`/api/todoItems`);
    console.log(res.json)
    return res?.json();*/
    try {
        const response = await axios.get(TASKS_URL);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return isRejectedWithValue(error.response);
      }

 });

 //fetchTodo
export const fetchTodo = createAsyncThunk("fetchTodo", async (id) => {

  try {
      const response = await axios.get(TASKS_URL + `/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response);
    }

});
 //createTodo
 export const addTodo = createAsyncThunk("createTodo", async (data) => {
  console.log(data);
  try {
      const response = await axios.post(TASKS_URL, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response);
    }

});
 //updateTodo
 export const updateTodo = createAsyncThunk("updateTodo", async (data) => {

  try {
      const response = await axios.put(TASKS_URL + `/${data.id}`, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response);
    }

});

 //deleteTodo
 export const deleteTodo = createAsyncThunk("deleteTodo", async (id) => {

  try {
      const response = await axios.delete(TASKS_URL + `/${id}`);
      //task deleted
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response);
    }

});

