import React from 'react';
import { Card } from 'reactstrap';

const Step = (props) => {
	return (
		<div>
			<Card
				key={props.step.id}
				className='Card'>
				{/* {props.step.name}
				{props.step.category} */}
				<p>step.....</p>
			</Card>
		</div>
	);
};

export default Step;