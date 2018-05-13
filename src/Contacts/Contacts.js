import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import ContactsList from '../Contacts/ContactsList/ContactsList'
import CreateContact from './CreateContact/CreateContact'
import EditContact from './EditContact/EditContact'
import Contact from './Contact/Contact'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'
import Spinner from '../UI/Spinner/Spinner'

class Contacts extends Component {
	state = {
		contact: null,
		createContact: false,
		editContact: false,
		showContact: false,
		rerender: false
	}

	componentDidMount() {
		this.props.onFetchContacts()
	}

	//********CREATE_CONTACT form handling ***************
	createContactForm = () => {
		this.setState({ createContact: true })
	}

	createContact = (newContactData) => {
		const { history } = this.props
		this.props.onCreateContact(newContactData, history)
		this.setState({ createContact: false })
	}

	createContactFormCancel = () => {
		this.setState({ createContact: false })
	}

	//********SHOW_CONTACT form handling ****************
	showContact = (id) => {
		let contact = this.props.contacts.find(contact => contact.id === id)
		this.setState({
			contact: contact,
			showContact: true
		})
	}

	closeContact = () => {
		this.setState({
			showContact: false,
			contact: null
		})
	}


	//********EDIT_CONTACT form handling ****************
	showEditContactForm = (id) => {
		let contact = this.props.contacts.find(contact => contact.id === id)
		let copyOfContact = { ...contact }
		this.setState({
			contact: copyOfContact,
			editContact: true
		})
	}

	closeEditContactForm = () => {
		this.setState({
			editContact: false,
			contact: null
		})
	}

	//********DELETE_CONTACT form handling ****************
	deleteContact = (id) => {
		let { history } = this.props
		this.props.onDeleteContact(id, history)
	}

	render() {
		const { match, contacts } = this.props
		const renderedContacts = <Spinner />
		return (
			<Container>
				<div>
					<Switch>
						<Route path={`${match.url}/:id/edit`} exact component={EditContact} />
						<Route path={`${match.url}/new`} exact component={CreateContact} />
						<Route path={`${match.url}/:id`} exact component={Contact} />
						<Route path={match.url} exact />
					</Switch>
				</div>
				<hr />

				{/*********CREATE CONTACT MODAL********************/}
				<button onClick={this.createContactForm}>Add Contact</button>
				<Modal
					show={this.state.createContact}
					modalClosed={this.createContactFormCancel}>
					<CreateContact
						createContact={(newContactData) => this.createContact(newContactData)}
						createContactCancel={this.createContactFormCancel} />
				</Modal>

				{/**********CONTACTS LIST************************/}
				{this.props.contacts ?
					<div>
						<ContactsList
							contacts={contacts}
							deleteContact={this.deleteContact}
							edit={(id) => this.showEditContactForm(id)}
							show={(id) => this.showContact(id)}
						/>
					</div > : renderedContacts}

				{/*********EDIT CONTACT MODAL********************/}
				<Modal
					show={this.state.editContact}
					modalClosed={this.closeEditContactForm}>
					{this.state.contact ?
						<EditContact
							contact={this.state.contact}
							companies={this.state.companies}
							edit={(id) => this.showEditContactForm(id)}
							// update={(data, history) => this.props.onUpdateContact(data, history)}
							close={() => this.closeEditContactForm()}
						/> : null}
				</Modal>

				{/*********SHOW CONTACT MODAL********************/}
				<Modal
					show={this.state.showContact}
					modalClosed={this.closeContact}>
					{this.state.showContact ?
						<Contact
							contact={this.state.contact}
							edit={(id) => this.showContact(id)}
							close={() => this.closeContact()}
						/> : null}
				</Modal>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		companies: state.com.companies,
		contacts: state.con.contacts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchContacts: () => dispatch(actions.fetchContacts()),
		onDeleteContact: (id, history) => dispatch(actions.deleteContact(id, history)),
		onCreateContact: (data) => dispatch(actions.createContact(data)),
		onUpdateContact: (data, history) => dispatch(actions.updateContact(data, history))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contacts))
