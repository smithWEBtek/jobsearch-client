import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Task.css'

const Task = (props) => {
	return (
		<div key={props.task.id}>
			<Card className='Card'>
				<CardBody>
					<CardTitle>	{props.task.description}>
						</CardTitle>
					<CardSubtitle>{props.task.priority}, {props.task.priority}</CardSubtitle>
					<div>
						<Link to={props.task.url}>{props.task.url}</Link>
						<CardText>
							<h3>description: {props.task.description}</h3>
						</CardText>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Task;