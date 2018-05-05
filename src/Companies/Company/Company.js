import React from 'react';
import { Card } from 'reactstrap';

const Company = (props) => {

	return (
		<div>
			<Card
				key={props.match.params["id"]}
				className='Card'>
				{props.company.name}
			</Card>
		</div>
	);
};

export default Company;