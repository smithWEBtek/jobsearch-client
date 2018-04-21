import React, { Component } from 'react'
import * as actions from '../store/actions/index'
import { connect } from 'react-redux';
import Log from './Log'
// import LogViewer from '../Logs/LogViewer'

class Logs extends Component {
	state = {
		logs_due: [],
		logs_complete: []
	}

	componentDidMount() {
		this.props.onFetchLogs()
	}

	// handleClickLog = (code) => {
	// 	this.setState({
	// 		results_url: 'http://netflix.com/browse/log/' + code
	// 	})
	// }

	render() {
		let renderedLogs = this.props.logs.map((log, index) => {
			return (
				<div key={index}>
					<Log log={log} />
				</div>
			)
		})

		return (
			<div>
				{renderedLogs}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		logs: state.com.logs
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchLogs: () => dispatch(actions.fetchLogs())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Logs)
