import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../pages/Profile';
import MainContainer from '../pages/MainContainer';
import MenuAlgebra from '../pages/MenuAlgebra';
import MenuSecondDegreeEquations from '../pages/MenuSecondDegreeEquations';
import Welcome from '../pages/Welcome';
import CreateAccount from '../pages/CreateAccount';
import MenuGeometry from '../pages/MenuGeometry';
import MenuGeometryArea from '../pages/MenuGeometryArea';
import MenuGeometryAreaCircle from '../pages/MenuGeometryAreaCircle';
import MenuGeometryAreaSquare from '../pages/MenuGeometryAreaSquare';
import MenuGeometryAreaTriangle from '../pages/MenuGeometryAreaTriangle';
import MenuGeometryCircumferenceCircle from '../pages/MenuGeometryCircumferenceCircle';
import MenuStatistic from '../pages/MenuStatistic';
import MenuStatisticArithmeticMean from '../pages/MenuStatisticArithmeticMean';
import MenuSecondDegreeEquationsBhaskara from '../pages/MenuSecondDegreeEquationsBhaskara';
import MenuPhysics from '../pages/MenuPhysics';
import MenuPhysicsUniversalGravitationalConstant from '../pages/MenuPhysicsUniversalGravitationalConstant';

export type RootStackParamList = {
    Welcome: undefined;
    CreateAccount: undefined;
    Login: undefined;
    Main: undefined;
    Profile: undefined;
    MenuAlgebra: undefined;
    MenuGeometry: undefined;
    MenuGeometryArea: undefined;
    MenuGeometryAreaCircle: undefined;
    MenuGeometryAreaSquare: undefined;
    MenuGeometryAreaTriangle: undefined;
    MenuGeometryCircumferenceCircle: undefined;
    MenuPhysics: undefined;
    MenuPhysicsUniversalGravitationalConstant: undefined;
    MenuSecondDegreeEquations: undefined;
    MenuSecondDegreeEquationsBhaskara: undefined;
    MenuStatistic: undefined;
    MenuStatisticArithmeticMean: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{
            contentStyle: {
                backgroundColor: '#FFFFFF'
            }
        }}>
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
                name='MenuGeometry'
                component={MenuGeometry}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuGeometryArea'
                component={MenuGeometryArea}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuGeometryAreaCircle'
                component={MenuGeometryAreaCircle}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuGeometryAreaSquare'
                component={MenuGeometryAreaSquare}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuGeometryAreaTriangle'
                component={MenuGeometryAreaTriangle}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuGeometryCircumferenceCircle'
                component={MenuGeometryCircumferenceCircle}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuPhysics'
                component={MenuPhysics}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuPhysicsUniversalGravitationalConstant'
                component={MenuPhysicsUniversalGravitationalConstant}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuSecondDegreeEquationsBhaskara'
                component={MenuSecondDegreeEquationsBhaskara}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuStatistic'
                component={MenuStatistic}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MenuStatisticArithmeticMean'
                component={MenuStatisticArithmeticMean}
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