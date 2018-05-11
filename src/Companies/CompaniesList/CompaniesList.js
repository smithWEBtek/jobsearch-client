import React from 'react'
import CompanyRow from '../CompanyRow/CompanyRow'
import { Table } from 'reactstrap'
import './CompaniesList.css'

const CompaniesList = (props) => {

	let sortedCompanies = props.companies.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)

	let renderCompanies = sortedCompanies.map((company, index) => {
		return (
			<CompanyRow
				key={index}
				company={company}
				edit={props.edit}
				deleteCompany={props.deleteCompany}
			/>
		)
	})

	return (
		<div>
			<Table striped className="List">
				<thead>
					<tr>
						<th>ID</th>
						<th className="col-md-3">Name</th>
						<th>City</th>
						<th>State</th>
						<th>URL</th>
						<th>Show</th>
						<th>Edit</th>
						<th>X</th>
					</tr>
				</thead>
				<tbody>
					{renderCompanies}
				</tbody>
			</Table>
		</div>
	)
}

export default CompaniesList
