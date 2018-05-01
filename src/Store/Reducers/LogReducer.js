import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
	logs: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE LOG-----------------------------
		case actionTypes.CREATE_LOG_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_LOG_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_LOG_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_LOG:
			const newLog = action.logData
			return Object.assign({}, state, {
				logs: state.logs.concat(newLog)
			})


		//-----FETCH LOGS-----------------------------
		case actionTypes.FETCH_LOGS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_LOGS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_LOGS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_LOGS:
			const logs = action.logsList
			return Object.assign({}, state, {
				logs: logs
			})


		//-----UPDATE LOG-----------------------------
		case actionTypes.UPDATE_LOG_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_LOG_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_LOG_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_LOG:
			//const logData = action.updatedLogData
			//debugger
			//const logIndex = state.logs.findIndex(log => log.id === logData.id);
			// const stateTemp = {
			//   ...state,
			//   logs: [
			//     ...state.logs.slice(0, logIndex),
			//     ...state.logs.slice(logIndex + 1, state.logs.length)
			//   ]
			// };
			const updatedCompaniesArray = state.logs.map(log => log.id === action.updatedLogData.id ? action.updatedLogData : log)
			return Object.assign({}, state, { logs: updatedCompaniesArray })


		//-----DELETE LOG-----------------------------
		case actionTypes.DELETE_LOG_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_LOG_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_LOG_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_LOG:
			const updatedCompanies = state.logs.filter(log => log.id !== action.id);
			return Object.assign({}, state, {
				logs: updatedCompanies
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
