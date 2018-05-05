import React, { Component } from 'react'
import * as actions from '../Store/Actions/Index'
import { Route, Switch, withRouter } from 'react-router-dom'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'
import CompaniesList from './CompaniesList/CompaniesList'
import { connect } from 'react-redux'
import CreateCompany from './CreateCompany/CreateCompany'
import EditCompany from './EditCompany/EditCompany'
import Company from './Company/Company'


class Companies extends Component {
	state = {
		company: null,
		createCompany: false,
		editCompany: false,
		rerender: false
	}

	componentDidMount() {
		this.props.onFetchCompanies()
	}

	//********CREATE_COMPANY form handling ***************
	createCompanyForm = () => {
		this.setState({ createCompany: true })
	}

	createCompany = (newCompanyData) => {
		const { history } = this.props
		this.props.onCreateCompany(newCompanyData, history)
		this.setState({ createCompany: false })
	}

	createCompanyFormCancel = () => {
		this.setState({ createCompany: false })
	}

	//********EDIT_COMPANY form handling ****************
	showEditCompanyForm = (id) => {
		let company = this.props.companies.find(company => company.id === id)
		let copyOfCompany = { ...company }
		this.setState({
			company: copyOfCompany,
			editCompany: true
		})
	}

	closeEditCompanyForm = () => {
		this.setState({
			editCompany: false,
			company: null
		})
	}

	//********DELETE_COMPANY form handling ****************
	deleteCompany = (id) => {
		let { history } = this.props
		this.props.onDeleteCompany(id, history)
	}

	render() {
		const { match, companies } = this.props

		return (
			<Container>
				<hr />
				{/**********COMPANIES LIST************************/}
				<div>
					<CompaniesList
						companies={companies}
						deleteCompany={this.deleteCompany}
						edit={(id) => this.showEditCompanyForm(id)}
					/>
				</div >

				{/*********CREATE COMPANY MODAL********************/}
				<button onClick={this.createCompanyForm}>Add Company</button>
				<Modal
					show={this.state.createCompany}
					modalClosed={this.createCompanyFormCancel}>
					<CreateCompany
						createCompany={(newCompanyData) => this.createCompany(newCompanyData)}
						createCompanyCancel={this.createCompanyFormCancel} />
				</Modal>

				{/*********EDIT COMPANY MODAL********************/}
				<Modal
					show={this.state.editCompany}
					modalClosed={this.closeEditCompanyForm}>
					{this.state.company ?
						<EditCompany
							company={this.state.company}
							edit={(id) => this.showEditCompanyForm(id)}
							// update={(data, history) => this.props.onUpdateCompany(data, history)}
							close={() => this.closeEditCompanyForm()}
						/> : null}
				</Modal>

				<div>
					<Switch>
						<Route path={`${match.url}/:id/edit`} exact component={EditCompany} />
						<Route path={`${match.url}/new`} exact component={CreateCompany} />
						<Route path={`${match.url}/:id`} exact component={Company} />
						<Route path={match.url} exact />
					</Switch>
				</div>
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
		onFetchCompanies: () => dispatch(actions.fetchCompanies()),
		onDeleteCompany: (id, history) => dispatch(actions.deleteCompany(id, history)),
		onCreateCompany: (data) => dispatch(actions.createCompany(data)),
		onUpdateCompany: (data, history) => dispatch(actions.updateCompany(data, history))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Companies))
