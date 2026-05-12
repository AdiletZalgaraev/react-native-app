import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function ProfileScreen({route , navigation}:any){

    const {name} = route.params;
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Здравствуйте {name}</Text>

            <TouchableOpacity onPress={()=>navigation.navigate('Setting')} style={styles.button}>
                <Text style={styles.buttonText}>Перейти к настройкам</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>Назад</Text>
            </TouchableOpacity>
        </View>
    );
}