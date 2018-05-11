import React, { Component } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink, Route } from 'react-router-dom'
// import Aux from '../src/HOC/Aux/Aux'

import Companies from '../src/Companies/Companies'
import Contacts from '../src/Contacts/Contacts'
import Jobs from '../src/Jobs/Jobs'
import Logs from '../src/Logs/Logs'
import Steps from '../src/Steps/Steps'
import Tasks from '../src/Tasks/Tasks'
import Users from '../src/Users/Users'
import MainNav from '../src/UI/MainNav/MainNav'

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
						<NavLink to="/companies/">Companies</NavLink>
						<Route path="/companies" component={Companies} />
					</div>

					<div className='col'>
						<NavLink to="/contacts/">Contacts</NavLink>
						<Route path="/contacts" component={Contacts} />
					</div>

					<div className='col'>
						<NavLink to="/jobs/">Jobs</NavLink>
						<Route path="/jobs" component={Jobs} />
					</div>

					<div className='col'>
						<NavLink to="/users/">Users</NavLink>
						<Route path="/users" component={Users} />
					</div>

					<div className='col'>
						<NavLink to="/steps/">Steps</NavLink>
						<Route path="/steps" component={Steps} />
					</div>

					<div className='col'>
						<NavLink to="/tasks/">Tasks</NavLink>
						<Route path="/tasks" component={Tasks} />
					</div>

					<div className='col'>
						<NavLink to="/logs/">Logs</NavLink>
						<Route path="/logs" component={Logs} />
					</div>

				</Container>
			</div>
		);
	}
}

export default App;
