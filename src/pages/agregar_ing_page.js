import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

export default function AgregarIngPage(){
    return(
        <>
            <View
                style={styles.formView}>
                <Text
                style={styles.agregarText}>Agregar Ingrediente</Text>
            </View>
            <View
                style={styles.formView}>
                <Text
                    style = {styles.formText}>Ingrediente:</Text>
                <TextInput
                    placeholder = "Ingrediente"
                    style={styles.formTextInput} />
                <Text
                    style = {styles.formText}>Cantidad:</Text>
                <TextInput
                    placeholder = "Cantidad"
                    secureTextEntry={true}
                    style={styles.formTextInput} />
                <Text
                    style = {styles.formText}>Unidad de medida:</Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    style={pickerSelectStyles}
                    placeholder={{
                        label: "Unidad de medida",
                        value: null
                    }}
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
            <TouchableOpacity
                style={styles.ingredienteButtonView}>
                <Text
                    style={styles.ingText}>Agregar Ingrediente</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    formView: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    agregarText: {
        fontSize: 30,
        fontFamily: 'sans-serif-medium',
        marginBottom: '20%',
        marginTop: '10%',
        color: '#000000'
    },
    formText:{
        fontSize: 18,
        color: 'red',
        fontFamily: 'sans-serif',
        marginBottom: 5
    },
    formTextInput: {
        marginBottom: '10%',
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#aaaaaa'
    },
    ingredienteButtonView: {
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
    ingText: {
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
      marginBottom: 20
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
      marginBottom: 20
    },
  });