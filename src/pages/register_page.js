import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import firebase from '../utils/firebase';
import {validateEmail} from '../utils/validation';

export default function RegisterPage({navigation}){
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailError, setEmailError] = useState('');

    const register = () => {
        setEmailError('');
        if(!email) {
            setEmailError('Ingrese un Correo Electrónico');
        }
        else if (!password) {
            setEmailError('Ingrese una Contraseña');
        }
        else if (!validateEmail(email)) {
            setEmailError('Ingrese un Correo Electrónico Válido');
        }
        else if(password.length < 6){
            setEmailError('Ingrese una contraseña de 6 caracteres mínimo');
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('cuenta creada');
                    navigation.replace('MenuNavigation', {
                        screen: 'PlatillosPage',
                        params: { user: email },
                      });
                })
                .catch((error)=>{
                    console.log(error.message);
                    setEmailError(error.message);
                });
        }
    }



    return(
        <>
            <ScrollView>
                <View
                    style={styles.formView}>
                    <Text
                        style={styles.registrarseText}>Crear cuenta</Text>
                    <Text
                        style = {styles.formText}>Usuario:</Text>
                    <TextInput
                        placeholder = "Tu usuario"
                        style={styles.formTextInput}
                        onChange={(e)=>{
                            setEmail(e.nativeEvent.text);
                            console.log(email);
                        }}/>
                    <Text
                        style = {styles.formText}>Contraseña</Text>
                    <TextInput
                        placeholder = "Contraseña"
                        secureTextEntry={true}
                        style={styles.formTextInput}
                        onChange={(e)=>{
                            setPassword(e.nativeEvent.text);
                            console.log(password);
                        }} />
                </View>
                <Text style={styles.textError}>{emailError}</Text>
                <TouchableOpacity
                    style={styles.registerButtonView}
                    onPress = {()=>{
                        register();
                    }} /*{() => navigation.replace('MenuNavigation')}*/>
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
            </ScrollView>
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
    },

    textError: {
        color: 'red', 
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 15
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