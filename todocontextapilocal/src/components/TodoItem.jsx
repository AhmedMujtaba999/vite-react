import React from "react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";
function TodoItem({ todo }) {
     
    const [ isTodoEditable, setIsTodoEditable] = useState(false) // state to manage the edit mode of the todo item and we use the useState hook to manage the state of the edit mode
    const [todoMsg, setTodoMsg] = useState(todo.todo) // state to manage the value of the input field in the edit mode and we use the useState hook to manage the state of the input field in the edit mode
    const {updatedTodo, deleteTodo, toggleComplete} = useTodo() // using the useTodo hook to get the values from the context and we can use the values in the todo item component to update, delete and toggle the completed status of the todo item

     const editTodo = () => {
        updatedTodo(todo.id, { ...todo, todo: todoMsg }) // calling the updatedTodo function from the context and passing the id of the todo item and the updated todo object to it which will update the todo item in the list of todos in the context
        setIsTodoEditable(false) // setting the edit mode to false after updating the todo item
    }

    const togglecompleted =()=> {
        toggleComplete(todo.id) // calling the toggleComplete function from the context and passing the id of the todo item to it which will toggle the completed status of the todo item in the list of todos in the context
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={togglecompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-500 hover:bg-purple-600 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-blue-500 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
