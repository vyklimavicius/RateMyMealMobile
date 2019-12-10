/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import avatarMale from './assets/avatarMale.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {CheckBox} from 'native-base';

const Signup = props => {
  // State
  const [newUser, setNewUser] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [checkbox, setCheckBox] = useState(false);
  const [checkavatar, setCheckAvatar] = useState(false);
  // Functions
  const handleAvatar = () => {
    const options = {
      title: 'select avatar',
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setAvatar(response);
        setCheckAvatar(true);
      }
    });
  };
  const handleCheckBox = () => {
    if (checkbox === false) {
      setCheckBox(true);
    } else {
      setCheckBox(false);
    }
  };
  const changeName = name => {
    setNewUser({...newUser, name: name});
  };
  const changeLastName = lastname => {
    setNewUser({...newUser, lastname: lastname});
  };
  const changeEmail = email => {
    let input = email.toLowerCase();
    setNewUser({...newUser, email: input});
  };
  const changePassword = password => {
    setNewUser({...newUser, password: password});
  };
  const changeConfirmPassword = password => {
    setConfirmPassword(password);
  };

  const sendChange = () => {
    // console.log(avatar);
    // return;
    if (newUser.password !== confirmPassword) {
      alert("Passwords don't match!");
    } else if (checkbox === false) {
      alert('Please agree to terms and conditions!');
    } else if (checkavatar === false) {
      alert('Please change the default avatar!');
    } else {
      fetch('https://ratemymealapimobile.herokuapp.com/api/v1/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {...newUser, avatar: avatar.data, avatar_name: avatar.fileName},
        }),
      }).then(response => {
        if (response.ok === true) {
          alert('New user created!');
          props.navigation.navigate('Home');
        } else {
          alert('The email is already on database.');
        }
      });
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.subCard}>
        <TouchableOpacity onPress={handleAvatar}>
          {avatar ? (
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: '10%',
                marginBottom: '3%',
                alignSelf: 'center',
              }}
              source={{uri: avatar.uri}}
            />
          ) : (
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: '10%',
                marginBottom: '3%',
                alignSelf: 'center',
              }}
              source={avatarMale}
            />
          )}
        </TouchableOpacity>
        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
          Click to change avatar
        </Text>
        <ScrollView>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Firstname"
              onChangeText={text => changeName(text)}
            />
            <Icon name="user" color="#8C8686" />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Lastname"
              onChangeText={text => changeLastName(text)}
            />
            <Icon name="user" color="#8C8686" />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Email"
              onChangeText={text => changeEmail(text)}
            />
            <Icon name="envelope" color="#8C8686" />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={text => changePassword(text)}
            />
            <Icon name="key" color="#8C8686" />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              secureTextEntry={true}
              placeholder="Confirm Password"
              onChangeText={text => changeConfirmPassword(text)}
            />
            <Icon name="key" color="#8C8686" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              checked={checkbox}
              color="#8C8686"
              onPress={handleCheckBox}
              style={{
                marginTop: '4%',
                marginRight: '5%',
                marginBottom: '1%',
              }}
            />
            <Text style={{marginTop: '4%'}}>
              I agree to the Terms and conditions
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={sendChange}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>RateMyMeal</Text>
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
    marginTop: '2%',
    fontFamily: 'Sacramento-Regular',
    color: '#227DA5',
    fontSize: 55,
    alignSelf: 'center',
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
    borderColor: '#BFBABA',
    padding: 5,
    borderRadius: 5,
  },
  button: {
    marginTop: '4%',
    paddingTop: '1%',
    marginBottom: '2%',
    marginLeft: '2%',
    borderWidth: 1,
    borderColor: '#8C8686',
    width: 100,
    backgroundColor: '#8C8686',
    borderRadius: 5,
    height: 30,
  },
});

export default Signup;
