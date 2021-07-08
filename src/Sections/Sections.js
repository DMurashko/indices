import React, { useEffect, useState } from 'react';

import IndexGroup from './components/IndexGroup/IndexGroup';
import styles from './Sections.module.css';

export default function Sections({ contract }) {
	const [ groups, setGroups ] = useState([]);
	const [ indexIds, setIndexIds ] = useState([]);
	const [ indicesByGroup, setIndicesByGroup ] = useState({});
	const [ indicesToRender, setIndicesToRender ] = useState([]);
	const [ error, setError ] = useState(null);

	function calcPrice(weiAmount, usdAmount) {
		return `$${usdAmount/100} / ${weiAmount/Math.pow(10, 18)} ETH`;
	}

	function formatChange(change) {
		return change >= 0 ? `+${change} %` : `${change} %`;
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
  }, [groups, contract?.methods]);

  useEffect(() => {
  	try {
  		(async () => {
				const acc = {};

	  		const mapIndices = (title) => (indexId) => {
	  			acc[title] = [];

					return contract?.methods.getIndex(indexId).call((err, { 
						name, ethPriceInWei, percentageChange, usdCapitalization, usdPriceInCents
					}) => {
			     	acc[title].push({
			    		title: name,
			    		change: formatChange(percentageChange),
			    		capitalization: usdCapitalization,
			    		price: calcPrice(ethPriceInWei, usdPriceInCents),
			    	});
			    });
	  		};

	  		const mapIndexIds = ({ indices, title }) => (
	  			Promise.all(indices.map(mapIndices(title)))
	  		);

				await Promise.all(indexIds.map(mapIndexIds));

				setIndicesByGroup(acc);
  		})();
  	} catch(err) {
  		setError(err);
  	}
  }, [indexIds, contract?.methods]);

  useEffect(() => {
  	try {
	  	setIndicesToRender(Object.entries(indicesByGroup).map(([title, indices]) => ({
	  		title,
	  		indices,
	  	})));
  	} catch(err) {
  		setError(err);
  	}
  }, [indicesByGroup]);

	return (
		<div className={styles.main}>
			{
				!error && indicesToRender.map(({ title, indices }) => (
					<IndexGroup 
						title={title}
						indices={indices}
						key={title}
					/>	
				))
			}
		</div>
	);
}