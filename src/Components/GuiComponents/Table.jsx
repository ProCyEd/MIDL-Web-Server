import React from 'react';
import styles from '../../../styles/guiComponents/table.module.scss';

export default function Table({ content }) {

    // console.log(content);

    const HeaderItem = ({ item }) => {
        return (
            <div className={styles.headerItem}>
                {item}
            </div>
        )
    }

    const Header = ({ headers }) => {
        return (
            <div className={styles.headerContainer}>
                {headers.map((header, k) => {
                    return <HeaderItem key={k} item={header.label}></HeaderItem>
                })}
            </div>
        )
    }

    const RowItem = ({ item }) => {
        // console.log(item);
        return (
            <div className={styles.rowItem}>
                {item}
            </div>
        )
    }

    const Row = ({ row }) => {
        return (
            <div className={styles.rowContainer}>
                {row.map((i, k) => {
                    return <RowItem key={k} item={i.description}></RowItem>
                })}
            </div>
        )
    }

    // console.log(content.rows[0])
    return (
        <div className={styles.container}>
            <Header headers={content.headers}></Header>
            {content.rows.map((r, k) => {
                return <Row row={r} key={k}></Row>
            })}
        </div>
    )
}
