import React, { Component } from 'react';
import './EditStep.css';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
// import Aux from '../../HOC/Aux/Aux'

class EditStep extends Component {

	state = {
		id: '',
		name: '',
		category: ''
	}

	componentWillMount() {
		this.setState({
			id: this.props.step.id,
			name: this.props.step.name,
			category: this.props.step.category
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
		this.props.onUpdateStep(data, history)
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

							<p>Category
								<input
									type="text"
									name="category"
									value={this.state.category}
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
					<p>...related tasks, jobs, contacts, companies here...</p>
				</Row>
			</Container>
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
		onUpdateStep: (data, history) => dispatch(actions.updateStep(data, history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditStep))
