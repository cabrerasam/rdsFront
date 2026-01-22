import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../pages/App'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import Post from '../pages/post/Post'

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
      },
      {
        path: 'post/:id',
        Component: Post
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
