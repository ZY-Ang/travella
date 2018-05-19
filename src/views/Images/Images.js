import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const Images = (props) => (
	<div className="animated fadeIn">
		<h1>TEST</h1>
		<Row>
			{props.locations.map((loc) =>
				<Col xs="12" sm="6" lg="3">
					<div className="location">
						<img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
					</div>
				</Col>
			)}
		</Row>
	</div>
)

export default Images;
