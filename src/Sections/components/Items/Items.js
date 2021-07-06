import React from 'react';

import Item from '../Item/Item';
import styles from './Items.module.css';

export default function Items({ indices }) {	
	return (
		<div className={styles.main}>
			{
				indices?.map(index => <Item {...index} />)
			}
		</div>
	);
}