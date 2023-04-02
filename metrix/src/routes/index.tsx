import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/welcome/Welcome'
import Login from '../pages/Login'

export type RootStackParamList = {
    Welcome: undefined;
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
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}