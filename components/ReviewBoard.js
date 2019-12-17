import React, {useState} from 'react';
import {View, StyleSheet, Picker, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import Review from './Review';
import AddReview from './AddReview.js';

const Reviews = () => {
  const [addReview, setAddReview] = useState(false);

  const reviewCheck = () => {
    if (addReview === false) {
      setAddReview(true);
    } else {
      setAddReview(false);
    }
  };
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
        <TouchableOpacity onPress={reviewCheck}>
          <Text style={styles.textAdd}>Add a comment</Text>
        </TouchableOpacity>
        {addReview ? <AddReview addReview={reviewCheck} /> : null}
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
  textAdd: {
    marginLeft: '1%',
    color: '#BFBABA',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});

export default Reviews;
