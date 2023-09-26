import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Donations from './components/Donations/Donations.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"",
        element: <Home/>,
        loader:()=> fetch("data.json"),
      },
      {
        path:"donation",
        element: <Donations/>
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
