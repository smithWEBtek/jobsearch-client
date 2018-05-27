import * as actionTypes from './ActionTypes'
import ContactService from '../Services/ContactService'

//-----CREATE CONTACT ACTIONS-----------------------------
export const createContactStart = () => {
	return { type: actionTypes.CREATE_CONTACT_START }
}
export const createContactSuccess = () => {
	return { type: actionTypes.CREATE_CONTACT_SUCCESS }
}
export const createContactFail = (error) => {
	return { type: actionTypes.CREATE_CONTACT_FAIL, error: error }
}
export const createContact = (data, history) => {
	return dispatch => {
		dispatch(createContactStart())
		ContactService.createContact(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_CONTACT, contactData: response })
				history.push(`/contacts/${response.id}`)
				dispatch(createContactSuccess())
			})
			.catch(error => {
				dispatch(createContactFail(error))
			})
	}
}


//-----FETCH CONTACTS ACTIONS-----------------------------
export const fetchContactsStart = () => {
	return { type: actionTypes.FETCH_CONTACTS_START }
}
export const fetchContactsSuccess = (contacts) => {
	return { type: actionTypes.FETCH_CONTACTS_SUCCESS, contactsList: contacts }
}
export const fetchContactsFail = (error) => {
	return { type: actionTypes.FETCH_CONTACTS_FAIL, error: error }
}
export const fetchContacts = () => {
	return dispatch => {
		dispatch(fetchContactsStart())
		ContactService.fetchContacts()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_CONTACTS, contactsList: response })
				dispatch(fetchContactsSuccess())
			})
			.catch(error => {
				dispatch(fetchContactsFail(error))
			})
	}
}


//-----UPDATE CONTACT ACTIONS-----------------------------
export const updateContactStart = () => {
	return { type: actionTypes.UPDATE_CONTACT_START }
}
export const updateContactSuccess = () => {
	return { type: actionTypes.UPDATE_CONTACT_SUCCESS }
}
export const updateContactFail = (error) => {
	return { type: actionTypes.UPDATE_CONTACT_FAIL, error: error }
}
export const updateContact = (data, history) => {
	return dispatch => {
		dispatch(updateContactStart())
		ContactService.updateContact(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_CONTACT, updatedContactData: response })
				history.goBack()
				dispatch(updateContactSuccess())
			})
			.catch(error => {
				dispatch(updateContactFail(error))
			})
	}
}

//-----DELETE CONTACT ACTIONS-----------------------------
export const deleteContactStart = () => {
	return { type: actionTypes.DELETE_CONTACT_START }
}
export const deleteContactSuccess = () => {
	return { type: actionTypes.DELETE_CONTACT_SUCCESS }
}
export const deleteContactFail = (error) => {
	return { type: actionTypes.DELETE_CONTACT_FAIL, error: error }
}
export const deleteContact = (id, history) => {
	return dispatch => {
		dispatch(deleteContactStart())
		ContactService.deleteContact(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_CONTACT, id: id })
				dispatch(deleteContactSuccess())
				history.push('/contacts')
			})
			.catch(error => {
				dispatch(deleteContactFail(error))
			})
	}
}
