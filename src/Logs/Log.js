import React from 'react';
import { Card } from 'reactstrap';

const Log = (props) => {
	return (
		<div>
			<Card
				key={props.log.id}
				className='Card'>
				{props.log.note}
				{/* {props.log.task.description} */}
			</Card>
		</div>
	);
};

export default Log;