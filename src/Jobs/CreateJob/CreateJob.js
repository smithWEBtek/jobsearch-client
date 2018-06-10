import React, { Component } from 'react';
import './CreateJob.css'
import * as actions from '../../Store/Actions/Index'
import { connect } from 'react-redux'
import CompanySelect from '../../Companies/CompanySelect/CompanySelect'

class CreateJob extends Component {
	state = {
		title: '',
		description: '',
		instructions: '',
		requirements: '',
		url: '',
		company_id: 1,
		company: {},
		companies: []
	}

	componentDidMount() {
		this.props.onFetchCompanies()
		this.setState({ companies: this.props.companies })
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			company: this.handleCompanySelect
		})
		const jobData = this.state;
		this.props.onCreateJob(jobData)

		debugger;

		this.setState({
			title: '',
			description: '',
			instructions: '',
			requirements: '',
			url: '',
			company_id: 1
		});
		this.props.createJobCancel()
	}

	handleCompanySelect(id) {
		debugger;

	}

	render() {

		return (
			<div>
				<p>Complete form and click 'Add Job'</p>
				<form onSubmit={this.handleSubmit}>

					<hr />
					<CompanySelect
						companies={this.props.companies}
						onSelect={(id) => this.handleCompanySelect(id)}
					/>
					<hr />

					<p><label htmlFor="name">title</label>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="title"
							required />
					</p>
					<p><label htmlFor="name">description</label>
						<input
							type="text"
							name="description"
							value={this.state.description}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="description"
							required />
					</p>
					<p><label htmlFor="name">instructions</label>
						<input
							type="text"
							name="instructions"
							value={this.state.instructions}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="instructions"
							required />
					</p>
					<p><label htmlFor="name">requirements</label>
						<input
							type="text"
							name="requirements"
							value={this.state.requirements}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="requirements"
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

					<button
						type="button"
						onClick={this.props.createJobCancel}
						className="Danger"
					>CANCEL</button>
					<button className="Success"
					>CREATE Job</button>
				</form>
			</div>
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
		onCreateJob: (data) => dispatch(actions.createJob(data)),
		onFetchCompanies: () => dispatch(actions.fetchCompanies())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob)
