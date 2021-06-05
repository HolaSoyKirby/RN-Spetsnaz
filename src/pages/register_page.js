import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import firebase from '../utils/firebase';

export default function RegisterPage({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const register = () => {
        setEmailError('');
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('cuenta creada');
            navigation.replace('MenuNavigation', {user: email});

        })
        .catch((error)=>{
            console.log(JSON.stringify(error));
            setEmailError(mensajeError(error.code));
        });
    }

    const mensajeError = (error) => {
        switch (error) {
            case "auth/email-already-in-use":
                return "El correo ingresado ya está en uso";
            case "auth/invalid-email":
                return "Ingrese un correo válido";
            case "auth/weak-password":
                return "La contraseña debe tener un mínimo de 6 caracteres";
            default:
                return error.toString();
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
                        keyboardType='email-address'
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
        marginBottom: 15,
        height: 70,
        marginLeft: 20,
        marginRight: 20,
        textAlignVertical: 'center'
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