import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
	jobs: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE COMPANY-----------------------------
		case actionTypes.CREATE_COMPANY_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_COMPANY_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_COMPANY_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_COMPANY:
			const newCompany = action.companyData
			return Object.assign({}, state, {
				companies: state.companies.concat(newCompany)
			})


		//-----FETCH COMPANIES-----------------------------
		case actionTypes.FETCH_COMPANIES_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_COMPANIES_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_COMPANIES_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_COMPANIES:
			const companies = action.companiesList
			return Object.assign({}, state, {
				companies: companies
			})


		//-----UPDATE COMPANY-----------------------------
		case actionTypes.UPDATE_COMPANY_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_COMPANY_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_COMPANY_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_COMPANY:
			//const companyData = action.updatedCompanyData
			//debugger
			//const companyIndex = state.companies.findIndex(company => company.id === companyData.id);
			// const stateTemp = {
			//   ...state,
			//   companies: [
			//     ...state.companies.slice(0, companyIndex),
			//     ...state.companies.slice(companyIndex + 1, state.companies.length)
			//   ]
			// };
			const updatedCompaniesArray = state.companies.map(company => company.id === action.updatedCompanyData.id ? action.updatedCompanyData : company)
			return Object.assign({}, state, { companies: updatedCompaniesArray })


		//-----DELETE COMPANY-----------------------------
		case actionTypes.DELETE_COMPANY_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_COMPANY_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_COMPANY_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_COMPANY:
			const updatedCompanies = state.companies.filter(company => company.id !== action.id);
			return Object.assign({}, state, {
				companies: updatedCompanies
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
