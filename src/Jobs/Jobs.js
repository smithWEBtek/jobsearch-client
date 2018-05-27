import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import JobsList from './JobsList/JobsList'
import CreateJob from './CreateJob/CreateJob'
import EditJob from './EditJob/EditJob'
import Job from './Job/Job'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'
import Spinner from '../UI/Spinner/Spinner'

class Jobs extends Component {
	state = {
		job: null,
		createJob: false,
		editJob: false,
		showJob: false,
		rerender: false
	}

	componentDidMount() {
		this.props.onFetchJobs()
		this.props.onFetchContacts()
	}

	//********CREATE_JOB form handling ***************
	createJobForm = () => {
		this.setState({ createJob: true })
	}

	createJob = (newJobData) => {
		const { history } = this.props
		this.props.onCreateJob(newJobData, history)
		this.setState({ createJob: false })
	}

	createJobFormCancel = () => {
		this.setState({ createJob: false })
	}

	//********SHOW_JOB form handling ****************
	showJob = (id) => {
		let job = this.props.jobs.find(job => job.id === id)
		this.setState({
			job: job,
			showJob: true
		})
	}

	closeJob = () => {
		this.setState({
			showJob: false,
			job: null
		})
	}


	//********EDIT_JOB form handling ****************
	showEditJobForm = (id) => {
		let job = this.props.jobs.find(job => job.id === id)
		let copyOfJob = { ...job }
		this.setState({
			job: copyOfJob,
			editJob: true
		})
	}

	closeEditJobForm = () => {
		this.setState({
			editJob: false,
			job: null
		})
	}

	//********DELETE_JOB form handling ****************
	deleteJob = (id) => {
		let { history } = this.props
		this.props.onDeleteJob(id, history)
	}

	render() {
		const { match, jobs } = this.props
		const renderedJobs = <Spinner />
		return (
			<Container>
				<div>
					<Switch>
						<Route path={`${match.url}/:id/edit`} exact component={EditJob} />
						<Route path={`${match.url}/new`} exact component={CreateJob} />
						<Route path={`${match.url}/:id`} exact component={Job} />
						<Route path={match.url} exact />
					</Switch>
				</div>

				{/*********CREATE JOB MODAL********************/}
				<button onClick={this.createJobForm}>Add Job</button>
				<Modal
					show={this.state.createJob}
					modalClosed={this.createJobFormCancel}>
					<CreateJob
						createJob={(newJobData) => this.createJob(newJobData)}
						createJobCancel={this.createJobFormCancel} />
				</Modal>

				{/**********COMPANIES LIST************************/}
				{this.props.jobs ?
					<div>
						<JobsList
							jobs={jobs}
							deleteJob={this.deleteJob}
							edit={(id) => this.showEditJobForm(id)}
							show={(id) => this.showJob(id)}
						/>
					</div > : renderedJobs}

				{/*********EDIT JOB MODAL********************/}
				<Modal
					show={this.state.editJob}
					modalClosed={this.closeEditJobForm}>
					{this.state.job ?
						<EditJob
							job={this.state.job}
							contacts={this.state.job.contacts}
							edit={(id) => this.showEditJobForm(id)}
							// update={(data, history) => this.props.onUpdateJob(data, history)}
							close={() => this.closeEditJobForm()}
						/> : null}
				</Modal>

				{/*********SHOW JOB MODAL********************/}
				<Modal
					show={this.state.showJob}
					modalClosed={this.closeJob}>
					{this.state.showJob ?
						<Job
							job={this.state.job}
							contacts={this.state.job.contacts}
							edit={(id) => this.showJob(id)}
							close={() => this.closeJob()}
						/> : null}
				</Modal>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		jobs: state.job.jobs,
		contacts: state.con.contacts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchJobs: () => dispatch(actions.fetchJobs()),
		onDeleteJob: (id, history) => dispatch(actions.deleteJob(id, history)),
		onCreateJob: (data) => dispatch(actions.createJob(data)),
		onUpdateJob: (data, history) => dispatch(actions.updateJob(data, history)),
		onFetchContacts: () => dispatch(actions.fetchContacts())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Jobs))
