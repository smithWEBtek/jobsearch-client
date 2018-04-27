import React, { Component } from 'react';
import './EditCompany.css';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/CompanyActions'

class EditCompany extends Component {
	state = {
		company: '',
		id: '',
		name: '',
		city: '',
		state: '',
		url: '',
		about: '',
		close: null
	}

	componentDidMount() {

		let company = this.state.company
		if (this.props.company_id) {
			company = this.props.companies.find(company => company.id === this.props.company_id)
			this.setState({
				company: company,
				close: this.props.close
			})
		} else {
			company = this.props.companies.find(company => company.id === +this.props.match.params.id)
			this.setState({ company: company })
		}

		this.setState({
			company: '',
			id: '',
			name: '',
			city: '',
			state: '',
			url: '',
			about: '',
			close: null
		})
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		e.preventDefault()
	}

	handleCancel = () => {
		if (this.state.close) {
			this.props.close()
		} else {
			this.props.history.goBack()
		}
	}

	handleSubmit = (e) => {
		let { history } = this.props
		let data = {
			id: this.state.id,
			name: this.state.name,
			email: this.state.email,
			level: this.state.level,
			teacher_id: this.state.teacher.id,
			active: this.state.active
		}
		this.props.onUpdateCompany(data, history)
		if (this.state.close) {
			this.props.close()
		}
		e.preventDefault();
	}

	render() {

		return (
			<div>
				<p className="FormInstructions">Edit form and click 'Update Company'</p>
				<form className="Form">
					<p><label htmlFor="name">First name </label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
						/></p>
					<p><label>Name</label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
						/></p>
					<p><label>City </label>
						<input
							type="text"
							name="city"
							value={this.state.city}
							onChange={this.handleChange}
						/></p>
					<p><label>State </label>
						<input
							type="text"
							name="state"
							value={this.state.state}
							onChange={this.handleChange}
						/></p>
					<p><label>Url</label>
						<input
							type="text"
							name="url"
							value={this.state.url}
							onChange={this.handleChange}
						/></p>
					<p><label>About</label>
						<input
							type="text"
							name="about"
							value={this.state.about}
							onChange={this.handleChange}
						/></p>
					<button
						type="button"
						name="cancel"
						onClick={this.handleCancel}
						className="Danger"
					>CANCEL</button>
					<button
						type='button'
						className="Success"
						onClick={(e) => this.handleSubmit(e)}
					>SAVE</button>
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
		onUpdateCompany: (data, history) => dispatch(actions.updateCompany(data, history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany)
