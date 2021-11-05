import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer, StackNavigator } from 'react-navigation'
import Login from './src/Screens/Login/login'
import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="LoginScreen" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
