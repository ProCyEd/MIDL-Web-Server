import React, {useEffect, useState} from 'react'
import { retrieveModuleData } from './Module Identification/RetrieveModuleData'
import publish from '../Network/publish'

export default function PageBuilder({pageTitle, data}) {


  return (
    <>
      {console.log(data)}
      <h1>{pageTitle}</h1>
    </>
  )
}

