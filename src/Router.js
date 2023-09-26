/* eslint-disable no-unused-vars */
import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/home page/home'
import ProductPage from './pages/product page/product'

function Router() {
    const routes = useRoutes([
        { path: '/', element:<HomePage/> },
        { path: '/productdetails', element:<ProductPage/> },
    ])
  return (
    routes
  )
}

export default Router