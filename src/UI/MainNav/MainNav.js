import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import * as actions from '../../Store/Actions/Index'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import './MainNav.css'

class MainNav extends Component {

	render() {
		return (
			<div>
				<Button>
					<Link to="/companies/">Companies</Link>
				</Button>
				<Button>
					<Link to="/contacts/">Contacts</Link>
				</Button>
				<Button>
					<Link to="/jobs/">Jobs</Link>
				</Button>
				<Button>
					<Link to="/users/">Users</Link>
				</Button>
				<Button>
					<Link to="/steps/">Steps</Link>
				</Button>
				<Button>
					<Link to="/tasks/">Tasks</Link>
				</Button>
				<Button>
					<Link to="/logs/">Logs</Link>
				</Button>
				<Button onClick={actions.backupData()}>BackupData</Button>
			</div>
		);
	}
}

export default MainNav;