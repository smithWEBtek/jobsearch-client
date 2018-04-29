import React, { Component } from 'react';
import './EditCompany.css';

class EditCompany extends Component {
	state = {
		company: {},
		id: '',
		name: '',
		city: '',
		state: '',
		url: '',
		about: ''
	}

	componentDidMount() {
		this.setState({ company:  })
	}
}

handleChange = (e) => {
	const { name, value } = e.target;
	this.setState({ [name]: value });
	e.preventDefault()
}

handleCancel = () => {
	this.props.close()
}

handleSubmit = (e) => {
	let data = this.state.company
	let history = this.props.history
	this.props.update(data, history)
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

export default EditCompany
