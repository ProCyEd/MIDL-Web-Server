import React, {useEffect, useState} from 'react'
import { retrieveModuleData } from './Module Identification/RetrieveModuleData'

export default function PageBuilder({pageTitle}) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    setData(await retrieveModuleData(pageTitle))
    setLoading(false)
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <>
        {console.log(data)}
        <h1>{pageTitle}</h1>
      </>
      
    )
  }
}

