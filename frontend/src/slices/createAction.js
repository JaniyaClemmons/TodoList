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


