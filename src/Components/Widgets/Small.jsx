import React from 'react';
import styles from '../../../styles/widgets/widget.module.scss';
import Content from './Content';

const Small = ({ title, content, contentType, routeData }) => {

    // console.log(contentType)

    return(
        <div className={styles.containerSmall}>
            <div className={styles.widgetTitleContainer}>
                <h1 className={styles.widgetTitle}>{title}</h1>
            </div>
            <div className={styles.widgetContent}>
                <Content routeData={routeData} content={content} contentType={contentType}></Content>
            </div>
        </div>
    )
}

export default Small
