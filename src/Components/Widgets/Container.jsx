import React from 'react';
import WidgetBuilder from './WidgetBuilder';
import { makeStyles } from '@mui/styles';
import data from '../Styles';

const useStyles = makeStyles({

    container: {
        textAlign: 'center',
        padding: '1em',
        display: 'flex',
        flexWrap: 'wrap',
        gridGap: '1em',
        marginBottom: '3em',
        borderRadius: '.5em',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },

    titleContainer: {
        width: '100%',
        textAlign: 'center',
    },

    title: {
        fontSize: '2.5em',
        textTransform: 'uppercase',
    },

});

export default function Container({ container, routeData }) {

    const classes = useStyles();

    return (
        <div className={classes.container}>

            <div className={classes.titleContainer}>
                <h1 className={classes.title}>{container.title}</h1>
            </div>

            {container.widgets.map((w, k) => {
                return <WidgetBuilder widget={w.type} content={w.content} contentType={w.contentType} title={w.title} key={k} containerTitle={container.title} routeData={routeData + '/' + w.title}></WidgetBuilder>
            })}
            
        </div>
    )
}
