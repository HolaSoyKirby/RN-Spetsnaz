import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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

export default function IngredientesPlatilloPage({navigation}){
    return(
        <>
            <View style={styles.formView}>
                <Text style={styles.agregarText}>Nombre Platillo</Text>
            </View>
            <View style={styles.listaView}>
                <Text style={styles.titleLista}>Ingredientes</Text>
                <FlatList
                data={ingredientes}
                renderItem={({ item }) => (
                <View>
                    <Text style={styles.elementLista}>-  {item.Cantidad} {item.Nombre}</Text>
                </View>
              )}
            keyExtractor={item => `${item.Nombre}`}/>
            </View>
            <TouchableOpacity
                style={styles.ingredienteButtonView}
                onPress={() => {navigation.goBack()}}
                >
        <Text style={styles.ingText}>Preparar Platillo</Text>
      </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    //////TITLE//////
    formView: {
      height: '15%'
    },
    agregarText: {
      fontSize: 30,
      fontFamily: "sans-serif-medium",
      marginTop: "10%",
      color: "#000000",
      textAlign: 'center'
    },

    ///////LISTA////////
    listaView: {
        height: '70%',
        marginHorizontal: 10
    },
    titleLista:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    elementLista: {
        marginBottom: 15,
        marginLeft: 10,
        fontSize: 20,
    },

    ///////BUTTON///////
    ingredienteButtonView: {
        height: 60,
        marginVertical: 15,
        marginHorizontal: 15,
        backgroundColor: "#de0010",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      },
      ingText: {
        fontSize: 22,
        color: "#ffffff",
        fontFamily: "sans-serif-medium",
      },
});