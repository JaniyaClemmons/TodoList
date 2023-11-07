import {configureStore} from '@reduxjs/toolkit'
import todoSliceReducer from './slices/todoSlice'

export const store = configureStore({
    reducer: todoSliceReducer,
})