import React from 'react';
import Large from './Large';
import Wide from './Wide';
import Small from './Small';
import styles from '../../../styles/widgets/container.module.scss';

export default function Container({ container, routeData }) {


    const Widget = ({ widget, content, title, contentType, containerTitle, routeData }) => {
        if(widget === "large"){
            return <Large content={content} title={title} contentType={contentType} containerTitle={containerTitle} routeData={routeData}></Large>
        } else if(widget === "wide"){
            return <Wide content={content} title={title} contentType={contentType} containerTitle={containerTitle} routeData={routeData}></Wide>
        } else if(widget === "small"){
            return <Small content={content} title={title} contentType={contentType} containerTitle={containerTitle} routeData={routeData}></Small>
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{container.title}</h1>
            </div>

            {container.widgets.map((w, k) => {
                return <Widget widget={w.type} content={w.content} contentType={w.contentType} title={w.title} key={k} containerTitle={container.title} routeData={routeData + '/' + w.title}></Widget>
            })}
        </div>
    )
}
