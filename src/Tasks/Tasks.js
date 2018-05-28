import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import TasksList from './TasksList/TasksLists'
import CreateTask from './CreateTask/CreateTask'
import EditTask from './EditTask/EditTask'
import Task from './Task/Task'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'
import Spinner from '../UI/Spinner/Spinner'

class Tasks extends Component {
	state = {
		task: null,
		createTask: false,
		editTask: false,
		showTask: false,
		rerender: false
	}

	componentDidMount() {
		this.props.onFetchTasks()
	}

	//********CREATE_TASK form handling ***************
	createTaskForm = () => {
		this.setState({ createTask: true })
	}

	createTask = (newTaskData) => {
		const { history } = this.props
		this.props.onCreateTask(newTaskData, history)
		this.setState({ createTask: false })
	}

	createTaskFormCancel = () => {
		this.setState({ createTask: false })
	}

	//********SHOW_TASK form handling ****************
	showTask = (id) => {
		let task = this.props.tasks.find(task => task.id === id)
		this.setState({
			task: task,
			showTask: true
		})
	}

	closeTask = () => {
		this.setState({
			showTask: false,
			task: null
		})
	}

	//********EDIT_TASK form handling ****************
	showEditTaskForm = (id) => {
		let task = this.props.tasks.find(task => task.id === id)
		let copyOfTask = { ...task }
		this.setState({
			task: copyOfTask,
			editTask: true
		})
	}

	closeEditTaskForm = () => {
		this.setState({
			editTask: false,
			task: null
		})
	}

	//********DELETE_TASK form handling ****************
	deleteTask = (id) => {
		let { history } = this.props
		this.props.onDeleteTask(id, history)
	}

	render() {
		const { match, tasks } = this.props
		const renderedTasks = <Spinner />
		return (
			<Container>
				<div>
					<Switch>
						<Route path={`${match.url}/:id/edit`} exact component={EditTask} />
						<Route path={`${match.url}/new`} exact component={CreateTask} />
						<Route path={`${match.url}/:id`} exact component={Task} />
						<Route path={match.url} exact />
					</Switch>
				</div>

				{/*********CREATE TASK MODAL********************/}
				<button onClick={this.createTaskForm}>Add Task</button>

				<Modal
					show={this.state.createTask}
					modalClosed={this.createTaskFormCancel}>
					<CreateTask
						createTask={(newTaskData) => this.createTask(newTaskData)}
						createTaskCancel={this.createTaskFormCancel} />
				</Modal>

				{/**********COMPANIES LIST************************/}
				{this.props.tasks ?
					<div>
						<TasksList
							tasks={tasks}
							deleteTask={this.deleteTask}
							edit={(id) => this.showEditTaskForm(id)}
							show={(id) => this.showTask(id)}
						/>
					</div > : renderedTasks}

				{/*********EDIT TASK MODAL********************/}
				<Modal
					show={this.state.editTask}
					modalClosed={this.closeEditTaskForm}>
					{this.state.task ?
						<EditTask
							task={this.state.task}
							edit={(id) => this.showEditTaskForm(id)}
							// update={(data, history) => this.props.onUpdateTask(data, history)}
							close={() => this.closeEditTaskForm()}
						/> : null}
				</Modal>

				{/*********SHOW TASK MODAL********************/}
				<Modal
					show={this.state.showTask}
					modalClosed={this.closeTask}>
					{this.state.showTask ?
						<Task
							task={this.state.task}
							edit={(id) => this.showTask(id)}
							close={() => this.closeTask()}
						/> : null}
				</Modal>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.tsk.tasks,
		contacts: state.con.contacts,
		companies: state.com.companies,
		jobs: state.job.jobs,
		steps: state.stp.steps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchTasks: () => dispatch(actions.fetchTasks()),
		onDeleteTask: (id, history) => dispatch(actions.deleteTask(id, history)),
		onCreateTask: (data) => dispatch(actions.createTask(data)),
		onUpdateTask: (data, history) => dispatch(actions.updateTask(data, history))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tasks))
