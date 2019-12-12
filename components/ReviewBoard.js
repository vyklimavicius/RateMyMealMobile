import React from 'react';
import {View, StyleSheet, Picker, ScrollView, Image, Text} from 'react-native';
import Review from './Review';

const Reviews = () => {
  return (
    <View style={styles.body}>
      <View style={styles.subCard}>
        <ScrollView>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#227DA5',
    height: '100%',
    paddingTop: '2%',
    paddingHorizontal: '2%',
  },
  subCard: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    padding: '1%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#BFBABA',
  },
  text: {
    marginLeft: '1%',
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});

export default Reviews;
