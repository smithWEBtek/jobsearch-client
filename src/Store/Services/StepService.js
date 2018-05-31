const API_URL = process.env.REACT_APP_DEV_API_URL

const StepService = {
	createStep(step) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ step: step }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/steps`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[StepService][createStep] ERROR: ', error)
			})
	},
	fetchSteps() {
		return fetch(`${API_URL}/steps`)
			.then(response => response.json()
			)
			.catch(error => {
				console.log('[StepService][fetchSteps] ERROR: ', error)
			})
	},
	updateStep(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ step: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/steps/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[StepService][updateStep] ERROR: ', error)
			})
	},
	deleteStep(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/steps/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[StepService][deleteStep] ERROR: ', error)
			})
	}
}

export default StepService;
