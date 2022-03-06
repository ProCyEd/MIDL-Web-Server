import data from '../Data/routes.json'
import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { componentRegistry } from './ComponentRegistry';

export default function Router() {
  console.log(data.routes)
  console.log(componentRegistry['App'])

  const routes = data.routes.map((route, key) => (
    <Route path={route.path} element={componentRegistry[route.component]} key={key}>{route.path}</Route>
  ))

  return (
    <BrowserRouter>
    <Routes>
      {routes}
    </Routes>
    </BrowserRouter>
  )

}


  