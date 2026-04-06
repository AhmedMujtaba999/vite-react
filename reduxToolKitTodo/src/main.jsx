import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux' //importing the Provider component from react-redux to provide the Redux store to the React application
import { store } from './app/store' //importing the Redux store from the store file to be used in the Provider component

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <App />
    </Provider>
 
)
