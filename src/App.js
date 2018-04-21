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

					<div className='col DataBorder'>
						<MainNav />
					</div>

					<div className='col'>
						<h4 className='DataBackGround'>Companies</h4>
						<Companies />
					</div>

					<div className='col'>
						<h4 className='DataBackGround'>Contacts</h4>
						<Contacts />
					</div>
					<br />

					<div className='col'>
						<h4 className='DataBackGround'>Jobs</h4>
						<Jobs />
					</div>
					<br />

					<div className='col'>
						<h4 className='DataBackGround'>Users</h4>
						<Users />
					</div>
					<br />

					<div className='col'>
						<h4 className='DataBackGround'>Steps</h4>
						<Steps />
					</div>
					<br />

					<div className='col'>
						<h4 className='DataBackGround'>Tasks</h4>
						<Tasks />
					</div>
					<br />

					<div className='col'>
						<h4 className='DataBackGround'>Logs</h4>
						<Logs />
					</div>
					<br />

				</Container>
			</div>
		);
	}
}

export default App;
