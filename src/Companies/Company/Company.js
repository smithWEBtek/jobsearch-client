import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import ContactsList from '../../Contacts/ContactsList/ContactsList'



const Company = (props) => {

	return (
		<div key={props.company.id}>
			<Card>
				<CardBody>
					<CardTitle>	{props.company.name}</CardTitle>
					<CardSubtitle>{props.company.city}, {props.company.state}</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					<hr />
					<ContactsList contacts={props.company.contacts} />
					<hr />

					<Button>Button</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default Company;