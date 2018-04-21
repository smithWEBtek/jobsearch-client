import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
	jobs: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE JOB-----------------------------
		case actionTypes.CREATE_JOB_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_JOB_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_JOB_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_JOB:
			const newJob = action.jobData
			return Object.assign({}, state, {
				jobs: state.jobs.concat(newJob)
			})


		//-----FETCH JOBS-----------------------------
		case actionTypes.FETCH_JOBS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_JOBS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_JOBS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_JOBS:
			const jobs = action.jobsList
			return Object.assign({}, state, {
				jobs: jobs
			})


		//-----UPDATE JOB-----------------------------
		case actionTypes.UPDATE_JOB_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_JOB_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_JOB_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_JOB:
			//const jobData = action.updatedJobData
			//debugger
			//const jobIndex = state.jobs.findIndex(job => job.id === jobData.id);
			// const stateTemp = {
			//   ...state,
			//   jobs: [
			//     ...state.jobs.slice(0, jobIndex),
			//     ...state.jobs.slice(jobIndex + 1, state.jobs.length)
			//   ]
			// };
			const updatedCompaniesArray = state.jobs.map(job => job.id === action.updatedJobData.id ? action.updatedJobData : job)
			return Object.assign({}, state, { jobs: updatedCompaniesArray })


		//-----DELETE JOB-----------------------------
		case actionTypes.DELETE_JOB_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_JOB_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_JOB_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_JOB:
			const updatedCompanies = state.jobs.filter(job => job.id !== action.id);
			return Object.assign({}, state, {
				jobs: updatedCompanies
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
