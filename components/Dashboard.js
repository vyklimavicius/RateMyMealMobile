import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.body}>
      <View style={styles.subCard}>
      <Text>This is the Dashboard</Text>
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
    // borderWidth: 1,
    // borderColor: '#DAD6D6',
    // borderRadius: 1,
    // backgroundColor: '#DAD6D6',
    marginTop: '62%',
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
