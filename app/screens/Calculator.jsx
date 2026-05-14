import {View , Text, TextInput, TouchableOpacity, FlatList} from "react-native"
import {styles} from "./styles"
import { useState } from "react"


export default function Calculator({navigation}){
    const [one,setOne] = useState("")
    const [two,setTwo] = useState("")
    const [data,setData] = useState([])

    const sum = (sumbol) =>{
        let num1 = parseFloat(one)
        let num2 = parseFloat(two)
        let result = ''


        if(one==="" || two==="")
            return
        else if (sumbol == "+"){
            result = num1 + num2
        }
        else if (sumbol == "-"){
            result = num1 - num2
       }
        else if (sumbol == "/"){
            if(num2 === 0){
                window.alert('Error division by zero')
                return
            }
            result = num1 / num2
        }
        else if (sumbol == "*"){
            result = num1 * num2
        }
        else{
            window.alert('Error calculation')
            return
        }
        let newData = {
            id:Date.now().toString(), 
            numder:result , 
            sumbul:sumbol}
        setData([...data,newData])

    }

    return(
    <View style={styles.container}>
        <Text style={styles.title}>
            Add num 1 and num 2 , next choose sumbol
        </Text>
        <TextInput style={styles.input}placeholder="Number 1" value={one} onChangeText={setOne}>

        </TextInput>
        <TextInput style={styles.input} placeholder="Number 2" value={two} onChangeText={setTwo}>

        </TextInput>
        <TouchableOpacity style={styles.button} onPress={()=>{sum("+")}}><Text style={styles.buttonText}> + </Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{sum("-")}}><Text style={styles.buttonText}> - </Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{sum("/")}}><Text style={styles.buttonText}> / </Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{sum("*")}}><Text style={styles.buttonText}> * </Text></TouchableOpacity>
        <FlatList style={styles.listItem} data={data} keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
            <Text style={styles.listItemText}>Result: {item.numder} , operation: {item.sumbul}</Text>
        )}
        >
        </FlatList>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
            <Text style={styles.buttonText} >Back</Text>
        </TouchableOpacity>
    </View>
    )
}