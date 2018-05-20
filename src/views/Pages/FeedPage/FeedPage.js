import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Images } from '../../Images'

class FeedPage extends Component {
	render() {
		return (
				<Images locations={[
					{ img: 'http://www.bran-castle.com/assets/castle/05-resized.jpg', name: 'Bran Castle' },
					{ img: 'https://i.ytimg.com/vi/8l9-k0TaUqs/maxresdefault.jpg', name: 'PoianaBrașov' },
					{ img: 'http://www.descoperalocuri.ro/wp-content/uploads/2013/11/Biserica-Neagr%C4%83-vedere-exterioar%C4%83.jpg', name: 'Biserica-Neagră-vedere-exterioară' },
				]} className="col-sm-12 col-md-6 col-lg-6 tall" />
		);
	}
}

export default FeedPage;
