import React, { Component } from 'react';
import './EditJob.css';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
// import Aux from '../../HOC/Aux/Aux'

class EditJob extends Component {

	state = {
		id: '',
		name: '',
		city: '',
		state: '',
		url: '',
		about: '',
		job: {},
		contacts: []
	}

	componentWillMount() {
		this.setState({
			id: this.props.job.id,
			name: this.props.job.name,
			city: this.props.job.city,
			state: this.props.job.state,
			url: this.props.job.url,
			about: this.props.job.about,
			job: this.props.job,
			contacts: this.props.contacts
		})
	}

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
		this.props.onUpdateJob(data, history)
	}

	render() {
		let jobContacts = <p>No contacts assigned</p>
		if (this.state.job.contacts.length > 0) {
			jobContacts = this.state.job.contacts.map((contact, index) => {
				return (
					<div key={index}>
						<p>{contact.fname} {contact.lname}</p>
					</div>
				)
			})
		}

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
					<Col>
						<div><strong>Assigned contacts:
						{jobContacts}
						</strong></div>
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
		onShowContact: () => dispatch(actions.showContact()),
		onCloseContact: () => dispatch(actions.closeContact()),
		onUpdateJob: (data, history) => dispatch(actions.updateJob(data, history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditJob))
