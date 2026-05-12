import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function WelcomeScreen({navigation}: any) {
    const [name,setName] = useState("")

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <TextInput 
            style={styles.input}
            placeholder='Enter name'
            value = {name}
            onChangeText={setName}
            ></TextInput>
            <TouchableOpacity onPress=
            {()=>navigation.navigate('Profile',{name})}>
                <Text style={styles.title}>Продолжить</Text>
            </TouchableOpacity>
        </View>
    );
}