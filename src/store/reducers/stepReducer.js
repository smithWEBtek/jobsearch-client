import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
	steps: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE STEP-----------------------------
		case actionTypes.CREATE_STEP_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_STEP_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_STEP_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_STEP:
			const newStep = action.stepData
			return Object.assign({}, state, {
				steps: state.steps.concat(newStep)
			})


		//-----FETCH STEPS-----------------------------
		case actionTypes.FETCH_STEPS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_STEPS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_STEPS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_STEPS:
			const steps = action.stepsList
			return Object.assign({}, state, {
				steps: steps
			})


		//-----UPDATE STEP-----------------------------
		case actionTypes.UPDATE_STEP_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_STEP_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_STEP_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_STEP:
			//const stepData = action.updatedStepData
			//debugger
			//const stepIndex = state.steps.findIndex(step => step.id === stepData.id);
			// const stateTemp = {
			//   ...state,
			//   steps: [
			//     ...state.steps.slice(0, stepIndex),
			//     ...state.steps.slice(stepIndex + 1, state.steps.length)
			//   ]
			// };
			const updatedStepsArray = state.steps.map(step => step.id === action.updatedStepData.id ? action.updatedStepData : step)
			return Object.assign({}, state, { steps: updatedStepsArray })


		//-----DELETE STEP-----------------------------
		case actionTypes.DELETE_STEP_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_STEP_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_STEP_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_STEP:
			const updatedSteps = state.steps.filter(step => step.id !== action.id);
			return Object.assign({}, state, {
				steps: updatedSteps
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
