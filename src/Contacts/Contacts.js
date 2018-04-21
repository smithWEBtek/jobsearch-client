import React, { Component } from 'react'
import * as actions from '../store/actions/index'
import { connect } from 'react-redux';
import Contact from './Contact'
// import ContactViewer from '../Contacts/ContactViewer'

class Contacts extends Component {
	state = {
		contacts_due: [],
		contacts_complete: []
	}

	componentDidMount() {
		this.props.onFetchContacts()
	}

	// handleClickContact = (code) => {
	// 	this.setState({
	// 		results_url: 'http://netflix.com/browse/contact/' + code
	// 	})
	// }

	render() {
		let renderedContacts = this.props.contacts.map((contact, index) => {
			return (
				<div key={index}>
					<Contact contact={contact} />
				</div>
			)
		})

		return (
			<div>
				{renderedContacts}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		contacts: state.com.contacts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchContacts: () => dispatch(actions.fetchContacts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
