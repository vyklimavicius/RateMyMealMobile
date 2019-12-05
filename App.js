import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import Dashboard from './components/Dashboard.js';

const App = props => {
  return (
    <View style={styles.body}>
      <View style={styles.subCard}>
        <Text style={styles.logo}>RateMyMeal</Text>
        <View style={styles.loginCard}>
          <TextInput style={styles.textInput} placeholder="Email" />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footer}>V.0.0.1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#227DA5',
    height: '100%',
    padding: '1%',
  },
  subCard: {
    backgroundColor: '#fff',
    height: '100%',
    padding: '2%',
    borderRadius: 5,
  },
  loginCard: {
    backgroundColor: '#DAD6D6',
    height: '83%',
    borderRadius: 5,
  },
  footer: {
    marginTop: '4%',
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
  textInput: {
    alignSelf: 'center',
    margin: '2%',
    backgroundColor: '#fff',
    borderWidth: 1,
    width: '90%',
    padding: 5,
    borderRadius: 5,
  },
  button: {
    borderWidth: 1,
    alignSelf: 'center',
    width: '30%',
    backgroundColor: '#227DA5',
    borderRadius: 5,
    height: 20,
  },
});

// const AppNavigator = createStackNavigator(
//   {
//     Home: App,
//     Dashboard: Dashboard,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'RateMyMeal',
//       headertitleStyle: {
//         fontFamily: 'Sacramento, cursive',
//       },
//       headerStyle: {
//         backgroundColor: '#227DA5',
//       },
//       headerTintColor: '#fff',
//     },
//   },
// );

// export default createAppContainer(AppNavigator);

export default App;
