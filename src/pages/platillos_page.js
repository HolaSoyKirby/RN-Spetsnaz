import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function PlatillosPage({navigation}){
    return(
        <>
            <Image
                source={ require('../img/Logo.png') }/>
            <Text>Platillos</Text>
        </>
    )
}