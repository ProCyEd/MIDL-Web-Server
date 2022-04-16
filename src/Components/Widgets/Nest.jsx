import React from 'react';
import WidgetBuilder from './WidgetBuilder';
import { makeStyles } from '@mui/styles';
import data from '../Styles';

const useStyles = makeStyles({

    container: {
        width: '100%',
        border: '3px solid black',
    },

    title: {
        // height: 0,
        margin: 0,
        padding: 0,
    },

    nestedContainer: {      
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', 
        // flexWrap: 'wrap',
        gridGap: '1em',
        width: '100%',
    },
});

const Nest = (props) => {

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <h1 className={classes.title}>{props.content.title}</h1>
            <div className={classes.nestedContainer}>
                {props.content.widgets.map((w, k) => {
                    return <WidgetBuilder widget={w.type} content={w.content} contentType={w.contentType} title={w.title} key={k}></WidgetBuilder>
                })}
            </div>
        </div>
    )
}

export default Nest;
