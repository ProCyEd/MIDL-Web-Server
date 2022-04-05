import React from 'react';
import styles from '../../../styles/widgets/widget.module.scss';
import Content from './Content';

const Wide = ({ title, content, contentType }) => {
    return(
        <div className={styles.containerWide}>
            <div className={styles.widgetTitleContainer}>
                <h1 className={styles.widgetTitle}>{title}</h1>
            </div>
            <div className={styles.widgetContent}>
                <Content content={content} contentType={contentType}></Content>
            </div>
        </div>
    )
}

export default Wide
