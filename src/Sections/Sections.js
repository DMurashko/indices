import React, { useEffect, useState } from 'react';

import AssetIndex from './components/AssetIndex/AssetIndex';
import OtherIndex from './components/OtherIndex/OtherIndex';
import VenturePortfolioIndex from './components/VenturePortfolioIndex/VenturePortfolioIndex';
import styles from './Sections.module.css';

const test = [
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
	{
		title: 'DeFi Index',
		price: '$100 / 0.04 ETH',
		volume: '$2,456,235.00',
		change: '+55%',
	},
];

export default function Sections({ contract }) {
	const [ groups, setGroups ] = useState([]);
	const [ indexIds, setIndexIds ] = useState([]);
	const [ indices, setIndices ] = useState([]);

  useEffect(() => {
    contract?.methods.getGroupIds().call((err, data) => {
      setGroups(data);
    });
  }, [contract]);

  useEffect(() => {
  	groups.forEach((groupId) => {
	    contract?.methods.getGroup(groupId).call((err, { name, indexes }) => {
	    	const newItem = {
	    		title: name,
	    		indices: indexes,
	    	}
	      setIndexIds((prevIndexIds) => [ ...prevIndexIds, newItem ]);
	    });
  	});
  }, [groups]);

  useEffect(() => {
  	indexIds.forEach(({ indices }) => {
  		indices.forEach((indexId) => {
  			contract?.methods.getIndex(indexId).call((err, data) => {
		    	console.log(data);
		    	// const newItem = {
		    	// 	title: name,
		    	// 	indices: indexes,
		    	// }
		     //  setIndices((prevIndices) => [ ...prevIndices, newItem ]);
		    });
  		});
  	});
  }, [indexIds]);

	return (
		<div className={styles.main}>
			<AssetIndex indices={test} />
			<VenturePortfolioIndex />
			<OtherIndex />
		</div>
	);
}