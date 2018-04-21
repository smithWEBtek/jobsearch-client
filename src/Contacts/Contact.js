import React from 'react';
import { Card } from 'reactstrap';

const Contact = (props) => {
	return (
		<div>
			<Card
				key={props.contact.id}
				className='Card'>
				{props.contact.fname} {props.contact.lname}
			</Card>
		</div>
	);
};

export default Contact;