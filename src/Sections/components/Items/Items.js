import React from 'react';

import Item from '../Item/Item';
import styles from './Items.module.css';

export default function Items({ indices, title }) {
console.log(JSON.stringify(indices));	
	return (
		<div 
			className={styles.main} 
			key={`Items-${title}`}
		>
			{
				indices?.map(index => <Item {...index} />)
			}
		</div>
	);
}