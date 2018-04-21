import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Tasks from '../src/Tasks/Tasks'
import Companies from '../src/Companies/Companies'
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
						<MainNav />
					</Row>
					<Row>
						<Tasks />
					</Row>
					<Row>
						<MainNav />
						<Companies />
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
