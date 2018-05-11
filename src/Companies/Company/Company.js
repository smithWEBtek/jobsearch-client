import React, { Component } from 'react'
import * as actions from '../../Store/Actions/CompanyActions'
// import { Route, Switch, withRouter } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card } from 'reactstrap';
// import EditCompany from './EditCompany/EditCompany'

class Company extends Component {

	state = {
		id: '',
		name: '',
		url: '',
		city: '',
		state: '',
		jobs: [],
		contacts: [],
		tasks: [],
	}

	componentDidMount() {
		this.setState({
			id: this.props.company.id,
			name: this.props.company.name,
			url: this.props.company.url,
			city: this.props.company.city,
			state: this.props.company.state,
			jobs: this.props.company.jobs,
			contacts: this.props.company.contacts,
			tasks: this.props.company.tasks
		})
	}



	render() {

		return (
			<div>
				<Card
					key={this.state.id}
					className='Card'>
					name of company here
				</Card>
			</div >
		);
	};
}

const mapStateToProps = state => {
	return {
		companies: state.com.companies
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onUpdateCompany: (data, history) => dispatch(actions.updateCompany(data, history))
	}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Company));