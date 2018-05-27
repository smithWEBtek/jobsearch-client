import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import StepsList from './StepsList/StepsList'
import CreateStep from './CreateStep/CreateStep'
import EditStep from './EditStep/EditStep'
import Step from './Step/Step'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'
import Spinner from '../UI/Spinner/Spinner'

class Steps extends Component {
	state = {
		company: null,
		createStep: false,
		editStep: false,
		showStep: false,
		rerender: false
	}

	componentDidMount() {
		this.props.onFetchSteps()
	}

	//********CREATE_STEP form handling ***************
	createStepForm = () => {
		this.setState({ createStep: true })
	}

	createStep = (newStepData) => {
		const { history } = this.props
		this.props.onCreateStep(newStepData, history)
		this.setState({ createStep: false })
	}

	createStepFormCancel = () => {
		this.setState({ createStep: false })
	}

	//********SHOW_STEP form handling ****************
	showStep = (id) => {
		let company = this.props.steps.find(company => company.id === id)
		this.setState({
			company: company,
			showStep: true
		})
	}

	closeStep = () => {
		this.setState({
			showStep: false,
			company: null
		})
	}

	//********EDIT_STEP form handling ****************
	showEditStepForm = (id) => {
		let company = this.props.steps.find(company => company.id === id)
		let copyOfStep = { ...company }
		this.setState({
			company: copyOfStep,
			editStep: true
		})
	}

	closeEditStepForm = () => {
		this.setState({
			editStep: false,
			company: null
		})
	}

	//********DELETE_STEP form handling ****************
	deleteStep = (id) => {
		let { history } = this.props
		this.props.onDeleteStep(id, history)
	}

	render() {
		const { match, steps } = this.props
		const renderedSteps = <Spinner />
		return (
			<Container>
				<div>
					<Switch>
						<Route path={`${match.url}/:id/edit`} exact component={EditStep} />
						<Route path={`${match.url}/new`} exact component={CreateStep} />
						<Route path={`${match.url}/:id`} exact component={Step} />
						<Route path={match.url} exact />
					</Switch>
				</div>

				{/*********CREATE STEP MODAL********************/}
				<button onClick={this.createStepForm}>Add Step</button>

				<Modal
					show={this.state.createStep}
					modalClosed={this.createStepFormCancel}>
					<CreateStep
						createStep={(newStepData) => this.createStep(newStepData)}
						createStepCancel={this.createStepFormCancel} />
				</Modal>

				{/**********STEPS LIST************************/}
				{this.props.steps ?
					<div>
						<StepsList
							steps={steps}
							deleteStep={this.deleteStep}
							edit={(id) => this.showEditStepForm(id)}
							show={(id) => this.showStep(id)}
						/>
					</div > : renderedSteps}

				{/*********EDIT STEP MODAL********************/}
				<Modal
					show={this.state.editStep}
					modalClosed={this.closeEditStepForm}>
					{this.state.company ?
						<EditStep
							company={this.state.company}
							edit={(id) => this.showEditStepForm(id)}
							// update={(data, history) => this.props.onUpdateStep(data, history)}
							close={() => this.closeEditStepForm()}
						/> : null}
				</Modal>

				{/*********SHOW STEP MODAL********************/}
				<Modal
					show={this.state.showStep}
					modalClosed={this.closeStep}>
					{this.state.showStep ?
						<Step
							company={this.state.company}
							edit={(id) => this.showStep(id)}
							close={() => this.closeStep()}
						/> : null}
				</Modal>
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
		onFetchSteps: () => dispatch(actions.fetchSteps()),
		onDeleteStep: (id, history) => dispatch(actions.deleteStep(id, history)),
		onCreateStep: (data) => dispatch(actions.createStep(data)),
		onUpdateStep: (data, history) => dispatch(actions.updateStep(data, history))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Steps))
