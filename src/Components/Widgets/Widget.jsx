import React from 'react';
import styles from '../../../styles/widgets/widget.module.scss';
import Content from './Content';
import { makeStyles } from '@mui/styles';
import data from '../Styles';

const useStyles = makeStyles({

    container: {
        padding: data.padding,
        margin: 0,
        width: '100%',
        backgroundColor: data.backgroundColor,
        minHeight: 30,
        color: data.color,
        borderRadius: data.borderRadius,        
    },
});

const Widget = ({ title, content, contentType, routeData }) => {

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={styles.widgetTitleContainer}>
                <h1 className={styles.widgetTitle}>{title}</h1>
            </div>
            <div className={styles.widgetContent}>
                <Content routeData={routeData} content={content} contentType={contentType}></Content>
            </div>
        </div>
    )
}

export default Widget
