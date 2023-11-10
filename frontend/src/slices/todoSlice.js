 import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, fetchTodo, addTodo, deleteTodo, updateTodo } from "./createAction";

 const todoSlice = createSlice({
    name: "todo",
    initialState: {
     isLoading: false,
     todoItems: [],
     todoItem:{},
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todoItems = action.payload;
     })
     builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
     })
     builder.addCase(fetchTodo.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todoItem = action.payload;
      console.log(state.todoItem);
     })
     builder.addCase(fetchTodo.rejected, (state, action) => {
      state.isError = true;
     })
     builder.addCase(addTodo.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(addTodo.fulfilled, (state, action) => {    
      state.isLoading = false;
      state.todoItems.push(action.payload);
     })
     builder.addCase(addTodo.rejected, (state, action) => {
      state.isError = true;
     })
     builder.addCase(updateTodo.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(updateTodo.fulfilled, (state, action) => {    
      state.isLoading = false;
      console.log(action.payload);
      state.todoItems = state.todoItems.map((item) => item.id === action.payload.id ? (item.task === action.payload.task? {...item, isComplete: !item.isComplete} : item = action.payload): item);
      console.log(state.todoItems);
      //state.todoItems.push(action.payload);
      
     })
     builder.addCase(updateTodo.rejected, (state, action) => {
      state.isError = true;
     })
     builder.addCase(deleteTodo.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(deleteTodo.fulfilled, (state, action) => {    
      state.isLoading = false;
      state.todoItems = state.todoItems.filter((item) => item.id !== action.payload.id);
     })
     builder.addCase(deleteTodo.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

export default todoSlice.reducer;

