import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './layout.jsx'
import Home from './components/home/Home'
import About from './components/About/About'
import Contact from './components/contact/contact.jsx'
import Github, {githubinfoload} from './components/github/github.jsx'
import User from './components/User/User.jsx'


// Define your routes
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children: [
//             {
//                 path: "", // This matches the base '/' path
//                 element: <Home />
//             },
//             {
//                 path: "about", // This matches '/about'
//                 element: <About />
//             },
//             {
//                 path:"contact",
//                 element:<Contact/>
//             },
//             {   loader: {redirectIfUser}
//                 path:"github",
//                 element:<Github/>
//             },
//             {   
//                 path:"user/:userid", // this will return the page from url 
//                 element: <User/>
//             }
//         ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubinfoload}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
