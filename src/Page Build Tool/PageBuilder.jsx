import React, {useEffect, useState} from 'react'
import { retrieveModuleData } from './Module Identification/RetrieveModuleData'
import publish from '../Network/publish'
import styles from '../../styles/pageBuilder.module.scss'
import Container from '../Components/Widgets/Container';

export default function PageBuilder({pageTitle, data}) {

  const containers = data.containers;
//   console.log(containers);

  return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{pageTitle}</h1>

			
			{containers.map((container, k) => {
				return <Container container={container} key={k}></Container>
			})}

		</div>
  	)
}
