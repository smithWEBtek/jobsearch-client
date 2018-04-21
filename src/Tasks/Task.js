import React from 'react';
import { Card } from 'reactstrap';

const Task = (props) => {
	return (
		<div>
			<Card
				key={props.task.id}
				className='Card'>
				{props.task.description}
			</Card>
		</div>
	);
};

export default Task;