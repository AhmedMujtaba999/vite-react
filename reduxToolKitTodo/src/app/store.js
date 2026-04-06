import {configureStore} from '@reduxjs/toolkit' //core redux toolkit function
import todoReducer from '../features/todo/todoSlice' //importing the todo reducer from the todo slice
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
}) //create the store and export it to be used in the app
