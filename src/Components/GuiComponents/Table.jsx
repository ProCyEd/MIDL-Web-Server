import React from 'react';
import styles from '../../../styles/guiComponents/table.module.scss';
import { makeStyles } from '@mui/styles';
import data from '../Styles';

const useStyles = makeStyles({
    headerItem: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '1em',
    },
    
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '1px solid white',
    },

    rowItem: {

    },

    rowContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '1px solid white',
    },

    container: {

    },
});
export default function Table({ content }) {

    // console.log(content);

    const classes = useStyles();

    const HeaderItem = ({ item }) => {
        return (
            <div className={classes.headerItem}>
                {item}
            </div>
        )
    }

    const Header = ({ headers }) => {
        return (
            <div className={classes.headerContainer}>
                {headers.map((header, k) => {
                    return <HeaderItem key={k} item={header.label}></HeaderItem>
                })}
            </div>
        )
    }

    const RowItem = ({ item }) => {
        // console.log(item);
        return (
            <div className={classes.rowItem}>
                {item}
            </div>
        )
    }

    const Row = ({ row }) => {
        return (
            <div className={classes.rowContainer}>
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
