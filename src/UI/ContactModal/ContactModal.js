import React from 'react'
import './ContactModal.css'
import ContactBackdrop from './ContactBackdrop'
import { Container, Card, CardBody } from 'reactstrap'

const ContactModal = (props) => {

	return (
		<Container>
			<ContactBackdrop show={props.show} clicked={props.modalClosed} />
			<Card>
				<CardBody
					className="ContactModal"
					style={{
						transform: props.show
							? 'translateY(0)'
							: 'translateY(-100vh)',
						opacity: props.show
							? '1'
							: '0'
					}}>
					{props.children}
				</CardBody>
			</Card>
		</Container>

	)
}

export default ContactModal
