import React from 'react';

import Items from '../Items/Items';
import styles from './IndexGroup.module.css';

export default function IndexGroup({ indices, title }) {
	return (
		<div 
			className={styles.main} 
			key={`IndexGroup-${title}`}
		>
			<div className={styles.title}>{title}</div>
			<Items 
				indices={indices} 
				title={title} 
			/>
		</div>
	);
}