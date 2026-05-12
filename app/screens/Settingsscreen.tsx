import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


export default function SettingsScreen({navigation}:any){
    const settings = [ 
    { id: '1', title: 'Изменить тему' }, 
    { id: '2', title: 'Уведомления' }, 
    { id: '3', title: 'О приложении' }, 
    { id: '4', title: 'Конфиденциальность' } ];


    return(
        <View style={styles.container}>
            <FlatList 
            data= {settings}
            keyExtractor={(i)=>i.id}
            renderItem={({item})=>(
                <TouchableOpacity 
                onPress={()=>window.alert(item.title)} 
                style={styles.listItem}>
                    <Text style={styles.listItemText}>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>"Назад к профилю"</Text>
            </TouchableOpacity>
        </View>
    );
}