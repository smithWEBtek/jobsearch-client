import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
	contacts: [],
	loading: false,
	showContact: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE CONTACT-----------------------------
		case actionTypes.CREATE_CONTACT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_CONTACT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_CONTACT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_CONTACT:
			const newContact = action.contactData
			return Object.assign({}, state, {
				contacts: state.contacts.concat(newContact)
			})


		//-----FETCH CONTACTS-----------------------------
		case actionTypes.FETCH_CONTACTS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_CONTACTS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_CONTACTS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_CONTACTS:
			const contacts = action.contactsList
			return Object.assign({}, state, {
				contacts: contacts
			})


		//-----UPDATE CONTACT-----------------------------
		case actionTypes.UPDATE_CONTACT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_CONTACT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_CONTACT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_CONTACT:
			//const contactData = action.updatedContactData
			//debugger
			//const contactIndex = state.contacts.findIndex(contact => contact.id === contactData.id);
			// const stateTemp = {
			//   ...state,
			//   contacts: [
			//     ...state.contacts.slice(0, contactIndex),
			//     ...state.contacts.slice(contactIndex + 1, state.contacts.length)
			//   ]
			// };
			const updatedContactsArray = state.contacts.map(contact => contact.id === action.updatedContactData.id ? action.updatedContactData : contact)
			return Object.assign({}, state, { contacts: updatedContactsArray })


		//-----DELETE CONTACT-----------------------------
		case actionTypes.DELETE_CONTACT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_CONTACT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_CONTACT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_CONTACT:
			const updatedContacts = state.contacts.filter(contact => contact.id !== action.id);
			return Object.assign({}, state, {
				contacts: updatedContacts
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
