import React from 'react';
import { Text, Button, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album:{ title, artist, image, url }}) => {
  return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
      <CardSection>
        <Image style={styles.image} source={{uri: image}}/>
      </CardSection>
      <CardSection>
        <Button title="Buy Now"/>
      </CardSection>

    </Card>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50
  }
});

export default AlbumDetail;