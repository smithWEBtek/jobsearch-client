const API_URL = process.env.REACT_APP_DEV_API_URL || 'https://swt-jobsearch-api.herokuapp.com/api'

const JobService = {
	createJob(job) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ job: job }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/jobs`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[JobService][createJob] ERROR: ', error)
			})
	},
	fetchJobs() {
		return fetch(`${API_URL}/jobs`)
			.then(response => response.json())
			.catch(error => {
				console.log('[JobService][fetchJobs] ERROR: ', error)
			})
	},
	updateJob(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ job: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/jobs/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[JobService][updateJob] ERROR: ', error)
			})
	},
	deleteJob(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/jobs/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[JobService][deleteJob] ERROR: ', error)
			})
	}
}

export default JobService;
