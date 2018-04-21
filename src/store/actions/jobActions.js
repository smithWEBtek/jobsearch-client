import * as actionTypes from './actionTypes'
import JobService from '../services/JobService'

//-----CREATE JOB ACTIONS-----------------------------
export const createJobStart = () => {
	return { type: actionTypes.CREATE_JOB_START }
}
export const createJobSuccess = () => {
	return { type: actionTypes.CREATE_JOB_SUCCESS }
}
export const createJobFail = (error) => {
	return { type: actionTypes.CREATE_JOB_FAIL, error: error }
}
export const createJob = (data, history) => {
	return dispatch => {
		dispatch(createJobStart())
		JobService.createJob(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_JOB, companyData: response })
				history.push(`/jobs/${response.id}`)
				dispatch(createJobSuccess())
			})
			.catch(error => {
				dispatch(createJobFail(error))
			})
	}
}


//-----FETCH JOBS ACTIONS-----------------------------
export const fetchJobsStart = () => {
	return { type: actionTypes.FETCH_JOBS_START }
}
export const fetchJobsSuccess = (jobs) => {
	return { type: actionTypes.FETCH_JOBS_SUCCESS, jobsList: jobs }
}
export const fetchJobsFail = (error) => {
	return { type: actionTypes.FETCH_JOBS_FAIL, error: error }
}
export const fetchJobs = () => {
	return dispatch => {
		dispatch(fetchJobsStart())
		JobService.fetchJobs()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_JOBS, jobsList: response })
				dispatch(fetchJobsSuccess())
			})
			.catch(error => {
				dispatch(fetchJobsFail(error))
			})
	}
}


//-----UPDATE JOB ACTIONS-----------------------------
export const updateJobStart = () => {
	return { type: actionTypes.UPDATE_JOB_START }
}
export const updateJobSuccess = () => {
	return { type: actionTypes.UPDATE_JOB_SUCCESS }
}
export const updateJobFail = (error) => {
	return { type: actionTypes.UPDATE_JOB_FAIL, error: error }
}
export const updateJob = (data, history) => {
	return dispatch => {
		dispatch(updateJobStart())
		JobService.updateJob(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_JOB, updatedJobData: response })
				history.goBack()
				dispatch(updateJobSuccess())
			})
			.catch(error => {
				dispatch(updateJobFail(error))
			})
	}
}

//-----DELETE JOB ACTIONS-----------------------------
export const deleteJobStart = () => {
	return { type: actionTypes.DELETE_JOB_START }
}
export const deleteJobSuccess = () => {
	return { type: actionTypes.DELETE_JOB_SUCCESS }
}
export const deleteJobFail = (error) => {
	return { type: actionTypes.DELETE_JOB_FAIL, error: error }
}
export const deleteJob = (id, history) => {
	return dispatch => {
		dispatch(deleteJobStart())
		JobService.deleteJob(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_JOB, id: id })
				dispatch(deleteJobSuccess())
				history.push('/jobs')
			})
			.catch(error => {
				dispatch(deleteJobFail(error))
			})
	}
}
