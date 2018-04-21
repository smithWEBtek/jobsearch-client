import React, { Component } from 'react';

import './App.css'

import Companies from '../src/Companies/Companies'
import Contacts from '../src/Contacts/Contacts'
import Jobs from '../src/Jobs/Jobs'
import Logs from '../src/Logs/Logs'
import Steps from '../src/Steps/Steps'
import Tasks from '../src/Tasks/Tasks'
import Users from '../src/Users/Users'
import MainNav from '../src/UI/MainNav'

import { Container } from 'reactstrap';

class App extends Component {
	state = {
		isOpen: false
	};

	render() {
		return (
			<div>
				<Container>

					<div className='col MainNav'>
						<MainNav />
					</div>

					<div className='col'>
						<h3>Companies</h3>
						{/* <Companies /> */}
					</div>

					<div className='col'>
						<h3>Users</h3>
						<Users />
					</div>
					<br />

					<div className='col'>
						<h3>Jobs</h3>
						<Jobs />
					</div>
					<br />

					<div className='col'>
						<h3>Contacts</h3>
						<Contacts />
					</div>
					<br />

					<div className='col'>
						<h3>Tasks</h3>
						<Tasks />
					</div>
					<br />

					<div className='col'>
						<h3>Logs</h3>
						<Logs />
					</div>
					<br />

					<div className='col'>
						<h3>Steps</h3>
						<Steps />
					</div>
					<br />

				</Container>
			</div>
		);
	}
}

export default App;
