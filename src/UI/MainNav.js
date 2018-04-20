import React, { Component } from 'react';
import {
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
							<NavLink href="/components/">Companies</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Contacts</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Jobs</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Tasks</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Users</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Steps</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Logs</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default MainNav;