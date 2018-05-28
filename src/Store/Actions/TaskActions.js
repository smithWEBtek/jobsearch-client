import * as actionTypes from './ActionTypes'
import TaskService from '../Services/TaskService'

//-----CREATE TASK ACTIONS-----------------------------
export const createTaskStart = () => {
	return { type: actionTypes.CREATE_TASK_START }
}
export const createTaskSuccess = () => {
	return { type: actionTypes.CREATE_TASK_SUCCESS }
}
export const createTaskFail = (error) => {
	return { type: actionTypes.CREATE_TASK_FAIL, error: error }
}
export const createTask = (data, history) => {
	return dispatch => {
		dispatch(createTaskStart())
		TaskService.createTask(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_TASK, taskData: response })
				// history.push(`/tasks/${response.id}`)
				dispatch(createTaskSuccess())
			})
			.catch(error => {
				dispatch(createTaskFail(error))
			})
	}
}


//-----FETCH TASKS ACTIONS-----------------------------
export const fetchTasksStart = () => {
	return { type: actionTypes.FETCH_TASKS_START }
}
export const fetchTasksSuccess = (tasks) => {
	return { type: actionTypes.FETCH_TASKS_SUCCESS, tasksList: tasks }
}
export const fetchTasksFail = (error) => {
	return { type: actionTypes.FETCH_TASKS_FAIL, error: error }
}
export const fetchTasks = () => {
	return dispatch => {
		dispatch(fetchTasksStart())
		TaskService.fetchTasks()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_TASKS, tasksList: response })
				dispatch(fetchTasksSuccess())
			})
			.catch(error => {
				dispatch(fetchTasksFail(error))
			})
	}
}


//-----UPDATE TASK ACTIONS-----------------------------
export const updateTaskStart = () => {
	return { type: actionTypes.UPDATE_TASK_START }
}
export const updateTaskSuccess = () => {
	return { type: actionTypes.UPDATE_TASK_SUCCESS }
}
export const updateTaskFail = (error) => {
	return { type: actionTypes.UPDATE_TASK_FAIL, error: error }
}
export const updateTask = (data, history) => {
	return dispatch => {
		dispatch(updateTaskStart())
		TaskService.updateTask(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_TASK, updatedTaskData: response })
				history.push('/tasks')
				dispatch(updateTaskSuccess())
			})
			.catch(error => {
				dispatch(updateTaskFail(error))
			})
	}
}

//-----DELETE TASK ACTIONS-----------------------------
export const deleteTaskStart = () => {
	return { type: actionTypes.DELETE_TASK_START }
}
export const deleteTaskSuccess = () => {
	return { type: actionTypes.DELETE_TASK_SUCCESS }
}
export const deleteTaskFail = (error) => {
	return { type: actionTypes.DELETE_TASK_FAIL, error: error }
}
export const deleteTask = (id, history) => {
	return dispatch => {
		dispatch(deleteTaskStart())
		TaskService.deleteTask(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_TASK, id: id })
				dispatch(deleteTaskSuccess())
				history.push('/tasks')
			})
			.catch(error => {
				dispatch(deleteTaskFail(error))
			})
	}
}
