import React from 'react'
import PageBuilder from '../Page Build Tool/PageBuilder';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Router({routeData, routingAddress}) {

    const routes = routeData.map((route, key) => (
      <Route path={route.path} element={<PageBuilder pageTitle={route.pageName} data={route.data} routeData={routingAddress + '/' + route.pageName}></PageBuilder>} key={key} >{route.path}</Route>
    ))

    return (
      <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
      </BrowserRouter>
    )
}
