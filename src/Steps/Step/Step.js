import React from 'react';
import { Card } from 'reactstrap';

const Step = (props) => {
	return (
		<div>
			<Card
				key={props.step.id}
				className='Card'>
				{props.step.name}
			</Card>
		</div>
	);
};

export default Step;