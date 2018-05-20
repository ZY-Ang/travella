import React, { Component } from 'react';
import { CardGroup, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import {SingleImage, BigImage} from '.';
/**
 * To be used together with {@code setState()}
 * to allow for allocation of a dynamic key to
 * value from the input to the local state object.
 */
export const byPropKey = (propertyName, value) => () =>({
  [propertyName]: value
});

class Images extends Component {
	constructor(props) {
		super(props)

		this.state = {
			locations: props.locations,
			open: false,
			openLoc: { img: '', name: '' }
		};

		this.toggleOpen = this.toggleOpen.bind(this)
	}

	toggleOpen(loc) {
    this.setState(byPropKey('open', !this.state.open));
    this.setState(byPropKey('openLoc', loc));
	}

	redirect = (url) => {
	  console.log(url);
	  window.location.replace(url);
  };

	render() {
		return <div className="animated fadeIn" >

			<Modal isOpen={this.state.open} toggle={this.toggleOpen}
				className={'modal-lg modal-success'}>
				<BigImage redirect={this.redirect} url={this.state.openLoc.img} name={this.state.openLoc.name} description={this.state.openLoc.description} toggleOpen={() => this.toggleOpen(this.state.openLoc)} />
			</Modal>

			<Row className="container tall">
				{this.state.locations.map((loc, idx) =>
					<SingleImage url={loc.img} name={loc.name} toggleOpen={() => this.toggleOpen(loc)} key={idx} />
				)}
			</Row>
			<Button block color="light">Did we miss anything?'</Button>
		</div >
	}
}

export default Images;
