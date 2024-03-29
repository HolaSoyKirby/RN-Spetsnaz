import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import firebase from '../utils/firebase';

export default function LoginPage({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    
    const login = () => {
        setEmailError('');
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            console.log("ok");
            navigation.navigate('MenuNavigation', {user: email});
        })
        .catch((error)=>{
            console.log(JSON.stringify(error));
            setEmailError(mensajeError(error.code));
        });
    }

    const mensajeError = (error) => {
        switch (error) {
            case "auth/invalid-email":
                return "Ingrese un correo válido";
            case "auth/wrong-password":
                return "Contraseña incorrecta";
            case "auth/user-not-found":
                return "El correo ingresado no ha sido registrado";
            default:
                return error.toString();
        }
    }

    return(
        <>
        <ScrollView>
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
                <Text
                    style = {styles.formText}>Usuario:</Text>
                <TextInput
                    placeholder = "Tu usuario"
                    style={styles.formTextInput}
                    keyboardType='email-address'
                    onChange={(e)=>{
                        setEmail(e.nativeEvent.text);
                        console.log(email);
                    }}
                    value={email}
                    />
                <Text
                    style = {styles.formText}>Contraseña</Text>
                <TextInput
                    placeholder = "Contraseña"
                    secureTextEntry={true}
                    style={styles.formTextInput}
                    onChange={(e)=>{
                        setPassword(e.nativeEvent.text);
                        console.log(password);
                    }}
                    value={password}
                    />
            </View>
            <Text style={styles.textError}>{emailError}</Text>
            <TouchableOpacity
                style={styles.loginButtonView}
                onPress = {() => {
                    login();
                    //navigation.navigate('MenuNavigation', {user: email});
                }
                    }>
                <Text
                    style={styles.loginText}>Ingresar</Text>
            </TouchableOpacity>
            <View>
                <Text
                    style={styles.registrarseText}
                    onPress={() => navigation.navigate('RegisterPage')}>Registrarse</Text>
            </View>
        </ScrollView>
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
        marginRight: 20
    },
    ingresarText: {
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginBottom: '5%'
    },
    formText:{
        fontSize: 18,
        color: '#de0010',
        fontFamily: 'sans-serif',
        marginBottom: 5
    },
    formTextInput: {
        marginBottom: '5%',
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

    ////////////// BUTTON //////////////
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