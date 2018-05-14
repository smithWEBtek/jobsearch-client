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
					<CardText>{props.company.about}</CardText>


				</CardBody>
			</Card>
		</div>
	);
};

export default Company;