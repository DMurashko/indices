import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import Header from '../Header/Header';
import Sections from '../Sections/Sections';
import styles from './App.module.css';

function App() {
  const [ contract, setContract ] = useState(null);

  useEffect(() => {
    const provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/e2208991a05847009279bedfaa2f4d88');
    const web3 = new Web3(provider);
    web3.eth.net.isListening()
      .catch(e => console.error('Connection to infura was not successful', e));
    const abi=[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"getGroupIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_groupId","type":"uint256"}],"name":"getGroup","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256[]","name":"indexes","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_indexId","type":"uint256"}],"name":"getIndex","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"ethPriceInWei","type":"uint256"},{"internalType":"uint256","name":"usdPriceInCents","type":"uint256"},{"internalType":"uint256","name":"usdCapitalization","type":"uint256"},{"internalType":"int256","name":"percentageChange","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"}];
    const contract_Address="0x4f7f1380239450AAD5af611DB3c3c1bb51049c29";
    setContract(new web3.eth.Contract(abi, contract_Address));
  }, []);

  
  return (
    <div className={styles.main}>
      <Header />
      <Sections 
       contract={contract}
      />
    </div>
  );
}

export default App;
