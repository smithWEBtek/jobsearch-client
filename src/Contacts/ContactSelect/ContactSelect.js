import React from 'react'
import './ContactSelect.css'
import { FormGroup, Input, Label } from 'reactstrap'

const ContactSelect = (props) => {

	let selectList = props.contacts.map((contact, index) => {
		return (
			<option type='checkbox' value={contact.lname} id={contact.id} key={contact.id}>{contact.lname}</option>
		)
	})

	return (
		<FormGroup>
			<Label for="exampleSelectMulti">Select Multiple</Label>
			<Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
				{selectList}
			</Input>
		</FormGroup>
	)
}

export default ContactSelect;