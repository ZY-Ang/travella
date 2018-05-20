import React, { Component } from 'react';
import { Images } from '../Images'

class Dashboard extends Component {
  render() {
    return (
      <Images locations={[
        { img: 'http://www.bran-castle.com/assets/castle/05-resized.jpg', name: 'Bran Castle', description: 'Bran Castle, situated near Bran and in the immediate vicinity of Brașov, is a national monument and landmark in Romania. The fortress is situated on the border between Transylvania and Wallachia' },
        { img: 'https://i.ytimg.com/vi/8l9-k0TaUqs/maxresdefault.jpg', name: 'PoianaBrașov' },
        { img: 'http://www.descoperalocuri.ro/wp-content/uploads/2013/11/Biserica-Neagr%C4%83-vedere-exterioar%C4%83.jpg', name: 'Biserica-Neagră-vedere-exterioară' },
        { img: 'https://universecityblog.files.wordpress.com/2011/08/peles-castle-close-up.jpg', name: 'Biserica-Neagră-vedere-exterioară' },
        { img: 'https://pre00.deviantart.net/af21/th/pre/f/2010/248/f/7/balea_lake_by_1killa1-d2y2d98.jpg', name: 'Biserica-Neagră-vedere-exterioară' },
        { img: 'http://aroundthecompass.com/wp-content/uploads/2017/01/Corvin-castle-from-across-the-bridge.jpg', name: 'Biserica-Neagră-vedere-exterioară' },

      ]} className="col-sm-12 col-md-6 col-lg-6 tall" />
    );
  }
}

export default Dashboard;
