const API_URL = process.env.REACT_APP_DEV_API_URL || 'https://swt-jobsearch-api.herokuapp.com/api'

const StoreService = {
	backupData() {
		const request = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/backup`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[StoreService][createContact] ERROR: ', error)
			})
	},

}

export default StoreService;
