import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import UserForm from '../components/user_form';

export default function LoginForm(){
    return(
        <>
            <View
                style={styles.logoView}>
                <Image
                    source={ require('../img/Logo.png') }
                    style={styles.logoImg} />
                <Text
                    style={ styles.logoText}>Restaurante</Text>
            </View>
            <View
                style={styles.formView}>
                <Text
                    style={styles.ingresarText}>Ingresar</Text>
                <UserForm/>
            </View>
            <TouchableOpacity
                style={styles.loginButtonView}>
                <Text
                    style={styles.loginText}>Ingresar</Text>
            </TouchableOpacity>
            <View>
                <Text
                    style={styles.registrarseText}
                    onPress={() => {}}>Registrarse</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    /////////////// LOGO ////////////////
    logoView: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center'
    },
    logoImg: {
        width: '80%',
        height: 150,
        resizeMode: 'center'
    },
    logoText: {
        color: '#666666',
        fontSize: 24,
        fontFamily: 'sans-serif'
    },

    /////////////// FORM ////////////////
    formView: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30
    },
    ingresarText: {
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginBottom: 10
    },

    ///////////// BUTTON /////////////
    loginButtonView: {
        height: 60,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        backgroundColor: '#de0010',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    loginText: {
        fontSize: 22,
        color: '#ffffff',
        fontFamily: 'sans-serif-medium',
    },
    registrarseText: {
        fontSize: 22,
        color: '#de0010',
        alignSelf: 'center'
    }
});