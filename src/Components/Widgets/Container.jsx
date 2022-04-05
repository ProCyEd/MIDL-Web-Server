import React from 'react';
import Large from './Large';
import Wide from './Wide';
import Small from './Small';
import styles from '../../../styles/widgets/container.module.scss';

export default function Container({ container }) {


    const Widget = ({ widget, content, title, contentType }) => {
        if(widget === "large"){
            return <Large content={content} title={title} contentType={contentType}></Large>
        } else if(widget === "wide"){
            return <Wide content={content} title={title} contentType={contentType}></Wide>
        } else if(widget === "small"){
            return <Small content={content} title={title} contentType={contentType}></Small>
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{container.title}</h1>
            </div>

            {container.widgets.map((w, k) => {
                return <Widget widget={w.type} content={w.content} contentType={w.contentType} title={w.title} key={k}></Widget>
            })}
        </div>
    )
}
