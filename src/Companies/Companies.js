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

	editCompanyUpdate = (data) => {
		let { history } = this.props
		this.props.onUpdateCompany(data, history)
		this.setState({
			editCompany: false,
			company: null
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
				<div>
					<CompaniesList
						companies={this.props.companies}
						deleteCompany={this.deleteCompany}
						editCompany={(data) => this.editCompanyUpdate(data)}
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
				<button onClick={this.editCompanyForm}>Edit Company</button>
				<Modal
					show={this.state.editCompany}
					modalClosed={this.closeEditCompanyForm}>
					{this.state.editCompany ?
						<EditCompany
							company_id={this.state.company.id}
							close={() => this.closeEditCompanyForm()}
						/> : null}

				</Modal>

				{/**********COMPANIES LIST************************/}
				<div>
					<Switch>
						<Route path={`${match.url}/:id/edit`} exact component={EditCompany} />
						<Route path={`${match.url}/new`} exact component={CreateCompany} />
						<Route path={`${match.url}/:id`} exact component={Company} />
						<Route path={match.url} exact />
					</Switch>
				</div>
				<div>
					<h5 className="IndexHeaderBackground">ALL companies</h5>
					<CompaniesList
						companies={companies}
						edit={(id) => this.showEditCompanyForm(id)}
						deleteCompany={(id) => this.deleteCompany(id)}
						likeCompany={(id) => this.likeCompany(id)}
					/>
				</div>
				<hr />
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
		onUpdateCompany: (id, history) => dispatch(actions.updateCompany(id, history))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Companies))
