import React from 'react'
import { Text, Pressable } from 'react-native'

/**
 * @namespace GenralButton
 * @description Component for reusable buttons across the app
 * @param {Object} props used to passing in custom styles and text
 * when the component is used
 * @author Ja'von Elliott
 * @since 10/30/21
 * @version 1.0.0
 */

const GeneralButton = props => {
    return (
        <Pressable style={props.buttonStyle}>
            <Text style={props.textStyle}>{props.text}</Text>
        </Pressable>
    )
}
export default GeneralButton
