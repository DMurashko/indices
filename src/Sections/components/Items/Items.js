import React from 'react';

import Item from '../Item/Item';
import styles from './Items.module.css';

export default function Items({ indices, title }) {
	return (
		<div 
			className={styles.main} 
			key={`Items-${title}`}
		>
			{
				indices?.map(index => <Item {...index} key={index.title} />)
			}
		</div>
	);
}