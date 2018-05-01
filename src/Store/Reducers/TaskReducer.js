import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
	tasks: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE TASK-----------------------------
		case actionTypes.CREATE_TASK_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_TASK_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_TASK_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_TASK:
			const newTask = action.taskData
			return Object.assign({}, state, {
				tasks: state.tasks.concat(newTask)
			})


		//-----FETCH TASKS-----------------------------
		case actionTypes.FETCH_TASKS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_TASKS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_TASKS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_TASKS:
			const tasks = action.tasksList
			return Object.assign({}, state, {
				tasks: tasks
			})


		//-----UPDATE TASK-----------------------------
		case actionTypes.UPDATE_TASK_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_TASK_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_TASK_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_TASK:
			//const taskData = action.updatedTaskData
			//debugger
			//const taskIndex = state.tasks.findIndex(task => task.id === taskData.id);
			// const stateTemp = {
			//   ...state,
			//   tasks: [
			//     ...state.tasks.slice(0, taskIndex),
			//     ...state.tasks.slice(taskIndex + 1, state.tasks.length)
			//   ]
			// };
			const updatedTasksArray = state.tasks.map(task => task.id === action.updatedTaskData.id ? action.updatedTaskData : task)
			return Object.assign({}, state, { tasks: updatedTasksArray })


		//-----DELETE TASK-----------------------------
		case actionTypes.DELETE_TASK_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_TASK_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_TASK_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_TASK:
			const updatedTasks = state.tasks.filter(task => task.id !== action.id);
			return Object.assign({}, state, {
				tasks: updatedTasks
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
