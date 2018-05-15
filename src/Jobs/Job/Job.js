import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Job.css'

const Job = (props) => {
	const MAX_LENGTH = 1500;
	return (
		<div key={props.job.id}>
			<Card>
				<CardBody>
					<CardTitle>{props.job.company.name}</CardTitle>
					<CardSubtitle><Link to={props.job.url}>{props.job.title}</Link></CardSubtitle>
					<div>
						<CardText>
							description: {props.job.description.substring(0, MAX_LENGTH)}<br />
							reqs: {props.job.requirements.substring(0, MAX_LENGTH)}<br />
							instructions: {props.job.instructions.substring(0, MAX_LENGTH)}
						</CardText>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Job;