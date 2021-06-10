import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import firebase from '../utils/firebase';

export default function AgregarCantPage({navigation, route}){
    const { ing, onGoBack } = route.params;

    const [cantidad, setCantidad] = useState(0);
    const [opcion, setOpcion] = useState(null);
    const [textError, setTextError] = useState('');
    let opciones = [];

    if(ing.uMedida == 'g' || ing.uMedida == 'Kg'){
        opciones = [
            { label: "Gramos", value: 'g' },
            { label: "Kilogramos", value: 'Kg' }
        ];
    } else {
        opciones = [
            { label: "Mililitros", value: 'ml' },
            { label: "Litros", value: 'L' }
        ];
    }

    const updateIngrediente = async () => {
        setTextError('');
        if(cantidad <= 0){
            setTextError('Ingrese una cantidad válida');
            return;
        }

        if(opcion == null){
            setTextError('Seleccione una unidad de medida');
            return;
        }

        let cantFinal = cantidad;

        if(opcion == 'Kg' || opcion == 'L'){
            cantFinal *= 1000;
        }

        try{
            const doc = firebase.firestore().collection('almacen').doc(ing.id);
            const getIng = await doc.get();
            const ingrediente = getIng.data();
            console.log(ingrediente);

            cantFinal += ingrediente.cantidad;
            console.log('Cantfinal: ', cantFinal);

            await doc.update({
                cantidad: cantFinal
            });

            onGoBack();
            navigation.goBack();
        }catch(e){
            setTextError("Error: " + toString(e));
        }
    }

    return(
    <>
        <View style={styles.ingredienteView}>
            <Text 
            style={styles.ingredienteText}>{ ing.ingrediente }</Text>
        </View>
        <View style={styles.restanteView}>
            <Text style={styles.restanteText}>{ `${ing.cantidad} ${ing.uMedida} restante` }</Text>
        </View>
        <View style={styles.agregarCantidadView}>
            <Text
            style={styles.agregarCantidadText}> Agregar cantidad</Text>
            <TextInput 
            placeholder='Cantidad'
            keyboardType='numeric' 
            style={styles.formTextInput}
            onChange={(e) => {
                let cant = parseFloat(e.nativeEvent.text);
                if(isNaN(cant)){
                    setCantidad(0);
                }else{
                    setCantidad(cant);
                }
                console.log(cantidad);
            }}/>
            <RNPickerSelect
                    onValueChange={(value) => {
                        setOpcion(value);    
                        console.log(opcion);
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
                    //placeholderTextColor="black"
                    items={opciones}
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
        <View>
        <TouchableOpacity
                style={styles.ingredienteButtonAgregar}
                onPress={() => {
                    updateIngrediente();
                    //navigation.goBack()
                }}
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