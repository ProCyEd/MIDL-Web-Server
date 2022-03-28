import React, {useEffect} from 'react'
import {retrieveModuleData} from './Module Identification/moduleRetriever'
import App from '../Pages/App';

export default function PageBuilder({pageTitle}) {
	
	const Switch = () => {
		if(pageTitle == 'App'){
			return <App></App>
		} else if(pageTitle == 'Boxes'){

		} else if(pageTitle == 'Settings'){

		} else if(pageTitle == 'Help'){

		} else {
			return <h1>Page Not Found</h1>
		}
	}

  return (
    <Switch></Switch>
  )
}
