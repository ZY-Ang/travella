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
				<Images locations={[
					          { img: 'http://www.bran-castle.com/assets/castle/05-resized.jpg', name: 'Bran Castle', description: 'Bran Castle, situated near Bran and in the immediate vicinity of Brașov, is a national monument and landmark in Romania. The fortress is situated on the border between Transylvania and Wallachia' },
					          { img: 'https://i.ytimg.com/vi/8l9-k0TaUqs/maxresdefault.jpg', name: 'PoianaBrașov' },
					          { img: 'http://www.descoperalocuri.ro/wp-content/uploads/2013/11/Biserica-Neagr%C4%83-vedere-exterioar%C4%83.jpg', name: 'Biserica-Neagră-vedere-exterioară' },
				        ]} className="col-sm-12 col-md-6 col-lg-6 tall" />
			</div>
		);
	}
}

export default FeedPage;
