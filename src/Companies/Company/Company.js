import React from 'react'
import { Card } from 'reactstrap';

const Company = (props) => {

	return (
		<div>
			<Card
				key={props.company.id}
				className='Card'>
				name of company here
				</Card>
		</div >
	);
};

export default Company;