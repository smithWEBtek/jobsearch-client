import React, { Component } from 'react';
import './EditCompany.css';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import { withRouter } from 'react-router-dom'
import ContactSelect from '../../Contacts/ContactSelect/ContactSelect'
import { Container, Row, Col } from 'reactstrap'

class EditCompany extends Component {

	state = {
		id: '',
		name: '',
		city: '',
		state: '',
		url: '',
		about: '',
		contacts: []
	}


	componentDidMount() {

		console.log('this.props: ', this.props);

		this.setState({
			id: this.props.company.id,
			name: this.props.company.name,
			city: this.props.company.city,
			state: this.props.company.state,
			url: this.props.company.url,
			about: this.props.company.about,
			contacts: this.props.company.contacts
		})
	}


	// handleContactSelect = (event) => {
	// 	this.setState({
	// 		contact: this.props.contacts.find(contact => contact.lname === event.target.value)
	// 	})
	// }

	// handleJobSelect = (event) => {
	// 	this.setState({
	// 		job: this.props.jobs.find(job => job.title === event.target.value)
	// 	})
	// }

	handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleCancel = () => {
		this.props.close()
	}

	handleSubmit = (e) => {
		let history = this.props.history
		let data = this.state
		this.props.onUpdateCompany(data, history)
	}

	render() {


		return (
			<Container>
				<Row>
					<Col xs='4'>
						<p className="FormInstructions">Edit form and click 'Update'</p>
						<form className="Form">
							<p>Name
								<input
									type="text"
									name="name"
									value={this.state.name}
									onChange={this.handleChange}
								/></p>

							<p>City
								<input
									type="text"
									name="city"
									value={this.state.city}
									onChange={this.handleChange}
								/></p>

							<p>State
								<input
									type="text"
									name="state"
									value={this.state.state}
									onChange={this.handleChange}
								/></p>

							<p>Url
								<input
									type="text"
									name="url"
									value={this.state.url}
									onChange={this.handleChange}
								/></p>

							<p>About
								<input
									type="text"
									name="about"
									value={this.state.about}
									onChange={this.handleChange}
								/></p>

							<p><button
								type="button"
								name="cancel"
								onClick={this.handleCancel}
								className="Danger"
							>CANCEL</button></p>

							<p><button
								type='button'
								className="Success"
								onClick={(e) => this.handleSubmit(e)}
							>UPDATE</button></p>
						</form>
					</Col>
					<Col xs="4">
						<ContactSelect
							contacts={this.props.contacts} />
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		contacts: state.con.contacts,
		jobs: state.job.jobs
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onUpdateCompany: (data, history) => dispatch(actions.updateCompany(data, history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCompany))
