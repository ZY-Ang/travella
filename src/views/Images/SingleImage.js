import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const SingleImage = ({url, name}) => (
	<Col xs="12" sm="6" md="4" lg="4">
		<div className="location">
			<img src={url} className="location-img" alt={name} />
		</div>
	</Col>
)

export default SingleImage;
