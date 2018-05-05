import React, { Component } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom'
// import Aux from '../src/HOC/Aux/Aux'

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
						<h5 className='DataBackGround'>Companies</h5>
						{/* <Companies /> */}
						<Route path="/companies" component={Companies} />
					</div>

					<div className='col'>
						<h5 className='DataBackGround'>Contacts</h5>
						{/* <Contacts /> */}
						<Route path="/contacts" component={Contacts} />
					</div>
					<br />

					<div className='col'>
						<h5 className='DataBackGround'>Jobs</h5>
						{/* <Jobs /> */}
						<Route path="/jobs" component={Jobs} />
					</div>
					<br />

					<div className='col'>
						<h5 className='DataBackGround'>Users</h5>
						{/* <Users /> */}
						<Route path="/users" component={Users} />
					</div>
					<br />

					<div className='col'>
						<h5 className='DataBackGround'>Steps</h5>
						{/* <Steps /> */}
						<Route path="/steps" component={Steps} />
					</div>
					<br />

					<div className='col'>
						<h5 className='DataBackGround'>Tasks</h5>
						{/* <Tasks /> */}
						<Route path="/tasks" component={Tasks} />
					</div>
					<br />

					<div className='col'>
						<h5 className='DataBackGround'>Logs</h5>
						{/* <Logs /> */}
						<Route path="/logs" component={Logs} />
					</div>
					<br />

				</Container>
			</div>
		);
	}
}

export default App;
