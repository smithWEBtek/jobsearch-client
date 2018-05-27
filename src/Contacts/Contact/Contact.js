import React from 'react';
import { Card } from 'reactstrap';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import { Link, withRouter } from 'react-router-dom'
const Contact = (props) => {
	let contact = props.contact ? props.contact : props.contacts.find(c => c.id === +props.match.params.id)

	return (
		<Card
			key={contact.id}
			className='Card'>
			<p><strong>{contact.fname} {contact.lname}</strong></p>
			<p>{contact.email}</p>
			<p>{contact.company.name}</p>
			<Link to={contact.linkedin}>linkedIn</Link>
			<Link to={contact.twitter}>Twitter</Link>
			<Link to={contact.url}>url</Link>
		</Card>
	);
};

const mapStateToProps = state => {
	return {
		contacts: state.con.contacts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCloseContact: () => dispatch(actions.closeContact())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));