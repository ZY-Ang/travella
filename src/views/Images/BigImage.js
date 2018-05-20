import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const BigImage = ({ url, name, toggleOpen, description, redirect }) => {
	return (
		<Col xs="12" sm="12" md="12" lg="12">
			<div className="location">
				<h3 className="center">{name}</h3>
				<div onClick={() => {redirect("https://bilete.castelulbran.ro/en/");toggleOpen();}} className="location-img" alt={name} style={{ 'backgroundImage': `url(${url})` }} />
				<p>{description}</p>
			</div>
      <iframe src="https://www.google.com/maps/embed?pb=!4v1526822566717!6m8!1m7!1sCAoSLEFGMVFpcE9VMWNrYnNZTlMwUDFocEh6d0N4ZnpSN1EtdDByZWNyNVNFdmNH!2m2!1d45.5147209!2d25.3666668!3f349.681892780054!4f6.990256384689133!5f0.7820865974627469" width="100%" height="450" frameborder="0" style={{border: 0}} allowfullscreen/>
		</Col>
	)
};

export default BigImage;
