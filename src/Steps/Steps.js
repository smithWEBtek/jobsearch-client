import React, { Component } from 'react'
import * as actions from '../store/actions/index'
import { connect } from 'react-redux';
import Step from './Step'
// import StepViewer from '../Steps/StepViewer'

class Steps extends Component {
	state = {
		steps_due: [],
		steps_complete: []
	}

	componentDidMount() {
		this.props.onFetchSteps()
	}

	// handleClickStep = (code) => {
	// 	this.setState({
	// 		results_url: 'http://netflix.com/browse/step/' + code
	// 	})
	// }

	render() {
		let renderedSteps = this.props.steps.map((step, index) => {
			return (
				<div key={index}>
					<Step step={step} />
				</div>
			)
		})

		return (
			<div>
				{renderedSteps}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		stp: state.stp.steps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchSteps: () => dispatch(actions.fetchSteps())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Steps)
