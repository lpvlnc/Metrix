import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/welcome/Welcome'
import Login from '../pages/login/Login';
import CreateAccount from '../pages/createAccount/CreateAccount';

export type RootStackParamList = {
    Welcome: undefined;
    CreateAccount: undefined;
    Login: undefined;
};

const Stack = createNativeStackNavigator();

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
        </Stack.Navigator>
    )
}