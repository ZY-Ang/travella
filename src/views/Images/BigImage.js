import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const BigImage = ({ url, name, toggleOpen, description }) => {
	return (
		<Col xs="12" sm="12" md="12" lg="12">
			<div className="location">
				<h3 className="center">{name}</h3>
				<div className="location-img" alt={name} style={{ 'backgroundImage': `url(${url})` }} onClick={toggleOpen} />
				<p>{description}</p>
			</div>
		</Col>
	)
}

export default BigImage;
