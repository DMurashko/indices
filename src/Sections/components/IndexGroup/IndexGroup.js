import React from 'react';

import Items from '../Items/Items';
import styles from './IndexGroup.module.css';

export default function IndexGroup({ indeces }) {	
	return (
		<div className={styles.main}>
			<div className={styles.title}></div>
			<Items indeces={indeces} />
		</div>
	);
}