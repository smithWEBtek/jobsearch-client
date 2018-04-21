// const API_URL = 'http://127.0.0.1:3001/api'
const API_URL = 'https://swt-jobsearch-api.herokuapp.com/api'

const UserService = {
	createUser(user) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ user: user }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/users`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[UserService][createUser] ERROR: ', error)
			})
	},
	fetchUsers() {
		return fetch(`${API_URL}/users`)
			.then(response => response.json())
			.catch(error => {
				console.log('[UserService][fetchUsers] ERROR: ', error)
			})
	},
	updateUser(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ user: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/users/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[UserService][updateUser] ERROR: ', error)
			})
	},
	deleteUser(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/users/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[UserService][deleteUser] ERROR: ', error)
			})
	}
}

export default UserService;
