import React, { Component } from 'react';
import './EditContact.css';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

class EditContact extends Component {

	state = {
		fname: '',
		lname: '',
		email: '',
		title: '',
		phone: '',
		twitter: '',
		linkedin: '',
		url: '',
		company: {},
		company_id: '',
		companies: []
	}

	componentDidMount() {
		this.props.onFetchCompanies()
		this.setState({
			id: this.props.contact.id,
			fname: this.props.contact.fname,
			lname: this.props.contact.lname,
			email: this.props.contact.email,
			phone: this.props.contact.phone,
			title: this.props.contact.title,
			twitter: this.props.contact.twitter,
			linkedin: this.props.contact.linkedin,
			url: this.props.contact.url,
			company_id: this.props.contact.company.id
		})
	}


	handleCompanySelect = (event) => {
		this.setState({
			company: this.props.companies.find(company => company.name === event.target.value),
			company_id: this.props.companies.find(company => company.name === event.target.value).id
		})
	}


	// handleJobSelect = (event) => {
	// 	this.setState({
	// 		job: this.props.jobs.find(job => job.title === event.target.value)
	// 	})
	// }

	handleOnChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleCancel = () => {
		this.props.close()
	}

	handleSubmit = (e) => {
		// let history = this.props.history
		let history = '/contacts'

		let data = this.state
		this.props.onUpdateContact(data, history)
		this.props.close()
	}

	render() {
		const companySelectOptions = this.props.companies.map(company => {
			return <option value={company.name} id={company.id} key={company.id}>{company.name}</option>
		})

		return (
			<Container>
				<Row>
					<Col xs='4'>
						<p className="FormInstructions">Edit form and click 'Update'</p>
						<form className="Form">

							<p>first name
								<input
									type="text"
									name="fname"
									value={this.state.fname}
									onChange={(event) => this.handleOnChange(event)}
									// placeholder="first name"
									required />
							</p>
							<p>last name
								<input
									type="text"
									name="lname"
									value={this.state.lname}
									onChange={(event) => this.handleOnChange(event)}
									// placeholder="last name"
									required />
							</p>
							<p>email
								<input
									type="text"
									name="email"
									value={this.state.email}
									onChange={(event) => this.handleOnChange(event)}
									// placeholder="email"
									required />
							</p>
							<p>phone
								<input
									type="text"
									name="phone"
									value={this.state.phone}
									onChange={(event) => this.handleOnChange(event)}
									// placeholder="phone"
									required />
							</p>
							<p>title
								<input
									type="text"
									name="title"
									value={this.state.title}
									onChange={(event) => this.handleOnChange(event)}
									// placeholder="title"
									required />
							</p>
							<p>url
								<input
									type="text"
									name="url"
									value={this.state.url}
									onChange={(event) => this.handleOnChange(event)}
									// placeholder="url"
									required />
							</p>
							<p>linkedin
								<input
									type="text"
									name="linkedin"
									value={this.state.linkedin}
									onChange={(event) => this.handleOnChange(event)}
									// placeholder="linkedin"
									required />
							</p>
							<p>twitter
								<input
									type="text"
									name="twitter"
									value={this.state.twitter}
									onChange={(event) => this.handleOnChange(event)}
									// placeholder="twitter"
									required />
							</p>

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
						<hr />
						<select
							value={this.state.company.name}
							onChange={(event) => this.handleCompanySelect(event)}>
							{companySelectOptions}
						</select>
						<hr />
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		companies: state.com.companies,
		contacts: state.con.contacts,
		jobs: state.job.jobs
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onUpdateContact: (data, history) => dispatch(actions.updateContact(data, history)),
		onFetchCompanies: () => dispatch(actions.fetchCompanies())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditContact))
