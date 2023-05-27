import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Main from '../pages/Main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

export type RootStackParamList = {
    Welcome: undefined;
    CreateAccount: undefined;
    Login: undefined;
    Main: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='CreateAccount'
                component={CreateAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Main'
                component={Main}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
        // <Tab.Navigator>
        //     <Tab.Screen name='Widgets' component={Main}/>
        //     <Tab.Screen name='Camera' component={Main}/>
        //     <Tab.Screen name='Perfil' component={Main}/>
        // </Tab.Navigator>
    )
}