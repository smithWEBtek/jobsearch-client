import React, { Component } from 'react';
import './EditCompany.css';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import { withRouter } from 'react-router-dom'

// company={this.state.company}
// edit={(id) => this.showEditCompanyForm(id)}
// update={(data, history) => this.props.onUpdateCompany(data, history)}
// close={() => this.closeEditCompanyForm()}


class EditCompany extends Component {
	state = {
		// company: {},
		id: '',
		name: '',
		city: '',
		state: '',
		url: '',
		about: ''
	}

	componentDidMount() {
		this.setState({
			// company: this.props.company,
			id: this.props.company.id,
			name: this.props.company.name,
			city: this.props.company.city,
			state: this.props.company.state,
			url: this.props.company.url,
			about: this.props.company.about
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
		this.props.onUpdateCompany(data, history)
	}

	render() {

		return (
			<div>
				<p className="FormInstructions">Edit form and click 'Update Company'</p>
				<form className="Form">
					<p><label htmlFor="Name">Name </label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
						/></p>
					<p><label htmlFor="City">City </label>
						<input
							type="text"
							name="city"
							value={this.state.city}
							onChange={this.handleChange}
						/></p>
					<p><label htmlFor="State">State </label>
						<input
							type="text"
							name="state"
							value={this.state.state}
							onChange={this.handleChange}
						/></p>
					<p><label htmlFor="Url">Url</label>
						<input
							type="text"
							name="url"
							value={this.state.url}
							onChange={this.handleChange}
						/></p>
					<p><label htmlFor="About">About</label>
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

const mapDispatchToProps = dispatch => {
	return {
		onUpdateCompany: (data, history) => dispatch(actions.updateCompany(data, history))
	}
}

export default connect(null, mapDispatchToProps)(withRouter(EditCompany))
