import * as actionTypes from './ActionTypes'
import CompanyService from '../Services/CompanyService'

//-----CREATE COMPANY ACTIONS-----------------------------
export const createCompanyStart = () => {
	return { type: actionTypes.CREATE_COMPANY_START }
}
export const createCompanySuccess = () => {
	return { type: actionTypes.CREATE_COMPANY_SUCCESS }
}
export const createCompanyFail = (error) => {
	return { type: actionTypes.CREATE_COMPANY_FAIL, error: error }
}
export const createCompany = (data, history) => {
	return dispatch => {
		dispatch(createCompanyStart())
		CompanyService.createCompany(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_COMPANY, companyData: response })
				history.push(`/companies/${response.id}`)
				dispatch(createCompanySuccess())
			})
			.catch(error => {
				dispatch(createCompanyFail(error))
			})
	}
}


//-----FETCH COMPANIES ACTIONS-----------------------------
export const fetchCompaniesStart = () => {
	return { type: actionTypes.FETCH_COMPANIES_START }
}
export const fetchCompaniesSuccess = (companies) => {
	return { type: actionTypes.FETCH_COMPANIES_SUCCESS, companiesList: companies }
}
export const fetchCompaniesFail = (error) => {
	return { type: actionTypes.FETCH_COMPANIES_FAIL, error: error }
}
export const fetchCompanies = () => {
	return dispatch => {
		dispatch(fetchCompaniesStart())
		CompanyService.fetchCompanies()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_COMPANIES, companiesList: response })
				dispatch(fetchCompaniesSuccess())
			})
			.catch(error => {
				dispatch(fetchCompaniesFail(error))
			})
	}
}


//-----UPDATE COMPANY ACTIONS-----------------------------
export const updateCompanyStart = () => {
	return { type: actionTypes.UPDATE_COMPANY_START }
}
export const updateCompanySuccess = () => {
	return { type: actionTypes.UPDATE_COMPANY_SUCCESS }
}
export const updateCompanyFail = (error) => {
	return { type: actionTypes.UPDATE_COMPANY_FAIL, error: error }
}
export const updateCompany = (data, history) => {

	console.log('[data @ CompanyActions.updateCompany]', data)

	return dispatch => {
		dispatch(updateCompanyStart())
		CompanyService.updateCompany(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_COMPANY, updatedCompanyData: response })
				// history.goBack()
				history.push('/')
				dispatch(updateCompanySuccess())
			})
			.catch(error => {
				dispatch(updateCompanyFail(error))
			})
	}
}

//-----DELETE COMPANY ACTIONS-----------------------------
export const deleteCompanyStart = () => {
	return { type: actionTypes.DELETE_COMPANY_START }
}
export const deleteCompanySuccess = () => {
	return { type: actionTypes.DELETE_COMPANY_SUCCESS }
}
export const deleteCompanyFail = (error) => {
	return { type: actionTypes.DELETE_COMPANY_FAIL, error: error }
}
export const deleteCompany = (id, history) => {
	return dispatch => {
		dispatch(deleteCompanyStart())
		CompanyService.deleteCompany(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_COMPANY, id: id })
				dispatch(deleteCompanySuccess())
				history.push('/companies')
			})
			.catch(error => {
				dispatch(deleteCompanyFail(error))
			})
	}
}
