import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import firebase from '../utils/firebase';

export default function PlatillosPage({navigation}){
    const [platillos, setPlatillos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPlatillos();
    }, []);

    React.useEffect(() => {
        navigation.addListener('focus', () => {
          // The screen is focused
          // Call any action
          getPlatillos();
        });
      }, []);

    const getPlatillos = async () => {
        setLoading(true);

        let plats = [];
        let snapshot = await firebase.firestore().collection("platillos").get();
        snapshot.forEach((doc) => {
            console.log(doc.data());
       
            plats.push({
                id: doc.id,
                nombreP: doc.data().nombreP,
                ingredientes: doc.data().ingredientes
            });
            console.log("id ", doc.id);
        });

        plats.sort((a,b)=> (a.ingrediente > b.ingrediente ? 1 : -1));

        setPlatillos(plats);
        console.log(platillos);

        setLoading(false);
    }

    return(
        <>
            <ActivityIndicator size="large" color="#ff0000" animating={loading}/>
            <View
                style={styles.formView}>
                <Text
                    style={styles.platillosText}>Platillos</Text>
            </View>
            <FlatList 
            style={styles.list}
            data={platillos}
            renderItem={({ item }) => (
                <View style={styles.elementView}>
                    <TouchableOpacity
                    onPress = {()=>navigation.navigate('IngredientesPlatillo', {platillo: item})}>
                    <Text style={styles.elementText1}>{item.nombreP}</Text>
                    </TouchableOpacity>
                </View>
              )}
            keyExtractor={item => `${item.nombreP}`}/>
            <TouchableOpacity
                style={styles.addButton}
                onPress = {()=>navigation.navigate('AgregarPlatillo')}>
                    <Text
                        style= {styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    /////////////// TITLE ////////////////
    formView: {
        marginBottom: 15,
        marginLeft: 20
    },
    platillosText: {
        fontSize: 30,
        fontFamily: 'sans-serif-medium',
        color: '#000000'
    },

    ///////////// ELEMENTS ///////////////
    list: {
        marginLeft: 5, marginRight: 5,
        backgroundColor: '#fefefe',
        borderTopWidth: 2,
        borderTopColor: '#de0010',
        borderBottomColor: '#dddddd',
        marginBottom: 10,
    },
    elementView: {
        borderTopColor: '#de0010',
        borderTopWidth: 1
    },
    elementText1: {
        marginLeft: 15,
        marginVertical: 20,
        fontSize: 30,
        fontFamily: 'sans-serif',
        color: '#000000'
    },

    /////////////// BUTTON ////////////////
    addButton: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',                                          
        bottom: 15,                                                    
        right: 15,
        height:70,
        backgroundColor:'#de0010',
        borderRadius:100,
    },
    addButtonText: {
        fontSize: 50,
        color: '#ffffff',
        fontFamily: 'sans-serif',
        alignSelf: 'center'
    }
});