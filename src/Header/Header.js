import React from 'react';
import styles from './Header.module.css';
import Logotype from './components/Logotype/Logotype';
import WalletButton from './components/WalletButton/WalletButton';

export default function Header() {
	return (
		<>
			<div className={styles.upper}>
				<Logotype />
				<WalletButton />
			</div>
			<div className={styles.lower}>
				All indices
			</div>
		</>	
	);
}