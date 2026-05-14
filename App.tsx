import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './app/screens/Profilescreen';
import SettingsScreen from './app/screens/Settingsscreen';
import WelcomeScreen from './app/screens/Welcomescreen';
import MiniListScreen from './app/screens/MiniList'
import UserListScreen from "./app/screens/UserList"
import CalculateScreen from "./app/screens/Calculator"


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function Screen() {
  return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
        <Stack.Screen name="MiniList" component={MiniListScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="Calculator" component={CalculateScreen} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Screen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Setting" component={SettingsScreen} />
        <Drawer.Screen name="MiniList" component={MiniListScreen} />
        <Drawer.Screen name="UserList" component={UserListScreen} />
        <Drawer.Screen name="Calculator" component={CalculateScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
