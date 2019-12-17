import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddReview = ({addReview}) => {
    return (
        <View style={styles.subCard}>
            <Text style={styles.header}>Add a comment</Text>
            <View style={styles.sectionStyle}>
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Comment"
                    // onChangeText={text => changeName(text)}
                />
            </View>
            <View style={{ margin: 10, alignItems: 'center', width: 340 }}>
                <Icon.Button
                    name="check-circle"
                    backgroundColor="#227DA5"
                    onPress={null}>
                    Create
        </Icon.Button>
            </View>
            <View style={{ margin: 10, alignItems: 'center', width: 340 }}>
                <Icon.Button
                    name="reply"
                    backgroundColor="#227DA5"
                    onPress={addReview}>
                    Go back
        </Icon.Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    subCard: {
        marginTop: 1,
        marginBottom: 10,
        backgroundColor: '#fff',
        width: '95%',
        height: 250,
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

export default AddReview;


