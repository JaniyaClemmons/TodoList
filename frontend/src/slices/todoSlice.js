 import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from "./createAction";

 const todoSlice = createSlice({
    name: "todo",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
     })
     builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });

export default todoSlice.reducer;

