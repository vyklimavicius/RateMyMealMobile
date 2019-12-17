import React from 'react';
import {View, StyleSheet, Picker, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import avatarMale from './assets/avatarMale.jpg';

const Review = () => {
  return (
    <View>
      <View style={{marginBottom: '1%', marginTop: '1%'}}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginLeft: '1%',
          }}
          source={avatarMale}
          //   source={{
          //     uri: img,
          //   }}
        />
      </View>
      <View>
        <Text style={styles.text}>Author Name</Text>
        <Text style={styles.text}>Date</Text>
        <Text style={styles.text}>
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpppppppppppppppppppppppppppppppppppppppppppppppppppppooooooooooooooooooooooooooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrrttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: '1%',
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});

export default Review;
