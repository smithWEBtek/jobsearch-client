import React, { Component } from 'react'
import Aux from '../../HOC/Aux/Aux'

class CompanySelect extends Component {

	state = {
		company: {}
	}

	handleCompanySelect = (event) => {
		this.setState({
			company: this.props.companies.find(company => company.name === event.target.value)
		})
	}

	render() {
		const companySelectOptions = this.props.companies.map(company => {
			return <option value={company.name} id={company.id} key={company.id}>{company.name}</option>
		})

		return (
			<Aux>
				<h3 htmlFor="selectCompany">select company</h3>
				<select
					value={this.state.company.name}
					onChange={(event) => this.handleCompanySelect(event)}>
					{companySelectOptions}
				</select>
			</Aux>
		)
	}
}

export default CompanySelect