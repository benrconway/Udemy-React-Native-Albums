import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios'

const fetcher = axios.create();

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    fetcher.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
  }

  renderAlbums() {
    return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default AlbumList;