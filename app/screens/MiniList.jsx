import { useState } from 'react';
import {View , TextInput, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import { styles } from './styles';

export default function MiniList({navigation}){
    const [pName,setPName] = useState('')
    const [items,setItems] = useState([])
    const Add = (value) =>{
        if(value.length <= 0){
            window.alert("Name product null")
            return
        }
        else
        {
            const newItem = { id : Date.now().toString() , name:value};
            setItems([...items,newItem]);
        }
    }
    const Delete = (id) =>{
        setItems(items.filter((i)=>i.id !== id))
    }
    return(
        <View style={styles.container} >
            <Text style={styles.title}>Mini Product List</Text>
            <TextInput style={styles.input} placeholder='Enter product name' 
            value={pName}
            onChangeText={setPName}
            ></TextInput>
            <TouchableOpacity style={styles.button} onPress={()=>{Add(pName)}} >Add product</TouchableOpacity>
            <FlatList style={styles.listItem}
            data = {items}
            keyExtractor={i=>i.id}
            renderItem={({item})=>(
                <TouchableOpacity style={styles.button} onPress={()=>{Delete(item.id)}}>
                    <Text style={styles.listItemText} >{item.name}</Text> 
                </TouchableOpacity>
    )}>
            </FlatList>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}