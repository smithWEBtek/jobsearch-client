import React from 'react'
// import { Table } from 'reactstrap'
// import { Link } from 'react-router-dom'
import './TasksList.css'

const TasksList = (props) => {
	let sortedTasks = props.tasks.sort((a, b) => a.priority < b.priority ? -1 : a.priority > b.priority ? 1 : 0)
	let renderTasks = sortedTasks.map((task, index) => {
		return (
			<tr key={index} className='tableRow'>
				<td
					className='taskHover'
					onClick={() => props.show(task.id)}>{task.title}</td>
				<td>{task.priority}</td>
				<td>{task.due_date}</td>
				<td>{task.notes}</td>

				<td><button
					type='button'
					className="Edit"
					onClick={() => props.edit(task.id)}>edit
        </button></td>
				<td><button
					onClick={() => props.deleteTask(task.id)}
					className="Delete">X</button></td>
			</tr>
		)
	})

	return (
		<div>
			<table>
				<thead>
					<tr className='tableRow'>
						<th className="col-sm-1">title
						</th>
						<th>priority</th>
						<th>due_date</th>
						<th>notes</th>

						<th>edit</th>
						<th>X</th>
					</tr>
				</thead>
				<tbody>
					{renderTasks}
				</tbody>
			</table>
		</div >
	)
}

export default TasksList
