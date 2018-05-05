import React from 'react'
import './CompanyRow.css'
import { Link } from 'react-router-dom'
import Aux from '../../HOC/Aux/Aux'

const CompanyRow = (props) => {

	return (
		<Aux>
			<tr>
				<th scope="row">{props.company.id}</th>
				<td>
					<Link
						to={`/companies/${props.company.id}`}
						style={{ marginRight: '5px' }}
						key={props.company.id}>{props.company.name}
					</Link>
				</td>
				<td>{props.company.city}</td>
				<td>{props.company.state}</td>
				<td>
					<Link
						to={props.company.url}
						target='blank'>{props.company.name}</Link>
				</td>
				<td><button
					type='button'
					className="Success">
					<Link
						to={`/companies/${props.company.id}`}
						key={props.company.id}>show</Link>
				</button></td>
				<td><button
					type='button'
					className="Edit"
					onClick={() => props.edit(props.company.id)}>edit
        </button></td>
				<td><button
					onClick={() => props.deleteCompany(props.company.id)}
					className="Danger">X</button></td>
			</tr>
		</Aux>
	)
}

export default CompanyRow
