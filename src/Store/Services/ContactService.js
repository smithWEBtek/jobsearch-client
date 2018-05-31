const API_URL = process.env.REACT_APP_DEV_API_URL || 'https://swt-jobsearch-api.herokuapp.com/api'

const ContactService = {
	createContact(contact) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ contact: contact }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/contacts`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[ContactService][createContact] ERROR: ', error)
			})
	},
	fetchContacts() {
		return fetch(`${API_URL}/contacts`)
			.then(response => response.json())
			.catch(error => {
				console.log('[ContactService][fetchContacts] ERROR: ', error)
			})
	},
	updateContact(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ contact: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/contacts/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[ContactService][updateContact] ERROR: ', error)
			})
	},
	deleteContact(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/contacts/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[ContactService][deleteContact] ERROR: ', error)
			})
	}
}

export default ContactService;
