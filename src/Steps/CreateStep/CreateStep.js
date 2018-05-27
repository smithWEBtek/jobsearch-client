import React, { Component } from 'react';
import './CreateStep.css'
import * as actions from '../../Store/Actions/Index'
import { connect } from 'react-redux'

class CreateStep extends Component {
	state = {
		name: '',
		category: ''
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newStepData = this.state;
		this.props.onCreateStep(newStepData)
		this.setState({
			name: '',
			category: ''
		});
		this.props.createStepCancel()
	}

	render() {
		return (
			<div>
				<p>Complete form and click 'Add Step'</p>
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
					<p><label htmlFor="name">Category</label>
						<input
							type="text"
							name="category"
							value={this.state.category}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="category"
							required />
					</p>

					<button
						type="button"
						onClick={this.props.createStepCancel}
						className="Danger">CANCEL</button>

					<button className="Success">CREATE Step</button>

				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		steps: state.stp.steps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateStep: (data) => dispatch(actions.createStep(data))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStep)
