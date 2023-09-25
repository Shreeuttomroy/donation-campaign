import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"",
        element: <div>Home</div>
      },
      {
        path:"donation",
        element: <div>Donation</div>
      },
      {
        path:"statistics",
        element: <div>Statistic</div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
