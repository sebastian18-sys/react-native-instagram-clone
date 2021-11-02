import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'


// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install react-native-gesture-handler
// npm install valid-url

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

export default function SignedInStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
