import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {styles} from "./styles"
import { use, useContext, useState } from 'react'
import {UseContext} from "./context"

export default function HomeScreen({navigation}){
    const {note, Del} = useContext(UseContext)

    return(
        <View >
            <FlatList 
            data = {note}
            keyExtractor={(i)=>{i.id}}
            renderItem={({item})=>(
                <View style={styles.noteItem}>
                <Text>{item.text}</Text>
                <TouchableOpacity onPress={()=>{Del(item.id)}}>
                    <Text>X</Text>
                </TouchableOpacity>
                </View>
            )}
            ></FlatList>
        </View>
    )
}