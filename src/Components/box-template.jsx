
import React from 'react';
import { useEffect, useState } from 'react'
import styles from '../../styles/box.module.scss'

export default function Box(){

    const [data, setdata] = useState([])

    useEffect(async() => {
        const result = await fetch('http://localhost:3001/Box-Info', {
            method: 'GET',
            credantials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await result.json()
        setdata(res)  
    }, [])

    console.log("Hello World")
    console.log(data)
    return(
        <>
            <h1>Devices</h1>
            
            {data.map((p) => (
                <div className={styles.container}>
                <div className={styles.topContainer}>
                    {/* <Icon props={box.type}></Icon> */}
                    <h1 className={styles.title}>{p.box.name}</h1>
                    <div className={styles.btnContainer}>
                        {/* <div className={styles.controls}>Controls</div> */}
                        <a href={'/device2/'}>
                            {/* <button variant="outlined">Veiw Controls</button> */}
                        </a>

                        <button variant="outlined">Request Access</button>
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.descriptionContainer}>
                        <h1 className={styles.descriptionTitle}>Description</h1>
                        <p className={styles.description}>
                            {p.box.description}
                        </p>
                    </div>
                    <div className={styles.split}>

                    </div>
                    <div className={styles.deviceContainer}>
                        <h1 className={styles.deviceTitle}>Devices</h1>
                        <div className={styles.nestedDevice}>
                            {p.box.device.map((d) => (
                                <div className={styles.container}>
                                    <div className={styles.name}>{d.name}</div>
                                <div className={styles.description}>{d.description}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}
