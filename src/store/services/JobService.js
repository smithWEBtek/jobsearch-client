// const API_URL = 'http://127.0.0.1:3001/api'
const API_URL = 'https://swt-jobsearch-api.herokuapp.com/api'

const TaskService = {
	createTask(task) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ task: task }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/tasks`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[TaskService][createTask] ERROR: ', error)
			})
	},
	fetchTasks() {
		return fetch(`${API_URL}/tasks`)
			.then(response => response.json())
			.catch(error => {
				console.log('[TaskService][fetchTasks] ERROR: ', error)
			})
	},
	updateTask(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ task: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/tasks/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[TaskService][updateTask] ERROR: ', error)
			})
	},
	deleteTask(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/tasks/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[TaskService][deleteTask] ERROR: ', error)
			})
	}
}

export default TaskService;
