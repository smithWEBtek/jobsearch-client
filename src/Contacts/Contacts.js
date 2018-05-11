import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'
import { connect } from 'react-redux';
import ContactsList from '../Contacts/ContactsList/ContactsList'

class Contacts extends Component {
	state = {
		contacts_due: [],
		contacts_complete: []
	}

	componentDidMount() {
		this.props.onFetchContacts()
	}

	render() {

		return (
			<div>
				<ContactsList contacts={this.props.contacts} />
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		contacts: state.con.contacts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchContacts: () => dispatch(actions.fetchContacts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
