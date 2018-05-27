import React from 'react'
// import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import './CompaniesList.css'

const CompaniesList = (props) => {
	let sortedCompanies = props.companies.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)
	let renderCompanies = sortedCompanies.map((company, index) => {
		return (
			<tr key={index} className='tableRow'>
				<td
					className='companyHover'
					onClick={() => props.show(company.id)}>{company.name}</td>

				<td>{company.city}</td>
				<td>{company.state}</td>
				<td>jobs</td>
				<td>tasks</td>
				<td>contacts</td>
				<td>
					<Link
						to={company.url}
						target='blank'>{company.url}</Link>
				</td>
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
			<table>
				<thead>
					<tr className='tableRow'>
						<th className="col-sm-1">name
						</th>
						<th>city</th>
						<th>state</th>
						<th>jobs</th>
						<th>tasks</th>
						<th>contacts</th>
						<th>site</th>
						<th>edit</th>
						<th>x</th>
					</tr>
				</thead>
				<tbody>
					{renderCompanies}
				</tbody>
			</table>
		</div >
	)
}

export default CompaniesList
