import { useState } from "react"
import {styles} from "./styles"
import {View, Text , TextInput , TouchableOpacity, FlatList} from "react-native"

export default function UserList({navigation}){
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [surname,setSurname] = useState('')
    
    const [value,setValue] = useState([])

    const Add = () =>{
        if(name.trim() === '' ||
            age.trim() === '' ||
            surname.trim() === '')
            {
                return
            }
        else{
            let newValue = {id: Date.now().toString() ,
                            name:name ,
                            surname:surname , 
                            age:age}
    
            setValue([...value,newValue])
            setAge('')
            setName("")
            setSurname('')
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Add ur informatio</Text>
            <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}></TextInput>
            <TextInput style={styles.input} placeholder="Surname" value={surname} onChangeText={setSurname}></TextInput>
            <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge}></TextInput>
            <TouchableOpacity style={styles.button} onPress={Add}>
                <Text style={styles.buttonText} >Add</Text>
            </TouchableOpacity>
            <FlatList style={styles.listItem}
            data = {value}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <Text style={styles.listItemText}>Name - {item.name} Surname - {item.surname} Age - {item.age}</Text>
    )}
            >
            </FlatList>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}