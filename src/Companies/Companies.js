import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'

import { connect } from 'react-redux'
import Company from './Company/Company'
import CreateCompany from './CreateCompany/CreateCompany'
// import CompanyViewer from '../Companies/CompanyViewer'

class Companies extends Component {
	state = {
		companies: []
	}

	componentDidMount() {
		this.props.onFetchCompanies()
	}

	//********CREATE_COMPANY form handling ***************
	createCompanyForm = () => {
		this.setState({ createCompany: true })
	}

	createCompanyFormCancel = () => {
		this.setState({ createCompany: false })
	}

	createCompany = (newCompanyData) => {
		const { history } = this.props
		this.props.onCreateCompany(newCompanyData, history)
		this.setState({ createCompany: false })
	}


	render() {
		let renderedCompanies = this.props.companies.map((company, index) => {
			return (
				<div key={index}>
					<Company company={company} />
				</div>
			)
		})
		return (
			<Container>
				<hr />
				{/*********CREATE COMPANY MODAL********************/}
				<button onClick={this.createCompanyForm}>Add Company</button>
				<Modal
					show={this.state.createCompany}
					modalClosed={this.createCompanyFormCancel}>
					<CreateCompany
						createCompany={(newCompanyData) => this.createCompany(newCompanyData)}
						createCompanyCancel={this.createCompanyFormCancel} />
				</Modal>


				<div>
					{renderedCompanies}
				</div >
			</Container>
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
