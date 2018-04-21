import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'

import { connect } from 'react-redux';
import Company from './Company'
// import CompanyViewer from '../Companies/CompanyViewer'

class Companies extends Component {
	state = {
		companies_due: [],
		companies_complete: []
	}

	componentDidMount() {
		console.log(this.props);
		this.props.onFetchCompanies()
	}

	// handleClickCompany = (code) => {
	// 	this.setState({
	// 		results_url: 'http://netflix.com/browse/company/' + code
	// 	})
	// }

	render() {
		let renderedCompanies = this.props.companies.map((company, index) => {

			return (
				<div key={index}>
					<Company company={company} />
				</div>
			)
		})

		return (
			<div>
				{renderedCompanies}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		companies: state.com.companies
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchCompanies: () => dispatch(actions.fetchCompanies())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies)
