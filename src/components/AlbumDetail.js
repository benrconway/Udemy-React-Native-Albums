import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AlbumDetail = ({ album:{ title, artist, image, url }}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{artist}</Text>
      <Image style={styles.image} source={{uri: image}}/>
      <Text>{url}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: 'space-evenly'
  },
  image: {
    height: 50,
    width: 50
  }
});

export default AlbumDetail;