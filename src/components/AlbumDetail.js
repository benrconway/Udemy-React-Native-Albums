import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album:{ title, artist, image, thumbnail_image, url }}) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }}/>
      </CardSection>
      <CardSection>
        <Button
          onPress={ () =>
            console.log("Button pressed")
          }
          buttonText="Buy Now"
        />
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  }
});

export default AlbumDetail;