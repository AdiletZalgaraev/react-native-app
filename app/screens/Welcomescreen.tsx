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

            <TouchableOpacity onPress=
            {()=>navigation.navigate('MiniList')}>
                <Text style={styles.title}>Мой лист</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress=
            {()=>navigation.navigate('UserList')}>
                <Text style={styles.title}>Лист пользователей</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress=
            {()=>navigation.navigate('Calculator')}>
                <Text style={styles.title}>Калькулятор</Text>
            </TouchableOpacity>
        </View>

    );
}