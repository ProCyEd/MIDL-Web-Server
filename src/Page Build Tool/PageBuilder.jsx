import React, {useEffect, useState} from 'react'
import { retrieveModuleData } from './Module Identification/RetrieveModuleData'
import publish from '../Network/publish'
import styles from '../../styles/pageBuilder.module.scss'
import Large from '../Components/Widgets/Large';

export default function PageBuilder({pageTitle, data}) {

  console.log(data)

  return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{pageTitle}</h1>

			<div className={styles.container}>

				<Large></Large>
				<Large></Large>

			</div>

		</div>
  	)
}
