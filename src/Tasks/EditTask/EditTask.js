import React, { Component } from 'react';
import './EditTask.css';
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/Index'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
// import Aux from '../../HOC/Aux/Aux'

class EditTasks extends Component {

	state = {
		id: '',
		description: '',
		priority: '',
		due_date: '',
		company_id: '',
		contact_id: '',
		job_id: '',
		step_id: '',
		user_id: '',
		logs: []
	}

	componentWillMount() {
		this.setState({
			id: this.props.task.id,
			description: this.props.task.description,
			priority: this.props.task.priority,
			due_date: this.props.task.due_date,
			company_id: this.props.task.company_id,
			contact_id: this.props.task.contact_id,
			job_id: this.props.task.job_id,
			step_id: this.props.task.step_id,
			user_id: this.props.task.user_id,
			logs: this.props.task.logs
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
		this.props.onUpdateTask(data, history)
		this.props.close()
	}

	render() {

		return (
			<Container>
				<Row>
					<Col xs='4'>
						<p className="FormInstructions">Edit form and click 'Update'</p>
						<form className="Form">
							<p>description
								<input
									type="text"
									name="description"
									value={this.state.description}
									onChange={this.handleChange}
								/></p>

							<p>priority
								<input
									type="text"
									name="priority"
									value={this.state.priority}
									onChange={this.handleChange}
								/></p>

							<p>due_date
								<input
									type="date"
									name="due_date"
									value={this.state.due_date}
									onChange={this.handleChange}
								/></p>
							<p>company</p>
							<p>contact</p>
							<p>job</p>
							<p>step</p>
							<p>user</p>

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

				</Row>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		companies: state.com.companies,
		contacts: state.con.contacts,
		jobs: state.job.jobs,
		steps: state.stp.steps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onUpdateTask: (data, history) => dispatch(actions.updateTask(data, history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditTasks))
