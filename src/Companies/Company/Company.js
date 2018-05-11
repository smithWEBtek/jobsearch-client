import React from 'react';
import { Card } from 'reactstrap';
import { withRouter } from 'react-router-dom'
const Company = (props) => {
	console.log('props: ', props);
	return (
		<div>
			<Card
				key={props}
				className='Card'>
				<h1>company data from Card component here....</h1>
			</Card>
		</div>
	);
};

export default withRouter(Company);