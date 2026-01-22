import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import App from '../pages/App'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'contact',
        Component: Contact
      }
    ]
  }
])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
