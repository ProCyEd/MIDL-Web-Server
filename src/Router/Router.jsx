import data from '../Data/routes.json'
import React from 'react'
import PageBuilder from '../Page Build Tool/PageBuilder';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Router() {
  console.log(data.routes)

  const routes = data.routes.map((route, key) => (
    <Route path={route.path} element={<PageBuilder pageTitle={route.page}></PageBuilder>} key={key}>{route.path}</Route>
  ))

  return (
    <BrowserRouter>
    <Routes>
      {routes}
    </Routes>
    </BrowserRouter>
  )

}


  