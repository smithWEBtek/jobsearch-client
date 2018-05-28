import React from 'react';

const StepsCategory = (props) => {

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
		props.steps.map(step => {
			return (
				<div>
					<table>
						<thead>
							<tr className='tableRow'>
								<th>category</th>
								<th>x</th>
							</tr>
						</thead>
						<tbody>
							{renderSteps}
						</tbody>
					</table>
				</div >
			)
		})
	)
};

export default StepsCategory;
