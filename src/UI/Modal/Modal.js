import React from 'react'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import { Container, Card, CardBody } from 'reactstrap'

const Modal = (props) => {

	return (
		<Container>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<Card>
				<CardBody
					className="Modal"
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

export default Modal
