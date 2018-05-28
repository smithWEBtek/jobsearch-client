import React, { Component } from 'react';
import './CreateTask.css'
import * as actions from '../../Store/Actions/Index'
import { connect } from 'react-redux'

class CreateTask extends Component {
	state = {
		title: '',
		notes: '',
		priority: '',
		due_date: '',
		company_id: 1,
		contact_id: 1,
		job_id: 1,
		step_id: 1,
		user_id: 1
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newTaskData = this.state;
		this.props.onCreateTask(newTaskData)
		this.setState({
			title: '',
			notes: '',
			priority: '',
			due_date: '',
			company_id: 1,
			contact_id: 1,
			job_id: 1,
			step_id: 1,
			user_id: 1
		});
		this.props.createTaskCancel()
	}

	render() {

		return (
			<div>
				<p>Complete form and click 'Add Task'</p>
				<form onSubmit={this.handleSubmit}>
					<p><label htmlFor="name">title</label>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="title"
							required />
					</p>
					<p><label htmlFor="name">notes</label>
						<input
							type="text"
							name="notes"
							value={this.state.notes}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="notes"
							required />
					</p>
					<p><label htmlFor="name">priority</label>
						<input
							type="number"
							name="priority"
							value={this.state.priority}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="priority"
							required />
					</p>
					<p><label htmlFor="name">due_date</label>
						<input
							type="date"
							name="due_date"
							value={this.state.due_date}
							onChange={(event) => this.handleOnChange(event)}
							placeholder="due_date"
							required />
					</p>
					<p>select company</p>
					<p>select contact</p>
					<p>select job</p>
					<p>select step</p>
					<p>select user</p>

					<button
						type="button"
						onClick={this.props.createTaskCancel}
						className="Danger"
					>CANCEL</button>
					<button className="Success"
					>CREATE Task</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		companies: state.com.companies,
		contacts: state.con.contacts,
		jobs: state.job.jobs,
		steps: state.stp.steps,
		users: state.usr.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateTask: (data) => dispatch(actions.createTask(data))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask)
