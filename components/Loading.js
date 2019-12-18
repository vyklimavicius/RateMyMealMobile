import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';

const Loading = () => {
  return (
        <View style={styles.subCard}>
          <ActivityIndicator size={200} color="#227DA5" />
          <Text style={{textAlign: 'center', marginTop: 10, fontSize: 25}}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subCard: {
        padding: 30,
        backgroundColor: '#fff',
        width: 350,
        height: 350,
        borderRadius: 5,
        borderWidth: 4,
        borderColor: '#227DA5',
        alignSelf: 'center',
    },
    LoadingStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 50,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
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

export default Loading;
