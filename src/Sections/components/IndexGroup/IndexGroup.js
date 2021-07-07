import React, { useEffect } from 'react';

import Items from '../Items/Items';
import styles from './IndexGroup.module.css';

export default function IndexGroup({ indices, title }) {	
	useEffect(() => {
		console.log(JSON.stringify(indices));
	}, indices);
	return (
		<div 
			className={styles.main} 
			key={`title-${indices}`}
		>
			<div className={styles.title}>{title}</div>
			<Items 
				indices={indices} 
				title={title} 
				
			/>
		</div>
	);
}