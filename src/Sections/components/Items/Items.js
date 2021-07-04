import React from 'react';
import styles from './Items.module.css';

export default function Items({ indeces }) {	
	return (
		<div className={styles.main}>
			{
				indeces.map(index => <Item index={index} />)
			}
		</div>
	);
}