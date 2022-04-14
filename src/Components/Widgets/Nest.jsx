import React from 'react';
import WidgetBuilder from './WidgetBuilder';
import { makeStyles } from '@mui/styles';
import data from '../Styles';

const useStyles = makeStyles({

    container: {
        width: '100%',
    },

    nestedContainer: {      
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', 
        gridGap: '1em',
        width: '100%',
    },

    divide: {
        width: '100%',
        height: '3px',
        backgroundColor: data.divideColor,
        marginTop: '1em',
    }
});

const Nest = (props) => {
    

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.divide}></div>
            <h1>{props.content.title}</h1>
            <div className={classes.nestedContainer}>
                {props.content.widgets.map((w, k) => {
                    return <WidgetBuilder widget={w.type} content={w.content} contentType={w.contentType} title={w.title} key={k}></WidgetBuilder>
                })}
            </div>
            <div className={classes.divide}></div>
        </div>
    )
}

export default Nest;
