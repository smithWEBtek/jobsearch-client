import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Company.css'

const Company = (props) => {
	const MAX_LENGTH = 1500;
	return (
		<div key={props.company.id}>
			<Card>
				<CardBody>
					<CardTitle>	{props.company.name}</CardTitle>
					<CardSubtitle>{props.company.city}, {props.company.state}</CardSubtitle>
					<div>
						<Link to={props.company.url}>{props.company.url}</Link>
						<CardText>
							{props.company.about.substring(0, MAX_LENGTH)}
						</CardText>
					</div>


				</CardBody>
			</Card>
		</div>
	);
};

export default Company;