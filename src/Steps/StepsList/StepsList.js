import React, { Component } from 'react'
// import { Table } from 'reactstrap'

import './StepsList.css'

class StepsList extends Component {

	state = {
		steps: [],
		categories: []
	}

	componentDidMount() {
		this.setState({
			steps: this.props.steps
		})
		this.groupCategories(this.props.steps);
	}

	groupCategories = (steps) => {
		let categories = []
		steps.forEach(step => {
			categories.push(step.category)
		})
		this.setState({ categories })
	}

	render() {

		let sortedSteps = this.props.steps.sort((a, b) => a.category.toLowerCase() < b.category.toLowerCase() ? -1 : a.category.toLowerCase() > b.category.toLowerCase() ? 1 : 0)
		let renderSteps = sortedSteps.map((step, index) => {
			return (
				<tr key={index} className='tableRow'>
					<td
						className='stepHover'
						onClick={() => this.props.show(step.id)}>{step.name}</td>

					<td>{step.category}</td>

					<td><button
						type='button'
						className="Edit"
						onClick={() => this.props.edit(step.id)}>edit
        </button></td>
					<td><button
						onClick={() => this.props.deleteStep(step.id)}
						className="Delete">x</button></td>
				</tr>
			)
		})


		return (
			<div>
				<table>
					<thead>
						<tr className='tableRow'>
							<th>name
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
}

export default StepsList
