import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'

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
	// steps_due: [],
	// steps_complete: []
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
		steps: state.stp.steps
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchSteps: () => dispatch(actions.fetchSteps())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Steps)
