import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const SpinCard = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      }}
    >
      <Card styles={{ justifyContent: 'center', alignContent: 'center' }}>
        <Card.Title>The Windermere Children</Card.Title>
        <Card.FeaturedSubtitle styles={styles.subtitleStyle}>
          Featured title
        </Card.FeaturedSubtitle>
        <Card.Divider />
        <Card.Image
          style={styles.posterStyle}
          source={{
            uri:
              'https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg'
          }}
        />

        <Text>
          The story of the pioneering project to rehabilitate child survivors of
          the Holocaust on the shores of Lake Windermere.
        </Text>
      </Card>
    </View>
  );
};

export default SpinCard;

const styles = StyleSheet.create({
  posterStyle: {
    width: 200,
    height: 300,
    alignSelf: 'center'
  },
  subtitleStyle: {
    height: 20,
    fontWeight: 'bold'
  }
});
