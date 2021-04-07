import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function ProfilePage({navigation}){
    return(
        <>
            <View
                style={styles.userView}>
                <Image
                    source={ require('../img/user.png') }
                    style={styles.userImg} />
                <Text
                    style={styles.userName}>John Doe</Text>
            </View>
            <TouchableOpacity
                style={styles.loginButtonView}
                onPress = {()=>navigation.replace('LoginPage')}>
                <Text
                    style={styles.loginText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    userView: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center'
    },
    userImg: {
        width: '80%',
        height: 200,
        resizeMode: 'center'
    },
    userName: {
        fontSize: 38
    },
    loginButtonView: {
        height: 60,
        marginTop: '60%',
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
});