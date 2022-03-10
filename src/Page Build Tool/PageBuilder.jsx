import React, {useEffect} from 'react'
import {retrieveModuleData} from './Module Identification/moduleRetriever'

export default function PageBuilder({pageTitle}) {

  return (
    <h1>{pageTitle}</h1>
  )
}

