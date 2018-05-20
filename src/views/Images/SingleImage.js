import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const SingleImage = ({ url, name }) => {
	console.log("SUI")
	return (
	<Col xs="12" sm="6" md="4" lg="4">
		<div className="location">
			<div className="location-img" alt={name} style={{'backgroundImage': `url(${url})`}}/>
		</div>
	</Col>
)
}

export default SingleImage;
