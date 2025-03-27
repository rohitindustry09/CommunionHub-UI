// packages
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
// components
import HomeTab from './Home-Component/HomeTab'
import EventTab from './Event-Component/EventTab'
import Layout from './Layout-Compo/Layout'
//Styles
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomeTab /> },
      { path: '/events', element: <EventTab /> },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
