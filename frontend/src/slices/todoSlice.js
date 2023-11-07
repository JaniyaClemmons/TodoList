import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
   //fetch tasks here
    tasks: [{id: 1, text: "Clean the kitchen"}]
}

export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => 
            //using JS Spread operators
            //payload a todo string
            {
               state.tasks = [...state.tasks, {id: nanoid(), text:action.payload}]
            },
            
            /*{
                const todo = {
                    id: nanoid(),
                    text: action.payload
                }
                state.tasks.push(todo)
            }*/
            removeTodo: (state, action) => 
            {
                //payload is an id
                state.tasks = (state.tasks).filter((todo) => todo.id !== action.payload)
               
            }
            
        }
        
    }

)

//export as actions so dispatch can use to talk to store (each method)
export const {addTodo, removeTodo} = todoSlice.actions

//export entire reducer so it can be wired up with the store
export default todoSlice.reducer