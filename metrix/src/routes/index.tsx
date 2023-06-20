import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Main from '../pages/MainContent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Profile from '../pages/Profile';
import MainContainer from '../pages/MainContainer';
import Bhaskara from '../pages/MenuAlgebra';
import MenuAlgebra from '../pages/MenuAlgebra';
import MenuSecondDegreeEquations from '../pages/MenuSecondDegreeEquations';
import EquationBhaskara from '../pages/EquationBhaskara';

export type RootStackParamList = {
    Welcome: undefined;
    CreateAccount: undefined;
    Login: undefined;
    Main: undefined;
    Profile: undefined;
    MenuAlgebra: undefined;
    MenuSecondDegreeEquations: undefined;
    EquationBhaskara: undefined;
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
                component={MainContainer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuAlgebra'
                component={MenuAlgebra}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuSecondDegreeEquations'
                component={MenuSecondDegreeEquations}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='EquationBhaskara'
                component={EquationBhaskara}
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