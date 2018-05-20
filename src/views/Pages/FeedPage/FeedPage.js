import React, { Component } from 'react';
import './styles.css';
import {Images} from '../../Images'

class FeedPage extends Component {
	componentDidMount() {
		if (window.twttr) {
			window.twttr.widgets.load();
		}
	}
	render() {
		return (
			<div className="h-100 w-100">
				<a className="twitter-timeline" href="https://twitter.com/search?q=Romania" data-widget-id="997955062998749184">Tweets about Romania</a>
				</div>
		);
	}
}

export default FeedPage;
