import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Companies from '../src/Companies/Companies'
import Contacts from '../src/Contacts/Contacts'
import Jobs from '../src/Jobs/Jobs'
import Logs from '../src/Logs/Logs'
import Steps from '../src/Steps/Steps'
import Tasks from '../src/Tasks/Tasks'
import Users from '../src/Users/Users'
import MainNav from '../src/UI/MainNav'

import {
	Container,
	Row
} from 'reactstrap';

class App extends Component {
	state = {
		isOpen: false
	};

	render() {
		return (
			<div>
				<Container>
					<Row>
						{/* <MainNav /> */}
						{/* <Companies /> */}
					</Row>
					<Row>
						<MainNav />
						<Contacts />
					</Row>
					<Row>
						<MainNav />
						<Jobs />
					</Row>
					<Row>
						<MainNav />
						<Logs />
					</Row>
					<Row>
						<MainNav />
						<Steps />
					</Row>
					<Row>
						<MainNav />
						<Tasks />
					</Row>
					<Row>
						<MainNav />
						<Users />
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
