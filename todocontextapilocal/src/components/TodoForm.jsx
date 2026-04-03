import React from 'react'
import { useState } from "react";
import { useTodo } from "../context/TodoContext";
function TodoForm() {
    const [todo, setTodo] = useState("") // state to store the value of the input field and we use the useState hook to manage the state of the input field
    const { addTodo } = useTodo()// using the useTodo hook to get the values from the context and we can use the values in the form component to add a new todo to the list of todos
   const add = (e) => {
    e.preventDefault() // preventing the default behavior of the form which is to refresh the page when we submit the form
  
    if(!todo) return

    addTodo({todo, completed: false}) // calling the addTodo function from the context and passing the new todo object to it which will add the new todo to the list of todos in the context
    setTodo("") // resetting the input field after adding the new todo to the list of todos
}
    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder=" Please write your Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-500 text-pink-400 shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

