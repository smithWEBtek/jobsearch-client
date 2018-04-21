import * as actionTypes from './actionTypes'
import UserService from '../services/UserService'

//-----CREATE USER ACTIONS-----------------------------
export const createUserStart = () => {
	return { type: actionTypes.CREATE_USER_START }
}
export const createUserSuccess = () => {
	return { type: actionTypes.CREATE_USER_SUCCESS }
}
export const createUserFail = (error) => {
	return { type: actionTypes.CREATE_USER_FAIL, error: error }
}
export const createUser = (data, history) => {
	return dispatch => {
		dispatch(createUserStart())
		UserService.createUser(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_USER, userData: response })
				history.push(`/users/${response.id}`)
				dispatch(createUserSuccess())
			})
			.catch(error => {
				dispatch(createUserFail(error))
			})
	}
}


//-----FETCH USERS ACTIONS-----------------------------
export const fetchUsersStart = () => {
	return { type: actionTypes.FETCH_USERS_START }
}
export const fetchUsersSuccess = (users) => {
	return { type: actionTypes.FETCH_USERS_SUCCESS, usersList: users }
}
export const fetchUsersFail = (error) => {
	return { type: actionTypes.FETCH_USERS_FAIL, error: error }
}
export const fetchUsers = () => {
	return dispatch => {
		dispatch(fetchUsersStart())
		UserService.fetchUsers()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_USERS, usersList: response })
				dispatch(fetchUsersSuccess())
			})
			.catch(error => {
				dispatch(fetchUsersFail(error))
			})
	}
}


//-----UPDATE USER ACTIONS-----------------------------
export const updateUserStart = () => {
	return { type: actionTypes.UPDATE_USER_START }
}
export const updateUserSuccess = () => {
	return { type: actionTypes.UPDATE_USER_SUCCESS }
}
export const updateUserFail = (error) => {
	return { type: actionTypes.UPDATE_USER_FAIL, error: error }
}
export const updateUser = (data, history) => {
	return dispatch => {
		dispatch(updateUserStart())
		UserService.updateUser(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_USER, updatedUserData: response })
				history.goBack()
				dispatch(updateUserSuccess())
			})
			.catch(error => {
				dispatch(updateUserFail(error))
			})
	}
}

//-----DELETE USER ACTIONS-----------------------------
export const deleteUserStart = () => {
	return { type: actionTypes.DELETE_USER_START }
}
export const deleteUserSuccess = () => {
	return { type: actionTypes.DELETE_USER_SUCCESS }
}
export const deleteUserFail = (error) => {
	return { type: actionTypes.DELETE_USER_FAIL, error: error }
}
export const deleteUser = (id, history) => {
	return dispatch => {
		dispatch(deleteUserStart())
		UserService.deleteUser(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_USER, id: id })
				dispatch(deleteUserSuccess())
				history.push('/users')
			})
			.catch(error => {
				dispatch(deleteUserFail(error))
			})
	}
}
