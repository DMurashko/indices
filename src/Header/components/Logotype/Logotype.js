import React from 'react';
import styles from './Logotype.module.css';

export default function Logotype() {
	const handleClick = () => null;
	
	return (
		<div 
			className={styles.main} 
			onClick={handleClick}
		>
			Logotype
		</div>
	);
}