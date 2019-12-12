/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Picker, Image, FlatList, Text} from 'react-native';
import avatarMale from './assets/avatarMale.jpg';
import Restaurantcard from './Restaurantcard';
import AddRestaurant from './AddRestaurant';

const Dashboard = ({navigation}) => {
  useEffect(() => {
    fetch('https://ratemymealapimobile.herokuapp.com/api/v1/users/1')
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setAvatar(data.avatar.url);
      });
    fetch('https://ratemymealapimobile.herokuapp.com/api/v1/restaurants')
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);
      });
  }, [restaurants]);

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [addRestaurant, setAddRestaurant] = useState(false);

  const restaurantCheck = () => {
    if (addRestaurant === false) {
      setAddRestaurant(true);
    } else {
      setAddRestaurant(false);
    }
  };

  const handleRestaurantForm = value => {
    console.log(value);
    switch (value) {
      case 'profile':
        alert('Coming soon...');
        break;
      case 'logout':
        navigation.navigate('Home');
        break;
      default:
        return;
    }
  };

  console.log(restaurants);

  return (
    <View style={styles.body}>
      <View style={styles.subCard}>
        <View style={styles.navbar}>
          <Picker
            mode="dropdown"
            selectedValue="user"
            style={{height: 50, width: 100}}
            onValueChange={e => handleRestaurantForm(e)}>
            <Picker.Item label="User" value="user" />
            <Picker.Item label="Profile" value="profile" />
            <Picker.Item label="Logout" value="logout" />
          </Picker>
          <Picker
            mode="dropdown"
            selectedValue="add"
            style={{height: 50, width: 100}}
            onValueChange={restaurantCheck}>
            <Picker.Item label="Add" value="add" />
            <Picker.Item label="Restaurant" value="restaurant" />
          </Picker>
          {avatar ? (
            <Image
              style={{
                width: '10%',
                height: '80%',
                borderRadius: 50,
                margin: '1%',
                marginLeft: 50,
              }}
              source={{
                uri: avatar,
              }}
            />
          ) : (
            <Image
              style={{
                width: '10%',
                height: '80%',
                borderRadius: 50,
                margin: '1%',
                marginLeft: 50,
              }}
              source={avatarMale}
            />
          )}
          <Text style={styles.user}>{name}</Text>
        </View>
        <Text style={styles.logo}>RateMyMeal</Text>
        {addRestaurant ? (
          <AddRestaurant restaurantCheck={restaurantCheck} />
        ) : null}
        {restaurants.length > 0 ? (
          <FlatList
            data={restaurants}
            renderItem={({item}) => (
              <Restaurantcard restaurant={item} navigation={navigation} />
            )}
            keyExtractor={restaurant => restaurant.id}
          />
        ) : null}
        {/* <Restaurantcard navigation={navigation} restaurant={restaurant} /> */}
        {/* <Restaurantcard img={avatar} />
          <Restaurantcard img={avatar} /> */}
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
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#BFBABA',
  },
  navbar: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#BFBABA',
  },
  logo: {
    fontFamily: 'Sacramento-Regular',
    color: '#227DA5',
    alignSelf: 'center',
    fontSize: 30,
    marginTop: '1%',
  },
  text: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#fff',
  },
  user: {
    fontFamily: 'Roboto',
    marginLeft: 1,
    alignSelf: 'center',
    fontSize: 17,
  },
});

export default Dashboard;
