import { createSlice, nanoid } from "@reduxjs/toolkit"; // importing createSlice function from redux toolkit to create a slice of the state and nanoid to generate unique ids for todos

const initialState = { // initial state of the todo slice
    todos: [{id: 1, text: "hello world"}]
}

//slice is reducer ka bada version hai nothing but a function

const todoSlice = createSlice({ 
      name : "todo",
      initialState, // there will be a initial state for every slice
      reducers:{
        addTodo:(state, action)=>{
            const todo ={
                id:nanoid(), // generate a unique id for the todo
                text: action.payload.text // use the payload from the action to set the todo text
            }
            state.todos.push(todo) // add the new todo to the todos array in the state
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
      } // have properties and functions to update the state
})