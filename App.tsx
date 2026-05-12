import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './app/screens/Profilescreen';
import SettingsScreen from './app/screens/Settingsscreen';
import WelcomeScreen from './app/screens/Welcomescreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
