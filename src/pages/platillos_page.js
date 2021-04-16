import React from 'react';
import { Text, Image } from 'react-native';

export default function PlatillosPage({navigation}){
    return(
        <>
            <Image
                source={ require('../img/Logo.png') }/>
            <Text>Platillos</Text>
        </>
    )
}