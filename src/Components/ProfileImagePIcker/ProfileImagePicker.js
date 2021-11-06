import React, { useCallback } from 'react'
import * as ImagePicker from 'react-native-image-picker'
import { useState } from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { PermissionsAndroid } from 'react-native'

/**
 * @namespace ProfileImagePicker
 * @description This component handles selection of a picture
 * for the camera of gallery of the device.
 * @todo run launch functions after permission to use camera is granted
 * @todo move commented code into new file
 * @todo create profile picture section to pop us this modal and hold the
 * returned value
 * @author Ja'von Elliott
 * @since 11/05/21
 * @version 1.0.0
 */
const ProfileImagePicker = () => {
    const [imagePath, setImagePath] = useState({})
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 30,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
        },
        title: {
            fontSize: 25,
            paddingBottom: 20,
        },
        button: {
            width: 250,
            height: 50,
            backgroundColor: '#fff',
            alignItems: 'center',
            borderRadius: 4,
            marginBottom: 12,

            borderBottomColor: 'gray',
            borderBottomWidth: 2,
        },
        buttonText: {
            textAlign: 'center',
            fontSize: 20,
        },
    })

    const requestCameraPermission = async callback => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message: 'App needs access to your camera ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Camera permission given')
            } else {
                console.log('Camera permission denied')
            }
        } catch (err) {
            console.warn(err)
        }
        callback()
    }
    const launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }
        ImagePicker.launchCamera(options, response => {
            const source = { uri: response.uri }
            console.log('response', JSON.stringify(response))
            setImagePath({
                filePath: response,
                fileData: response.data,
                fileUri: response.uri,
            })
        })
    }
    const launchImageLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }
        ImagePicker.launchImageLibrary(options, response => {
            console.log('Response = ', response)
            if (response.customButton) {
                console.log(
                    'User tapped custom button: ',
                    response.customButton
                )
                alert(response.customButton)
            } else {
                const source = { uri: response.uri }
                console.log('response', JSON.stringify(response))
                setImagePath({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri,
                })
            }
        })
    }
    // function renderFileData() {
    //     if (imagePath.fileData) {
    //         return (
    //             <Image
    //                 source={{
    //                     uri: 'data:image/jpeg;base64,' + imagePath.fileData,
    //                 }}
    //                 style={styles.images}
    //             />
    //         )
    //     } else {
    //         return (
    //             <Image
    //                 source={require('../../assets/images/placeholder.jpg')}
    //                 style={styles.images}
    //             />
    //         )
    //     }
    // }

    // function renderFileUri() {
    //     if (imagePath.fileUri) {
    //         return (
    //             <Image
    //                 source={{ uri: imagePath.fileUri }}
    //                 style={styles.images}
    //             />
    //         )
    //     } else {
    //         return (
    //             <Image
    //                 source={require('../../assets/images/placeholder.jpg')}
    //                 style={styles.images}
    //             />
    //         )
    //     }
    // }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Choose an Option </Text>
            <Pressable style={styles.button} onPress={launchCamera}>
                <Text style={styles.buttonText}> Camera Roll</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={launchImageLibrary}>
                <Text style={styles.buttonText}>Gallery</Text>
            </Pressable>
        </View>
    )
}
export default ProfileImagePicker
