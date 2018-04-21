import React from 'react';
import { Card } from 'reactstrap';

const Job = (props) => {
	return (
		<div>
			<Card
				key={props.job.id}
				className='Card'>
				{props.job.title}
			</Card>
		</div>
	);
};

export default Job;