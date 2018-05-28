import React from 'react'
// import { Table } from 'reactstrap'

import './StepsList.css'

const StepsList = (props) => {

	let categories = props.steps.map(step => step.category).filter(function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	});

	console.log('categories: ', categories);

	let sortedSteps = props.steps.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)
	let renderSteps = sortedSteps.map((step, index) => {
		return (
			<tr key={index} className='tableRow'>
				<td
					className='stepHover'
					onClick={() => props.show(step.id)}>{step.name}</td>

				<td>{step.category}</td>

				<td><button
					type='button'
					className="Edit"
					onClick={() => props.edit(step.id)}>edit
        </button></td>
				<td><button
					onClick={() => props.deleteStep(step.id)}
					className="Delete">x</button></td>
			</tr>
		)
	})

	return (
		<div>
			<p>Categories: {categories} </p>
			<table>
				<thead>
					<tr className='tableRow'>
						<th className="col-sm-1">name
						</th>
						<th>category</th>

						<th>edit</th>
						<th>x</th>
					</tr>
				</thead>
				<tbody>
					{renderSteps}
				</tbody>
			</table>
		</div >
	)
}

export default StepsList
