import React from 'react';
import { Card } from 'reactstrap';

const User = (props) => {
	return (
		<div>
			<Card
				key={props.user.id}
				className='Card'>
				{props.user.email}
			</Card>
		</div>
	);
};

export default User;