import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import UserForm from '../components/user_form';

export default function RegisterPage({navigation}){
    return(
        <>
            <View
                style={styles.formView}>
                <Text
                    style={styles.registrarseText}>Crear cuenta</Text>
                <UserForm/>
            </View>
            <TouchableOpacity
                style={styles.registerButtonView}
                onPress = {() => navigation.replace('DrawerNavigation')}>
                <Text
                    style={styles.registerText}>Crear cuenta</Text>
            </TouchableOpacity>
            <View>
                <Text
                    style={styles.loginAdviceText}>¿Ya tiene una cuenta? 
                    <Text
                        style={styles.loginText}
                        onPress={() => navigation.goBack()}> Iniciar Sesión</Text>
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    /////////////// FORM ////////////////
    formView: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: '20%',
        marginTop: 50
    },
    registrarseText: {
        fontSize: 30,
        fontFamily: 'sans-serif-medium',
        marginBottom: '20%',
        marginTop: '10%',
        color: '#000000'
    },

    ///////////// BUTTON /////////////
    registerButtonView: {
        height: 60,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        backgroundColor: '#de0010',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    registerText: {
        fontSize: 22,
        color: '#ffffff',
        fontFamily: 'sans-serif-medium',
    },
    loginAdviceText: {
        color: '#444444',
        fontSize: 22,
        alignSelf: 'center'
    },
    loginText: {
        fontSize: 22,
        color: '#de0010',
        alignSelf: 'center'
    }
});