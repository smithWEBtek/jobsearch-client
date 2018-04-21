import React, { Component } from 'react'
import * as actions from '../store/actions/index'
import { connect } from 'react-redux';
import User from './User'
// import UserViewer from '../Users/UserViewer'

class Users extends Component {
	state = {
		users_due: [],
		users_complete: []
	}

	componentDidMount() {
		this.props.onFetchUsers()
	}

	// handleClickUser = (code) => {
	// 	this.setState({
	// 		results_url: 'http://netflix.com/browse/user/' + code
	// 	})
	// }

	render() {
		let renderedUsers = this.props.users.map((user, index) => {
			return (
				<div key={index}>
					<User user={user} />
				</div>
			)
		})

		return (
			<div>
				{renderedUsers}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		users: state.usr.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchUsers: () => dispatch(actions.fetchUsers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
