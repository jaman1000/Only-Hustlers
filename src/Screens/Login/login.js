import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from '../../Components/Button/Button'
import ProfileImagePicker from '../../Components/ProfileImagePIcker/ProfileImagePicker'
/**
 * @namespace Login
 * @description the screen that handles user login for the app
 * @todo use authorization and error handling
 * @author Ja'von Elliott
 * @since 10/30/21
 * @version 1.0.0
 */
const Login = () => {
    state = {
        email: '',
        password: '',
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#003f5c',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            fontWeight: 'bold',
            fontSize: 50,
            color: '#DD6E0F',
            marginBottom: 40,
        },
        inputView: {
            width: '80%',
            backgroundColor: '#465881',
            borderRadius: 25,
            height: 50,
            marginBottom: 20,
            justifyContent: 'center',
            padding: 20,
        },
        inputText: {
            height: 50,
            color: 'white',
        },
        forgot: {
            color: 'white',
            fontSize: 11,
        },
        loginBtn: {
            width: '80%',
            backgroundColor: '#DD6E0F',
            borderRadius: 25,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 10,
        },
        loginText: {
            color: 'white',
        },
    })

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>OnlyHustlers</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#DD6E0F"
                    onChangeText={text => this.setState({ email: text })}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#DD6E0F"
                    onChangeText={text => this.setState({ password: text })}
                />
            </View>
            <Button text="Forgot Password?" textStyle={styles.forgot} />
            <Button
                text="LOGIN"
                buttonStyle={styles.loginBtn}
                textStyle={styles.loginText}
            />
            <Button text="Signup" textStyle={styles.loginText} />
            <ProfileImagePicker />
        </View>
    )
}
export default Login
