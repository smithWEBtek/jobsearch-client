import React, { Component } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom'

import Companies from '../src/Companies/Companies'
import Contacts from '../src/Contacts/Contacts'
import Jobs from '../src/Jobs/Jobs'
import Logs from '../src/Logs/Logs'
import Steps from '../src/Steps/Steps'
import Tasks from '../src/Tasks/Tasks'
// import Users from '../src/Users/Users'
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

					<Route path="/companies" component={Companies} />

					<Route path="/contacts" component={Contacts} />

					<Route path="/jobs" component={Jobs} />

					{/* <Route path="/users" component={Users} /> */}

					<Route path="/steps" component={Steps} />

					<Route path="/tasks" component={Tasks} />

					<Route path="/logs" component={Logs} />

				</Container>
			</div>
		);
	}
}

export default App;
