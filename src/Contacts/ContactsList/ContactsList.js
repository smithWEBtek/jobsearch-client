import React from 'react'
import './ContactsList.css'

const ContactsList = (props) => {
	let renderContacts = <div><p>No assigned contacts</p></div>
	let sortedContacts = props.contacts.sort((a, b) => a.lname.toLowerCase() < b.lname.toLowerCase() ? -1 : a.lname.toLowerCase() > b.lname.toLowerCase() ? 1 : 0)

	if (props.contacts) {
		renderContacts = sortedContacts.map((contact, index) => {
			return (
				<tr key={index} className='tableRow'>
					<td>{contact.company.name}</td>
					<td
						onClick={() => props.show(contact.id)}
						className='contactHover'>{contact.fname} {contact.lname}</td>

					<td>{contact.title}</td>
					<td><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
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
