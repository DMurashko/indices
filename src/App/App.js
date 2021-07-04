import React from 'react';

import Header from '../Header/Header';
import Sections from '../Sections/Sections';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Sections />
    </div>
  );
}

export default App;
