/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Dashboard from './components/Dashboard.js';

const App = props => {
  return (
    <View style={styles.body}>
      <View style={styles.subCard}>
        <Text style={styles.logo}>RateMyMeal</Text>
        {/* <View style={styles.loginCard}> */}
        <ImageBackground
          imageStyle={{borderRadius: 5}}
          style={{
            width: '100%',
            height: '93%',
            paddingTop: 20,
          }}
          source={require('./components/assets/main.jpg')}>
          <View style={styles.sectionStyle}>
            <TextInput style={{flex: 1}} placeholder="Please type your email" />
            <Icon name="user" color="#8C8686" />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              secureTextEntry={true}
              placeholder="Password"
            />
            <Icon name="key" color="#8C8686" />
          </View>
          {/* <TouchableOpacity>
            <Text style={{alignSelf: 'center', color: '#227DA5'}}>
              New member, sign up!
            </Text>
          </TouchableOpacity> */}
          {/* <View
            style={{
              marginTop: 10,
              marginHorizontal: 40,
              width: 300,
              borderBottomWidth: 1,
              borderBottomColor: '#C5BBBB',
            }}
          /> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <View style={{margin: 10, alignItems: 'center', width: 380}}>
            <Icon.Button
              name="user-plus"
              backgroundColor="#227DA5"
              onPress={null}>
              New member, sign up!
            </Icon.Button>
          </View>
          <View style={{margin: 10, alignItems: 'center', width: 380}}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={null}>
              Login with Facebook
            </Icon.Button>
          </View>
          <Text style={styles.footer}>Vytautas Klimavicius© V.0.0.1</Text>
        </ImageBackground>
        {/* </View> */}
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
    padding: '2%',
    borderRadius: 5,
  },
  // loginCard: {
  //   backgroundColor: '#DAD6D6',
  //   height: '83%',
  //   borderRadius: 5,
  // },
  footer: {
    marginTop: '65%',
    textAlign: 'center',
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
    marginTop: 50,
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

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Dashboard: Dashboard,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);

// export default App;
