import React, { Component } from 'react';
import { CardGroup, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import SingleImage from './SingleImage.js';

class Images extends Component {
	constructor(props) {
		super(props)

		this.state = {
			locations: props.locations,
			open: false
		} 
	}

	toggleOpen() {
		this.setState({ open: !this.state.open })
		console.log(this.state.open)
	}

	render() {
		return < div className="animated fadeIn" >

			<Modal isOpen={this.state.open} toggle={this.toggleOpen}
				className={'modal-success'}>
				<ModalHeader toggle={this.toggleOpen}>Modal title</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
         </ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={this.toggleOpen}>Cancel</Button>
				</ModalFooter>
			</Modal>

			<Row className="container tall">
				{this.state.locations.map((loc) =>
					<SingleImage url={loc.img} name={loc.name} toggleOpen={() => { this.toggleOpen }} />
				)}
			</Row>
			<Button block color="light">Light</Button>
		</div >
	}
}

export default Images;
