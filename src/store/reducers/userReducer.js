import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
	users: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE USER-----------------------------
		case actionTypes.CREATE_USER_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_USER_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_USER_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_USER:
			const newUser = action.userData
			return Object.assign({}, state, {
				users: state.users.concat(newUser)
			})


		//-----FETCH USERS-----------------------------
		case actionTypes.FETCH_USERS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_USERS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_USERS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_USERS:
			const users = action.usersList
			return Object.assign({}, state, {
				users: users
			})


		//-----UPDATE USER-----------------------------
		case actionTypes.UPDATE_USER_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_USER_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_USER_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_USER:
			//const userData = action.updatedUserData
			//debugger
			//const userIndex = state.users.findIndex(user => user.id === userData.id);
			// const stateTemp = {
			//   ...state,
			//   users: [
			//     ...state.users.slice(0, userIndex),
			//     ...state.users.slice(userIndex + 1, state.users.length)
			//   ]
			// };
			const updatedCompaniesArray = state.users.map(user => user.id === action.updatedUserData.id ? action.updatedUserData : user)
			return Object.assign({}, state, { users: updatedCompaniesArray })


		//-----DELETE USER-----------------------------
		case actionTypes.DELETE_USER_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_USER_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_USER_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_USER:
			const updatedCompanies = state.users.filter(user => user.id !== action.id);
			return Object.assign({}, state, {
				users: updatedCompanies
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
