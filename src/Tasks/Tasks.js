import React, { Component } from 'react'
import * as actions from '../store/actions/index'
import { connect } from 'react-redux';

// import TaskViewer from '../Tasks/TaskViewer'

class Tasks extends Component {
	state = {
		tasks_due: [],
		tasks_complete: []
	}

	componentDidMount() {
		this.props.onFetchTasks()
		console.log(this.props);
	}

	// handleClickTask = (code) => {
	// 	this.setState({
	// 		results_url: 'http://netflix.com/browse/task/' + code
	// 	})
	// }

	render() {
		let renderedTasks = this.props.tasks.map((task, index) => {
			return (
				<p key={index}>{task.name}</p>
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
