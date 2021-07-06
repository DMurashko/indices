import React from 'react';

import styles from './Item.module.css';

export default function Item({ title, price, capitalization, change }) {	
	return (
		<div className={styles.main}>
			<div className={styles.title}>{title}</div>
			<div className={styles.price}>{price}</div>
			<div className={styles.bottomContainer}>
				<div className={styles.capitalization}>{capitalization}</div>
				<div className={styles.change}>{change}</div>
			</div>
		</div>
	);
}