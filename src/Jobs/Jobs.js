import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'

import { connect } from 'react-redux';
import Job from './Job/Job'

class Jobs extends Component {
	state = {
		jobs_due: [],
		jobs_complete: []
	}

	componentDidMount() {
		this.props.onFetchJobs()
	}

	// handleClickJob = (code) => {
	// 	this.setState({
	// 		results_url: 'http://netflix.com/browse/job/' + code
	// 	})
	// }

	render() {
		let renderedJobs = this.props.jobs.map((job, index) => {
			return (
				<div key={index}>
					<Job job={job} />
				</div>
			)
		})

		return (
			<div>
				{renderedJobs}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		jobs: state.job.jobs
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchJobs: () => dispatch(actions.fetchJobs())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
