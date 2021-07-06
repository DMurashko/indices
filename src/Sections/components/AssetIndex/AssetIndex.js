import React from 'react';

import IndexGroup from '../IndexGroup/IndexGroup';

export default function AssetIndex({ indices }) {	
	return (
		<IndexGroup 
			title="AssetIndex"
			indices={indices}
		/>
	);
}