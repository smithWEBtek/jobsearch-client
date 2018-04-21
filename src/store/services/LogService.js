// const API_URL = 'http://127.0.0.1:3001/api'
const API_URL = 'https://swt-jobsearch-api.herokuapp.com/api'

const LogService = {
	createLog(log) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ log: log }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/logs`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[LogService][createLog] ERROR: ', error)
			})
	},
	fetchLogs() {
		return fetch(`${API_URL}/logs`)
			.then(response => response.json())
			.catch(error => {
				console.log('[LogService][fetchLogs] ERROR: ', error)
			})
	},
	updateLog(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ log: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/logs/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[LogService][updateLog] ERROR: ', error)
			})
	},
	deleteLog(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/logs/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[LogService][deleteLog] ERROR: ', error)
			})
	}
}

export default LogService;
