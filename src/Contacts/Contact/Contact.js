import React from 'react';
import { Card } from 'reactstrap';

const Contact = (props) => {
	return (
		<div>
			<Card
				key={props.contact.id}
				className='Card'>
				<p><strong>{props.contact.fname} {props.contact.lname}</strong></p>
				<p>{props.contact.email}</p>
				<p>{props.contact.company.name}</p>
			</Card>
		</div>
	);
};

export default Contact;