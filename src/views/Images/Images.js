import React, { Component } from 'react';
import { CardGroup, Col, Row, Button } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import SingleImage from './SingleImage.js';

const Images = (props) => (
	<div className="animated fadeIn">
		<Row className="container">
			{props.locations.map((loc) =>
				<SingleImage url={loc.img} name={loc.name} />
			)}
		</Row>
		<Button block color="light">Light</Button>
	</div>
)

export default Images;
