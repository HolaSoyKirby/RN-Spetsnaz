import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const ingredientes = [
    {
      Nombre: 'Ingrediente 1',
      Cantidad: '20 kg',
    },
    {
        Nombre: 'Ingrediente 2',
        Cantidad: '20 kg',
    },
    {
        Nombre: 'Ingrediente 3',
        Cantidad: '200 g',
    },
    {
        Nombre: 'Ingrediente 4',
        Cantidad: '20 kg',
      },
      {
          Nombre: 'Ingrediente 5',
          Cantidad: '20 kg',
      },
      {
          Nombre: 'Ingrediente 6',
          Cantidad: '200 g',
      },
      {
        Nombre: 'Ingrediente 7',
        Cantidad: '20 kg',
      },
      {
          Nombre: 'Ingrediente 8',
          Cantidad: '20 kg',
      },
      {
          Nombre: 'Ingrediente 9',
          Cantidad: '200 g',
      },
      {
        Nombre: 'Ingrediente 10',
        Cantidad: '20 kg',
      },
      {
          Nombre: 'Ingrediente 11',
          Cantidad: '20 kg',
      },
      {
          Nombre: 'Ingrediente 12',
          Cantidad: '200 g',
      },
];

export default function AlmacenPage({navigation}){
    return(
        <>
            <View
                style={styles.formView}>
                <Text
                    style={styles.almacenText}>Almacén</Text>
            </View>
            <FlatList 
            style={styles.list}
            data={ingredientes}
            renderItem={({ item }) => (
                <View style={styles.elementView}>
                    <Text style={styles.elementText1}>{item.Nombre}</Text>
                    <Text style={styles.elementText2}>{item.Cantidad}</Text>
                </View>
              )}
            keyExtractor={item => `${item.Nombre}`}/>
            <TouchableOpacity
                style={styles.addButton}
                onPress = {()=>navigation.navigate('AgregarIngrediente')}>
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
    almacenText: {
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
        marginTop: 10,
        marginBottom:5,
        fontSize: 30,
        fontFamily: 'sans-serif',
        color: '#000000'
    },
    elementText2: {
        marginLeft: 15,
        marginTop: 5,
        marginBottom:10,
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