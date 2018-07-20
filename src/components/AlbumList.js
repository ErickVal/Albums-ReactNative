import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rawgit.com/ErickVal/5b301d28410b68f61ccf517b59e57e1c/raw/febf77bdcc0e1da8e97d13f1e4e8a358edd074ab/albumjson.json')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(
      album => <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
