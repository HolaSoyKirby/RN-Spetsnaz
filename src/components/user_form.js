import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

export default function UserForm(){
    return(
        <>
            <Text
                style = {styles.formText}>Usuario:</Text>
            <TextInput
                placeholder = "Tu usuario"
                style={styles.formTextInput} />
            <Text
                style = {styles.formText}>Contraseña</Text>
            <TextInput
                placeholder = "Contraseña"
                secureTextEntry={true}
                style={styles.formTextInput} />
        </>
    );
}

const styles = StyleSheet.create({
    formText:{
        fontSize: 18,
        color: '#de0010',
        fontFamily: 'sans-serif',
        marginBottom: 5
    },
    formTextInput: {
        marginBottom: '10%',
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#aaaaaa'
    }
});