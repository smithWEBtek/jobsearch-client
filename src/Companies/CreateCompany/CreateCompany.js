import React, { Component } from 'react';
import './CreateCompany.css'
import * as actions from '../../Store/Actions/Index'
import { connect } from 'react-redux'

class CreateCompany extends Component {
	state = {
		name: '',
		city: '',
		state: '',
		url: '',
		about: '',
		company_id: ''
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newCompanyData = this.state;
		this.props.onCreateCompany(newCompanyData)
		this.setState({
			name: '',
			city: '',
			state: '',
			url: '',
			about: '',
			company_id: ''
		});
		this.props.createCompanyCancel()
	}

	render() {

		return (
			<div>
				<p>Complete form and click 'Add Company'</p>
				<form onSubmit={this.handleSubmit}>
					<p><label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="name"
							required />
					</p>
					<p><label htmlFor="name">City</label>
						<input
							type="text"
							name="city"
							value={this.state.city}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="city"
							required />
					</p>
					<p><label htmlFor="name">State</label>
						<input
							type="text"
							name="state"
							value={this.state.state}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="state"
							required />
					</p>
					<p><label htmlFor="name">Url</label>
						<input
							type="text"
							name="url"
							value={this.state.url}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="url"
							required />
					</p>
					<p><label htmlFor="name">About</label>
						<input
							type="text"
							name="about"
							value={this.state.about}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="about"
							required />
					</p>

					<button
						type="button"
						onClick={this.props.createCompanyCancel}
						className="Danger"
					>CANCEL</button>
					<button className="Success"
					>CREATE Company</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		companies: state.com.companies
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateCompany: (data) => dispatch(actions.createCompany(data))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCompany)
