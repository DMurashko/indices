import React from 'react';
import styles from './Sections.module.css';

export default function Sections() {	
	return (
		<div className={styles.main}>
			<AssetIndex />
			<VenturePortfolioIndex />
			<OtherIndex />
		</div>
	);
}