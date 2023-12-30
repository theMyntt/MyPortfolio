import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "./main.scss"
import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import MasterPage from './masterpage'
import Contact from './pages/Contact'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "project",
    element: <Projects />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MasterPage />
    <RouterProvider router={routes} id="RouterProvider" />
  </React.StrictMode>,
)
