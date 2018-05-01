const API_URL = process.env.REACT_APP_DEV_API_URL

const CompanyService = {
	createCompany(company) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ company: company }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/companies`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[CompanyService][createCompany] ERROR: ', error)
			})
	},
	fetchCompanies() {
		return fetch(`${API_URL}/companies`)
			.then(response => response.json())
			.catch(error => {
				console.log('[CompanyService][fetchCompanies] ERROR: ', error)
			})
	},
	updateCompany(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ company: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/companies/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[CompanyService][updateCompany] ERROR: ', error)
			})
	},
	deleteCompany(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/companies/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[CompanyService][deleteCompany] ERROR: ', error)
			})
	}
}

export default CompanyService;
