import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Picker,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import AddReview from './AddReview.js';

const Restaurantcard = ({navigation, restaurant, avatar}) => {
  return (
    <View style={styles.subCard}>
      <Image
        style={{width: '100%', height: '80%'}}
        source={{uri: restaurant.image.url}}
      />
      <Text style={styles.textHeader}>{restaurant.name}</Text>
      <Text style={styles.textSubHeader}>{restaurant.specialty}</Text>
      {/* <Text style={styles.textMeal}>Name of Meal</Text> */}
      <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
        <Text style={styles.textSubHeader}>View all 2,000 Reviews</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subCard: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '95%',
    height: 400,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#227DA5',
    alignSelf: 'center',
  },
  navbar: {
    flexDirection: 'row',
    height: '7%',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#BFBABA',
  },
  logo: {
    fontFamily: 'Sacramento-Regular',
    color: '#227DA5',
    fontSize: 55,
  },
  textHeader: {
    marginLeft: '1%',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  textSubHeader: {
    marginLeft: '1%',
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  textMeal: {
    marginLeft: '1%',
    fontSize: 15,
    fontFamily: 'Roboto',
  },
});

export default Restaurantcard;
