import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

export default function AgregarIngPage({navigation}){

    const [nombreIngrediente, setNombreIngrediente] = useState('');
    const [cantidadIngrediente, setCantidadIngrediente] = useState(0);
    const [unidadMedida, setUnidadMedida] = useState(null);
    const [textError, setTextError] = useState('');

    const crearIngrediente = () => {
        setTextError('');
        if(nombreIngrediente == ''){
            setTextError('Ingrese el nombre del ingrediente');
            return;
        }

        if(cantidadIngrediente <= 0){
            setTextError('Ingrese una cantidad válida');
            return;
        }

        if(unidadMedida == null){
            setTextError('Ingrese una unidad de medida');
            return;
        }

        if(unidadMedida == 'Kg' || unidadMedida == 'L'){
            setCantidadIngrediente(cantidadIngrediente*1000);
            if(unidadMedida == 'Kg'){
                setUnidadMedida('g');
            }else{
                setUnidadMedida('ml');
            }
        }

        console.log(`Cantidad: ${cantidadIngrediente} ${unidadMedida}`);
        setTextError(`Cantidad: ${cantidadIngrediente} ${unidadMedida}`);
    }

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
                    style={styles.formTextInput}
                    onChange={(e) => {
                        setNombreIngrediente(e.nativeEvent.text);
                        console.log(e);
                    }} />
                <Text
                    style = {styles.formText}>Cantidad:</Text>
                <TextInput
                    placeholder = "Cantidad"
                    keyboardType = 'numeric'
                    style={styles.formTextInput}
                    onChange={(e) => {
                        let cant = parseFloat(e.nativeEvent.text);
                        if(isNaN(cant)){
                            setCantidadIngrediente(0);
                        }else{
                            setCantidadIngrediente(cant);
                        }
                        console.log(cantidadIngrediente);
                    }} />
                <Text
                    style = {styles.formText}>Unidad de medida:</Text>
                <RNPickerSelect
                    onValueChange={(value) => {
                        setUnidadMedida(value);
                        console.log(unidadMedida);
                    }}
                    style={{
                        ...pickerSelectStyles,
                        iconContainer:{////////////////ICONO
                            top:20,
                            right:10
                        },
                    placeholder:{
                        color: 'black',
                        fontWeight:'bold',
                        fontSize:18
                    }
                    }}
                    placeholder={{
                        label: "Unidad de medida",
                        value: null
                    }}
                    items={[
                        { label: "Gramos", value: 'g' },
                        { label: "Kilogramos", value: 'Kg' },
                        { label: "Mililitros", value: 'ml' },
                        { label: "Litros", value: 'L' }
                    ]}
                    Icon={() => {//////////////////ICONO
                        return (
                          <View
                            style={{
                              backgroundColor: 'transparent',
                              borderTopWidth: 10,
                              borderTopColor: 'gray',
                              borderRightWidth: 10,
                              borderRightColor: 'transparent',
                              borderLeftWidth: 10,
                              borderLeftColor: 'transparent',
                              width: 0,
                              height: 0,
                            }}
                          />
                        );
                      }}
                />
            </View>
            <Text style={styles.textError}>{textError}</Text>
            <TouchableOpacity
                style={styles.ingredienteButtonView}
                onPress={() => {
                    crearIngrediente();
                    //navigation.goBack();
                }}
                >
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
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      backgroundColor:'transparent',
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

  /*

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 10,
      borderColor: "#000000",
      borderRadius: 12,
      color: "white",
      paddingRight: 30,
      backgroundColor: "#de0010",
      marginBottom: 20,
      borderRadius: 20
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
  });*/