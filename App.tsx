import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header';
import { uuid } from 'uuidv4';

const App = () => {

    const [items, setItems] = useState([

    ]);

    return (
        <View style={styles.contianer}>
            <Header title='Venda Produtos' />
        </View>
    )
}

const styles =  StyleSheet.create({
    contianer : {
        flex:1,
        paddingTop: 60
    }
})

export default App;