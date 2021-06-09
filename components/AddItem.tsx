import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    return (
        <View>
            <TextInput placeholder="Add item..." styles={styles.input} onChangeText={onChange} />
            <TouchableOpacity styles={styles.btn} onPress={() => addItem(text)} >
                <Text style={styles.btnText}>
                    <Ionicons name="md-checkmark-circle" size={20} color="green" />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: 'red',
        padding: 30,
        margin: 6,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }

})

export default AddItem;