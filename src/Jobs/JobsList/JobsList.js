import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import './JobsList.css'

const JobsList = (props) => {
	let renderJobs = <div><p>No assigned jobs</p></div>
	if (props.jobs) {
		renderJobs = props.jobs.map((job, index) => {
			return (
				<tr key={index}>
					<td>{job.company.name}</td>
					<td>{job.title}</td>
					<td>{job.description}</td>
					<td>{job.instructions}</td>
					<td>{job.requirements}</td>
					<td><Link to={job.url}>posting</Link></td>
					<td><button
						type='button'
						className="Success"
						onClick={() => props.show(job.id)}>show</button></td>

					<td><button
						type='button'
						className="Edit"
						onClick={() => props.edit(job.id)}>edit</button></td>

					<td><button
						onClick={() => props.deleteCompany(job.id)}
						className="Danger">x</button></td>
				</tr>
			)
		})
	}

	return (
		<Container>
			<Row>
				<Col xs="60px">
					<Table striped className="List">
						<thead>
							<tr>
								<th>company</th>
								<th>title</th>
								<th>description</th>
								<th>instructions</th>
								<th>requirements</th>
								<th>posting</th>
								<th>show</th>
								<th>edit</th>
								<th>X</th>
							</tr>
						</thead>
						<tbody>
							{renderJobs}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container >
	)
}

export default JobsList
