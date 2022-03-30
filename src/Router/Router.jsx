import React, {useState, useEffect} from 'react'
import PageBuilder from '../Page Build Tool/PageBuilder';
import { retrieveModuleData } from '../Page Build Tool/Module Identification/RetrieveModuleData';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Router() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    setData(await retrieveModuleData("IOT"))
    setLoading(false)
  }, [])

  if(loading) {
    return <h1>Application is Loading...</h1>
  } else {

    const routes = data.routes.map((route, key) => (
      <Route path={route.path} element={<PageBuilder pageTitle={route.pageName} data={route.data}></PageBuilder>} key={key}>{route.path}</Route>
    ))

    return (
      <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
      </BrowserRouter>
    )
  }
}
