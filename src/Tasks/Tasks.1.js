import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'

import { connect } from 'react-redux';
import Task from './Task'
// import TaskViewer from '../Tasks/TaskViewer'

class Tasks extends Component {
	state = {
		tasks_due: [],
		tasks_complete: []
	}

	componentDidMount() {
		this.props.onFetchTasks()
	}

	// handleClickTask = (code) => {
	// 	this.setState({
	// 		results_url: 'http://netflix.com/browse/task/' + code
	// 	})
	// }

	render() {
		let renderedTasks = this.props.tasks.map((task, index) => {
			return (
				<div key={index}>
					<Task task={task} />
				</div>
			)
		})

		return (
			<div>
				{renderedTasks}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		tasks: state.tsk.tasks
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchTasks: () => dispatch(actions.fetchTasks())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
