import React, { Component } from 'react';
import './CreateContact.css'
import * as actions from '../../Store/Actions/Index'
import { connect } from 'react-redux'
// import CompanySelect from '../../Companies/CompanySelect/CompanySelect'

class CreateContact extends Component {
	state = {
		fname: '',
		lname: '',
		email: '',
		title: '',
		twitter: '',
		linkedin: '',
		url: '',
		company: ''
	}


	componentDidMount() {
		this.props.onFetchCompanies()
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newContactData = this.state;
		this.props.onCreateContact(newContactData)
		this.setState({
			fname: '',
			lname: '',
			email: '',
			title: '',
			twitter: '',
			linkedin: '',
			url: '',
			company: {}
		});
		this.props.createContactCancel()
	}

	render() {

		let companySelectOptions = (
			<div>
				<h3 htmlFor="selectCompany">select company</h3>
				<select
					value={this.state.company.name}
					onChange={(event) => this.handleCompanySelect(event)}>
				</select>
			</div>
		)

		return (
			<div>
				<p>Complete form and click 'Add Contact'</p>
				<form onSubmit={this.handleSubmit}>
					<p><label htmlFor="name">first name</label>
						<input
							type="text"
							name="fname"
							value={this.state.fname}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="first name"
							required />
					</p>
					<p><label htmlFor="name">last name</label>
						<input
							type="text"
							name="lname"
							value={this.state.lname}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="last name"
							required />
					</p>
					<p><label htmlFor="name">email</label>
						<input
							type="text"
							name="email"
							value={this.state.email}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="email"
							required />
					</p>
					<p><label htmlFor="name">phone</label>
						<input
							type="text"
							name="phone"
							value={this.state.phone}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="phone"
							required />
					</p>
					<p><label htmlFor="name">title</label>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="title"
							required />
					</p>
					<p><label htmlFor="name">url</label>
						<input
							type="text"
							name="url"
							value={this.state.url}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="url"
							required />
					</p>
					<p><label htmlFor="name">linkedin</label>
						<input
							type="text"
							name="linkedin"
							value={this.state.linkedin}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="linkedin"
							required />
					</p>
					<p><label htmlFor="name">twitter</label>
						<input
							type="text"
							name="twitter"
							value={this.state.twitter}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="twitter"
							required />
					</p>
					<hr />
					<div>
						{companySelectOptions}
					</div>
					<button
						type="button"
						onClick={this.props.createContactCancel}
						className="Danger"
					>CANCEL</button>
					<button className="Success"
					>CREATE Contact</button>
				</form>
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		contacts: state.con.contacts,
		companies: state.com.companies
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateContact: (data) => dispatch(actions.createContact(data)),
		onFetchCompanies: () => dispatch(actions.fetchCompanies())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact)
