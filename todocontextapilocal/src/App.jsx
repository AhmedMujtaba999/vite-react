import { useState, useEffect } from 'react' // importing usestate hook from react to manage the state of the todos in the app
import { TodoProvider } from './context' // importing the todo provider from the context folder to provide the values to the children components
import { TodoForm } from './components'
import { TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([]) // state (hoooks) to store the todods locally in the app
const addTodo=(todo)=>{
 setTodos((prevtodos)=>[{id:Date.now(), ...todo}, ...prevtodos]) // function to add a new todo to the list of todos and we use the spread operator to add the new todo to the existing list of todos
}
const updatedTodo=(id, todo)=>{
  setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? todo : prevTodo))
  // prev.map ((each val)=> {
    //  if(each val.id === id){
    // return todo
    }
const deleteTodo = (id) =>{
  setTodos((prev)=> prev.filter((todo)=> todo.id  !== id))
}

const toggleComplete = (id) =>{
  setTodos((prev)=> prev.map((prevtodo)=> prevtodo.id === id? {...prevtodo, completed:!prevtodo.completed}: prevtodo))
}



//Local storage 
//get item from local storage when the app loads and set it to the todos state
useEffect(()=>{
const todos =  JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length>0 ){
  setTodos(todos)
}
},[])
// set item in local storage whenever the todos state changes
useEffect (()=>{
localStorage.setItem("todos", JSON.stringify(todos))
},[todos])



  return (
    //todoprovider is used to provide the values to the children components and we wrap it around the components in order to use the values in the children components
    <TodoProvider value={{ // taking the values from provider and passing it to the children components
      todos, 
      addTodo,
      updatedTodo,
      deleteTodo,
      toggleComplete
    }}> 
     {/* below are the divs for basic tailwind css styling and the structure of the app  */}
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        {/* todoform component is called here */}
                        <TodoForm/> 

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* we loop through the todos state and render the todo item component
                         for each todo in the list of todos and we pass the todo object as a prop
                          to the todo item component */}
                          {todos.map((todo) =>(
                            <div key={todo.id}
                            className='w-full'>
                              <TodoItem todo={todo}/>
                            </div>
                          ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
