// import TabLayout from './_layout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/Profilescreen';
import SettingsScreen from './screens/Settingsscreen';
import WelcomeScreen from './screens/Welcomescreen';



export default function Index() {
  // const [text,setText] = useState("")
  // const [result,setResult] = useState("")
  // const handlePress = () =>{
  //   setResult(text);
  //   setText('');
  // }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Setting" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

    // <View style={styles.container}>

    // //   <Text style={styles.title}>Hello amigo</Text>
    // //   <TextInput style={styles.input}
    // //   placeholder='enter text'
    // //   value={text}
    // //   onChangeText={setText}
    // //   >
    // //   </TextInput>
    // //     <TouchableOpacity style={styles.button} onPress={handlePress}>
    // //       <Text style={styles.buttonText}>Press button</Text>
    // //     </TouchableOpacity>
    // //   <Text style={styles.result}>{result}</Text>

    // <TabLayout></TabLayout>
    // </View>
