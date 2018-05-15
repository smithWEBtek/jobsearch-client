import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import * as actions from '../../Store/Actions/Index'

import {
	Button,
	Navbar,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

class MainNav extends Component {

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/companies/">Companies</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contacts/">Contacts</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/jobs/">Jobs</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/users/">Users</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/steps/">Steps</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/tasks/">Tasks</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/logs/">Logs</NavLink>
						</NavItem>
						<NavItem>
							<Button onClick={actions.backupData()}>BackupData</Button>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default MainNav;