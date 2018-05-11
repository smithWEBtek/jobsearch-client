import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import './CompaniesList.css'

const CompaniesList = (props) => {
	let sortedCompanies = props.companies.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)
	let renderCompanies = sortedCompanies.map((company, index) => {
		return (
			<tr key={index}>
				<th>{company.id}</th>
				<td>{company.name}</td>
				<td>{company.city}</td>
				<td>{company.state}</td>
				<td>jobs</td>
				<td>tasks</td>
				<td>contacts</td>
				<td>
					<Link
						to={company.url}
						target='blank'>site</Link>
				</td>
				<td><button
					type='button'
					className="Success"
					onClick={() => props.show(company.id)}>show
        </button></td>
				<td><button
					type='button'
					className="Edit"
					onClick={() => props.edit(company.id)}>edit
        </button></td>
				<td><button
					onClick={() => props.deleteCompany(company.id)}
					className="Danger">x</button></td>
			</tr>
		)
	})

	return (
		<div>
			<Table striped className="List">
				<thead>
					<tr>
						<th>id</th>
						<th className="col-sm-1">name
						</th>
						<th>city</th>
						<th>state</th>
						<th>jobs</th>
						<th>tasks</th>
						<th>contacts</th>
						<th>site</th>
						<th>show</th>
						<th>edit</th>
						<th>x</th>
					</tr>
				</thead>
				<tbody>
					{renderCompanies}
				</tbody>
			</Table>
		</div >
	)
}

export default CompaniesList
