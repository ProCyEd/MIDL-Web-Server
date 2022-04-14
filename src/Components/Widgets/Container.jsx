import React from 'react';
import Large from './Large';
import Widget from './Widget';
import Small from './Small';
import styles from '../../../styles/widgets/container.module.scss';
import WidgetBuilder from './WidgetBuilder';

export default function Container({ container, routeData }) {
    return (
        <div className={styles.container}>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{container.title}</h1>
            </div>

            {container.widgets.map((w, k) => {
                return <WidgetBuilder widget={w.type} content={w.content} contentType={w.contentType} title={w.title} key={k} containerTitle={container.title} routeData={routeData + '/' + w.title}></WidgetBuilder>
            })}
            
        </div>
    )
}
