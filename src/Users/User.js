import React from 'react';
import { Card } from 'reactstrap';

const User = (props) => {
	return (
		<div>
			<Card
				key={props.user.id}
				className='Card'>
				{props.user.fname} {props.user.lname}
			</Card>
		</div>
	);
};

export default User;