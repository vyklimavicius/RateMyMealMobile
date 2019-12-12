import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Picker,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

const AddRestaurant = ({restaurantCheck}) => {
  const handleRestaurantImage = () => {
    const options = {
      title: 'select restaurant',
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setRestaurantImage(response);
      }
    });
  };

  const sendChange = () => {
    // console.log(avatar);
    // return;
    fetch('https://ratemymealapimobile.herokuapp.com/api/v1/restaurants', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        restaurant: {
          ...newRestaurant,
          image: restaurantImage.data,
          image_name: restaurantImage.fileName,
        },
      }),
    }).then(response => {
      if (response.ok === true) {
        alert('New restaurant created!');
        restaurantCheck();
      }
    });
  };

  const changeName = name => {
    setNewRestaurant({...newRestaurant, name: name});
  };
  const changeSpecialty = specialty => {
    setNewRestaurant({...newRestaurant, specialty: specialty});
  };

  // State
  const [newRestaurant, setNewRestaurant] = useState({});
  const [restaurantImage, setRestaurantImage] = useState(null);

  return (
    <View style={styles.subCard}>
      <Text style={styles.header}>Add a restaurant</Text>
      <View style={styles.sectionStyle}>
        <TextInput
          style={{flex: 1}}
          placeholder="Name"
          onChangeText={text => changeName(text)}
        />
      </View>
      <View style={styles.sectionStyle}>
        <TextInput
          style={{flex: 1}}
          placeholder="Specialty"
          onChangeText={text => changeSpecialty(text)}
        />
      </View>
      <View style={{margin: 10, alignItems: 'center', width: 340}}>
        <Icon.Button
          name="image"
          backgroundColor="#227DA5"
          onPress={handleRestaurantImage}>
          Add an image
        </Icon.Button>
      </View>
      <View style={{margin: 10, alignItems: 'center', width: 340}}>
        <Icon.Button
          name="check-circle"
          backgroundColor="#227DA5"
          onPress={sendChange}>
          Create
        </Icon.Button>
      </View>
      <View style={{margin: 10, alignItems: 'center', width: 340}}>
        <Icon.Button
          name="reply"
          backgroundColor="#227DA5"
          onPress={restaurantCheck}>
          Go back
        </Icon.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subCard: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '95%',
    height: 350,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#227DA5',
    alignSelf: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#BFBABA',
    padding: 5,
    borderRadius: 5,
  },
  header: {
    marginTop: '1%',
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default AddRestaurant;
