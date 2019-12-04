import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import Dashboard from './components/Dashboard.js';

const App = props => {
  return (
    <View style={styles.body}>
      <View style={styles.subCard}>
        <Text style={styles.text}>RateMyMeal</Text>
        <View style={styles.loginCard}>
          <Text>Login</Text>
        </View>
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
    height: '90%',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Sacramento-Regular',
    color: '#227DA5',
    fontSize: 50,
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
