import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import SingleImage from './SingleImage.js';

const Images = (props) => (
	<div className="animated fadeIn">
		<Row className="container">
			{props.locations.map((loc) =>
				<SingleImage url='assets/img/avatars/1.jpg' name="admin@bootstrapmaster.com" />
			)}
		</Row>
	</div>
)

export default Images;
