import React from 'react';
import Widget from './Widget';
import Nest from './Nest';


const WidgetBuilder = ( props ) => {
    
    
    if(props.widget === "nest"){
        return <Nest content={props.content}></Nest>
    } else if(props.widget === "widget"){
        return <Widget content={props.content} title={props.title} contentType={props.contentType} containerTitle={props.containerTitle} routeData={props.routeData}></Widget>
    } else{
        return <div>{'Widget "' + props.widget + '" Not Found...'}</div>
    }
}

export default WidgetBuilder;
