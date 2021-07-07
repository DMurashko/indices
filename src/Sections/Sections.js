import React, { useEffect, useState } from 'react';

import IndexGroup from './components/IndexGroup/IndexGroup';
import styles from './Sections.module.css';

export default function Sections({ contract }) {
	const [ groups, setGroups ] = useState([]);
	const [ indexIds, setIndexIds ] = useState([]);
	const [ indicesToRender, setIndicesToRender ] = useState([]);
	const [ indicesByGroup, setIndicesByGroup ] = useState([]);
	const [ error, setError ] = useState(null);

	function calcPrice(weiAmount, usdAmount) {
		return `$${usdAmount/100} / ${weiAmount/Math.pow(10, 18)} ETH`;
	}

  useEffect(() => {
  	try {
	    contract?.methods.getGroupIds().call((err, data) => {
	      setGroups(data);
	    });
  	} catch(err) {
  		setError(err);
  	}
  }, [contract]);

  useEffect(() => {
  	try {
	  	groups.forEach((groupId) => {
		    contract?.methods.getGroup(groupId).call((err, { name, indexes }) => {
		    	const newItem = {
		    		title: name,
		    		indices: indexes,
		    	}
		      setIndexIds((prevIndexIds) => [ ...prevIndexIds, newItem ]);
		    });
	  	});
  	} catch(err) {
  		setError(err);
  	}
  }, [groups]);

  useEffect(() => {
  	try {
  		setIndicesByGroup(indexIds
		  	.reduce((acc, { indices, title }, index) => {
		  		acc[title] = [];
		  		indices.forEach((indexId) => {
		  			contract?.methods.getIndex(indexId).call((err, { 
		  				name, ethPriceInWei, percentageChange, usdCapitalization, usdPriceInCents
		  			}) => {
				     	acc[title].push({
				    		title: name,
				    		change: percentageChange,
				    		capitalization: usdCapitalization,
				    		price: calcPrice(ethPriceInWei, usdPriceInCents),
				    	});
				    });
		  		});
		  		return acc;
		  	}, {})
	  	);
  	} catch(err) {
  		setError(err);
  	}
  	
  }, [indexIds]);

  useEffect(() => {
  	try {
	  	indicesByGroup && setIndicesToRender(Object.entries(indicesByGroup).map(([title, indices]) => ({
	  		title,
	  		indices,
	  	})));
  	} catch(err) {
  		setError(err);
  	}
  }, [indicesByGroup]);

  useEffect(() => {
  	console.log(indicesToRender);
  }, [indicesToRender]);

	return (
		<div className={styles.main} >
			{
				!error && indicesToRender.map(({ title, indices }) => (
					<IndexGroup 
						title={title}
						indices={indices}
						key={indices}
					/>	
				))
			}
		</div>
	);
}