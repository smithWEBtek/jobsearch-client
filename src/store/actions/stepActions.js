import * as actionTypes from './actionTypes'
import StepService from '../services/StepService'

//-----CREATE STEP ACTIONS-----------------------------
export const createStepStart = () => {
	return { type: actionTypes.CREATE_STEP_START }
}
export const createStepSuccess = () => {
	return { type: actionTypes.CREATE_STEP_SUCCESS }
}
export const createStepFail = (error) => {
	return { type: actionTypes.CREATE_STEP_FAIL, error: error }
}
export const createStep = (data, history) => {
	return dispatch => {
		dispatch(createStepStart())
		StepService.createStep(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_STEP, companyData: response })
				history.push(`/steps/${response.id}`)
				dispatch(createStepSuccess())
			})
			.catch(error => {
				dispatch(createStepFail(error))
			})
	}
}


//-----FETCH COMPANIES ACTIONS-----------------------------
export const fetchStepsStart = () => {
	return { type: actionTypes.FETCH_COMPANIES_START }
}
export const fetchStepsSuccess = (steps) => {
	return { type: actionTypes.FETCH_COMPANIES_SUCCESS, stepsList: steps }
}
export const fetchStepsFail = (error) => {
	return { type: actionTypes.FETCH_COMPANIES_FAIL, error: error }
}
export const fetchSteps = () => {
	return dispatch => {
		dispatch(fetchStepsStart())
		StepService.fetchSteps()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_COMPANIES, stepsList: response })
				dispatch(fetchStepsSuccess())
			})
			.catch(error => {
				dispatch(fetchStepsFail(error))
			})
	}
}


//-----UPDATE STEP ACTIONS-----------------------------
export const updateStepStart = () => {
	return { type: actionTypes.UPDATE_STEP_START }
}
export const updateStepSuccess = () => {
	return { type: actionTypes.UPDATE_STEP_SUCCESS }
}
export const updateStepFail = (error) => {
	return { type: actionTypes.UPDATE_STEP_FAIL, error: error }
}
export const updateStep = (data, history) => {
	return dispatch => {
		dispatch(updateStepStart())
		StepService.updateStep(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_STEP, updatedStepData: response })
				history.goBack()
				dispatch(updateStepSuccess())
			})
			.catch(error => {
				dispatch(updateStepFail(error))
			})
	}
}

//-----DELETE STEP ACTIONS-----------------------------
export const deleteStepStart = () => {
	return { type: actionTypes.DELETE_STEP_START }
}
export const deleteStepSuccess = () => {
	return { type: actionTypes.DELETE_STEP_SUCCESS }
}
export const deleteStepFail = (error) => {
	return { type: actionTypes.DELETE_STEP_FAIL, error: error }
}
export const deleteStep = (id, history) => {
	return dispatch => {
		dispatch(deleteStepStart())
		StepService.deleteStep(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_STEP, id: id })
				dispatch(deleteStepSuccess())
				history.push('/steps')
			})
			.catch(error => {
				dispatch(deleteStepFail(error))
			})
	}
}
