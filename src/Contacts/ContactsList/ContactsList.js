import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import './ContactsList.css'

const ContactsList = (props) => {
	let renderContacts = <div><p>No assigned contacts</p></div>
	if (props.contacts) {
		renderContacts = props.contacts.map((contact, index) => {
			return (
				<tr key={index}>
					<td>{contact.company.name}</td>
					<td>{contact.fname} {contact.lname}</td>
					<td>{contact.title}</td>
					<td><Link to={contact.email}>email</Link></td>
					<td><Link to={contact.phone}>ph</Link></td>
					<td>{contact.linkedin}</td>
					<td>{contact.twitter}</td>
					<td><Link to={contact.url}>site</Link></td>
					<td>jobs[]</td>
					<td>tasks[]</td>

					<td><button
						type='button'
						className="Success"
						onClick={() => props.show(contact.id)}>show
        </button></td>

					<td><button
						type='button'
						className="Edit"
						onClick={() => props.edit(contact.id)}>edit
        </button></td>

					<td><button
						onClick={() => props.deleteCompany(contact.id)}
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
								<th>name</th>
								<th>title</th>
								<th>email</th>
								<th>phone</th>
								<th>linkedin</th>
								<th>twitter</th>
								<th>url</th>
								<th>jobs</th>
								<th>tasks</th>
								<th>show</th>
								<th>edit</th>
								<th>x</th>
							</tr>
						</thead>
						<tbody>
							{renderContacts}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container >
	)
}

export default ContactsList
