import * as actionTypes from './ActionTypes'
import LogService from '../Services/LogService'

//-----CREATE LOG ACTIONS-----------------------------
export const createLogStart = () => {
	return { type: actionTypes.CREATE_LOG_START }
}
export const createLogSuccess = () => {
	return { type: actionTypes.CREATE_LOG_SUCCESS }
}
export const createLogFail = (error) => {
	return { type: actionTypes.CREATE_LOG_FAIL, error: error }
}
export const createLog = (data, history) => {
	return dispatch => {
		dispatch(createLogStart())
		LogService.createLog(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_LOG, companyData: response })
				history.push(`/logs/${response.id}`)
				dispatch(createLogSuccess())
			})
			.catch(error => {
				dispatch(createLogFail(error))
			})
	}
}


//-----FETCH LOGS ACTIONS-----------------------------
export const fetchLogsStart = () => {
	return { type: actionTypes.FETCH_LOGS_START }
}
export const fetchLogsSuccess = (logs) => {
	return { type: actionTypes.FETCH_LOGS_SUCCESS, logsList: logs }
}
export const fetchLogsFail = (error) => {
	return { type: actionTypes.FETCH_LOGS_FAIL, error: error }
}
export const fetchLogs = () => {
	return dispatch => {
		dispatch(fetchLogsStart())
		LogService.fetchLogs()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_LOGS, logsList: response })
				dispatch(fetchLogsSuccess())
			})
			.catch(error => {
				dispatch(fetchLogsFail(error))
			})
	}
}


//-----UPDATE LOG ACTIONS-----------------------------
export const updateLogStart = () => {
	return { type: actionTypes.UPDATE_LOG_START }
}
export const updateLogSuccess = () => {
	return { type: actionTypes.UPDATE_LOG_SUCCESS }
}
export const updateLogFail = (error) => {
	return { type: actionTypes.UPDATE_LOG_FAIL, error: error }
}
export const updateLog = (data, history) => {
	return dispatch => {
		dispatch(updateLogStart())
		LogService.updateLog(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_LOG, updatedLogData: response })
				history.goBack()
				dispatch(updateLogSuccess())
			})
			.catch(error => {
				dispatch(updateLogFail(error))
			})
	}
}

//-----DELETE LOG ACTIONS-----------------------------
export const deleteLogStart = () => {
	return { type: actionTypes.DELETE_LOG_START }
}
export const deleteLogSuccess = () => {
	return { type: actionTypes.DELETE_LOG_SUCCESS }
}
export const deleteLogFail = (error) => {
	return { type: actionTypes.DELETE_LOG_FAIL, error: error }
}
export const deleteLog = (id, history) => {
	return dispatch => {
		dispatch(deleteLogStart())
		LogService.deleteLog(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_LOG, id: id })
				dispatch(deleteLogSuccess())
				history.push('/logs')
			})
			.catch(error => {
				dispatch(deleteLogFail(error))
			})
	}
}
