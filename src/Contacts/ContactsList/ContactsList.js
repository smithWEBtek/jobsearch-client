import React from 'react'
// import { Container, Row, Col, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import './ContactsList.css'

const ContactsList = (props) => {
	let renderContacts = <div><p>No assigned contacts</p></div>
	if (props.contacts) {
		renderContacts = props.contacts.map((contact, index) => {
			return (
				<tr key={index} className='tableRow'>
					<td>{contact.company.name}</td>
					<td
						onClick={() => props.show(contact.id)}
						className='contactHover'
					>{contact.fname} {contact.lname}</td>
					<td>{contact.title}</td>
					<td>{contact.email}</td>
					<td>{contact.phone}</td>

					<td className='rowButton'><button
						type='button'
						className="Edit"
						onClick={() => props.edit(contact.id)}>edit</button></td>

					<td className='rowButton'><button
						onClick={() => props.deleteContact(contact.id)}
						className="Danger">x</button></td>
				</tr >
			)
		})
	}

	return (
		// <Container>
		// 	<Row>
		// 		<Col xs="60px">
		<div>
			<table className="List">
				<thead>
					<tr>
						<th>company</th>
						<th>name</th>
						<th>title</th>
						<th>email</th>
						<th>phone</th>
						<th>edit</th>
						<th>X</th>
					</tr>
				</thead>
				<tbody>
					{renderContacts}
				</tbody>
			</table>
		</div>
	)
}

export default ContactsList
