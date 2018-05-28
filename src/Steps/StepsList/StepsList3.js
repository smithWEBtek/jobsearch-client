import React from 'react'
import StepsCategory from '../StepsCategory/StepsCategory'
import './StepsList.css'

const StepsList = (props) => {

	let categories = props.steps.map(step => step.category).filter(function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	});

	console.log('categories: ', categories);

	let categoryGroups = categories.map((category, index) => {
		return (
			<div key={index}>
				<h2>{category}</h2>
				<StepsCategory
					steps={props.steps.filter(step => step.category === category).filter(function onlyUnique(value, index, self) {
						return self.indexOf(value) === index
					})} />
			</div>
		)
	})

	return (
		<div>
			{categoryGroups}
		</div>
	)
}

export default StepsList
