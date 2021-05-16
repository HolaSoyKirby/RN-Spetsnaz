import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const ingredientes = [
    {
      Nombre: 'Platillo 1'
    },
    {
        Nombre: 'Platillo 2'
    },
    {
        Nombre: 'Platillo 3'
    },
    {
        Nombre: 'Platillo 4'
      },
      {
          Nombre: 'Platillo 5'
      },
      {
          Nombre: 'Platillo 6'
      },
      {
        Nombre: 'Platillo 7'
      },
      {
          Nombre: 'Platillo 8'
      },
      {
          Nombre: 'Platillo 9'
      },
      {
          Nombre: 'Platillo 10'
      },
      {
          Nombre: 'Platillo 11'
      },
      {
          Nombre: 'Platillo 12'
      },
      {
        Nombre: 'Platillo 13'
    },
    {
        Nombre: 'Platillo 14'
    },
    {
        Nombre: 'Platillo 15'
    },
    {
        Nombre: 'Platillo 16'
    },
    {
        Nombre: 'Platillo 17'
    },
    {
        Nombre: 'Platillo 18'
    },
    {
        Nombre: 'Platillo 19'
    },
    {
        Nombre: 'Platillo 20'
    }
];

export default function PlatillosPage({navigation}){
    return(
        <>
            <View
                style={styles.formView}>
                <Text
                    style={styles.platillosText}>Platillos</Text>
            </View>
            <FlatList 
            style={styles.list}
            data={ingredientes}
            renderItem={({ item }) => (
                <View style={styles.elementView}>
                    <TouchableOpacity
                    onPress = {()=>navigation.navigate('IngredientesPlatillo')}>
                    <Text style={styles.elementText1}>{item.Nombre}</Text>
                    </TouchableOpacity>
                </View>
              )}
            keyExtractor={item => `${item.Nombre}`}/>
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
        marginTop: 40,
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