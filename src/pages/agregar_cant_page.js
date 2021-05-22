import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import RNPickerSelect from "react-native-picker-select";

export default function AgregarCantPage({navigation}){
    return(
    <>
        <View style={styles.ingredienteView}>
            <Text 
            style={styles.ingredienteText}> Nombre Ingrediente </Text>
        </View>
        <View style={styles.restanteView}>
            <Text style={styles.restanteText}> 5 kg restante</Text>
        </View>
        <View style={styles.agregarCantidadView}>
            <Text
            style={styles.agregarCantidadText}> Agregar cantidad</Text>
            <TextInput placeholder='Cantidad' style={styles.formTextInput}/>
            <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    style={pickerSelectStyles}
                    placeholder={{
                        label: "Unidad de medida",
                        value: null
                    }}
                    placeholderTextColor="black"
                    items={[
                        { label: "Gramos", value: 'g' },
                        { label: "Cucharadas (sólidos)", value: 'cucharadasS' },
                        { label: "Tazas (sólidos)", value: 'tazasS' },
                        { label: "Kilogramos", value: 'kg' },
                        { label: "Mililitros", value: 'ml' },
                        { label: "Cucharadas (líquidos)", value: 'cucharadasL' },
                        { label: "Tazas (líquidos)", value: 'tazasL' },
                        { label: "Litros", value: 'L' }
                    ]}
                />
        </View>
        <View>
        <TouchableOpacity
                style={styles.ingredienteButtonAgregar}
                onPress={() => navigation.goBack()}
                >
                <Text
                style={styles.text}
                >Agregar</Text>
            </TouchableOpacity>
        </View>
        
    </>    
    );
  }

const styles = StyleSheet.create({
    ///////TÍTULO///////
    ingredienteView: {
        marginTop: 100,
        marginBottom: 20,
        
    },
    ingredienteText: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'sans-serif-medium'
    },

    //////CANT RESTANTE//////
    restanteView: {
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center'
    },
    restanteText: {
        textAlignVertical: 'center',
        fontSize: 25,
        color: 'black'
    },

    //////FORM/////
    agregarCantidadView: {
        marginHorizontal: 15
    },
    agregarCantidadText: {
        color:'#de0010',
        marginBottom: 10
    },
    formTextInput: {
        marginBottom: '10%',
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#aaaaaa'
    },

    //////BUTTON//////
    ingredienteButtonAgregar: {
        height: 60,
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
        backgroundColor: '#de0010',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    text:{
        fontSize: 22,
        color: '#ffffff',
        fontFamily: 'sans-serif-medium',
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 12,
      color: "black",
      paddingRight: 30,
      backgroundColor: "#f0f0f0",
      marginBottom: 20,
      fontWeight: 'bold',
    },
    inputIOS: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: "black",
      borderRadius: 12,
      color: "black",
      paddingRight: 30,
      backgroundColor: "#f0f0f0",
      marginBottom: 20,
      fontWeight: 'bold',
    },
  });