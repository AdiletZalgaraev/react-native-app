import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from "./styles"
import {UseContext} from "./context"
import { use, useContext, useState } from 'react'


export default function AddNoteScreen({navigation}){
    const {note,setNote} = useContext(UseContext)
    const [text,setText] = useState('')
    const Add = () => {

        if(!text) return

        const newNote = {
            id:Date.now().toString(), 
            text:text}

        setNote([...note,newNote])
        setText('')
    }
    return(
        <View>
            <TextInput 
            value={text} onChangeText={setText} placeholder='Enter note text'>
            </TextInput>

            <TouchableOpacity  
            onPress={()=>{
                Add()
                navigation.goBack()
            }}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}