/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Picker, Image, Text} from 'react-native';
import avatarMale from './assets/avatarMale.jpg';

const Dashboard = () => {
  useEffect(() => {
    fetch('https://ratemymealapimobile.herokuapp.com/api/v1/users/1')
      .then(response => response.json())
      // .then(data => console.log(data.name));
      .then(data => setAvatar(data.avatar.url));
  }, []);

  const [avatar, setAvatar] = useState(null);
  console.log(avatar);
  return (
    <View style={styles.body}>
      <View style={styles.subCard}>
        <View style={styles.navbar}>
          <Picker
            mode="dropdown"
            selectedValue={null}
            style={{height: 50, width: 100}}
            onValueChange={null}>
            <Picker.Item label="User" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <Picker
            mode="dropdown"
            selectedValue={null}
            style={{height: 50, width: '50%'}}
            onValueChange={null}>
            <Picker.Item label="Restaurants" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          {avatar ? (
            <Image
              style={{width: 40, height: 40, margin: '1%', marginLeft: '10%'}}
              source={{uri: avatar}}
            />
          ) : (
            <Image
              style={{width: 40, height: 40, margin: '1%', marginLeft: '10%'}}
              source={avatarMale}
            />
          )}
        </View>
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
  text: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#fff',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  button: {
    marginTop: 60,
    paddingTop: 2,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#227DA5',
    alignSelf: 'center',
    width: 100,
    backgroundColor: '#227DA5',
    borderRadius: 5,
    height: 30,
  },
});

export default Dashboard;

// setAvatar(data.avatar.url)
