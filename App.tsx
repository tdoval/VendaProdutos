import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {

    const [items, setItems] = useState([
        {id: '1', text: 'Milk'},
        {id: '2', text: 'Eggs'},
        {id: '23', text: 'Bread'},
        {id: '44', text: 'Juice'},
    ]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    }

    return (
        <View style={styles.contianer}>
            <Header title='Venda Produtos' />
            <FlatList
              data={items}
              renderItem={({item}) => (
                <ListItem item={item} deleteItem={deleteItem} />
            )} />
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