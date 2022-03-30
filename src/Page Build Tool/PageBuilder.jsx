import React, {useEffect, useState} from 'react'
import { retrieveModuleData } from './Module Identification/RetrieveModuleData'
import publish from '../Network/publish'
import styles from '../../styles/box.module.scss'

export default function PageBuilder({pageTitle, data}) {

  console.log(data)


  return (
    <>
     <h1>{pageTitle}</h1>
            {data.boxes.map((p) => (
                <div className={styles.container}>
                <div className={styles.topContainer}>
                    <h1 className={styles.title}>{p.box.name}</h1>
                    <div className={styles.btnContainer}>
                        <a href={'/device2/'}>
                        </a>
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
