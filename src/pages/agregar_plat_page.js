import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import firebase from '../utils/firebase';

export default function AgregarPlatPage({ navigation }) {
  const [nombrePlatillo, setNombrePlatillo] = useState('');
  const [ingredientesPlatillo, setIngredientesPlatillo] = useState([]);
  let ingreds = [];

  const [ingredientes, setIngredientes] = useState([]);
  const [opcionMedida, setOpcionMedida] = useState([]);

  const [selectedIngrediente, setSelectedIngrediente] = useState({});
  const [selectedUnidad, setSelectedUnidad] = useState(null);
  const [cantidad, setCantidad] = useState('');
  const [cantFinal, setCantFinal] = useState(0);

  const [textError, setTextError] = useState('Error');
  
  useEffect(() => {
    getAllIngredientes();
  }, []);

  const getAllIngredientes = async () => {
    let ings = [];
    let snapshot = await firebase.firestore().collection("almacen").get();
    snapshot.forEach((doc) => {
        ings.push({
            label: doc.data().ingrediente,
            value: {
              idIngrediente: doc.id,
              nombreIngrediente: doc.data().ingrediente,
              unidadMedida: doc.data().uMedida
            }
        });
    });

    ings.sort((a,b)=> (a.ingrediente > b.ingrediente ? 1 : -1));
    setIngredientes(ings);
    console.log(ingredientes);

  }

  const addIngrediente = () => {
    setTextError('');
    if(selectedIngrediente == null){
      setTextError('Seleccione un ingrediente a añadir');
      return;
    }

    if(cantFinal <= 0){
      setTextError('Inserte una cantidad válida');
      return;
    }

    if(selectedUnidad == null){
      setTextError('Seleccione la unidad de medida');
      return;
    }

    let ingrediente = {
      IdIng: selectedIngrediente.idIngrediente,
      nombreIng: selectedIngrediente.nombreIngrediente,
      cantidad: cantFinal,
      uMedida: selectedUnidad
    };

    console.log('INGREDIENTE');
    console.log(ingrediente);

    ingreds = ingredientesPlatillo;

    ingreds.push(ingrediente);
    setIngredientesPlatillo(ingreds);

    setSelectedIngrediente(null);
    setCantidad('');
    setOpcionMedida([]);
    setSelectedUnidad(null);
    setCantFinal(0);

    console.log('\nPLATILLO');
    console.log(ingredientesPlatillo);
  }

  const addPlatillo = async () => {
    if(nombrePlatillo == ''){
      setTextError('Inserte el nombre del platillo');
      return;
    }

    if(ingredientesPlatillo.length == 0){
      setTextError('Agregue por lo menos un ingrediente');
      return;
    }

    try{
      await firebase.firestore().collection('platillos').add({
          ingredientes: ingredientesPlatillo,
          nombreP: nombrePlatillo
      });

      console.log('Subido');
      
      /*
      onGoBack();
      navigation.goBack();
      */

    }catch(e){
      setTextError(toString(e));
    }
  }

  return (
    <>
      <View style={styles.formView}>
        <Text
        style={styles.agregarText}>Agregar Platillo</Text>
        </View>
        <View style={{marginHorizontal: 15, marginBottom: 5}}>
        <TextInput
        placeholder="Nombre del Platillo:"
        style={styles.formTextInput}
        onChange={(e) => {
          setNombrePlatillo(e.nativeEvent.text);
          console.log(nombrePlatillo);
        }}/>
      </View>

      <View style={{marginVertical: 15}}>
      <FlatList 
            style={styles.list}
            data={ingredientesPlatillo}
            renderItem={({ item }) => (
                <View style={styles.elementView}>
                    <Text style={{...styles.elementText, width:'60%'}}>{item.nombreIng}</Text>
                    <Text style={{...styles.elementText, width: '40%'}}>{`${item.cantidad} ${item.uMedida}`}</Text>
                </View>
              )}
            keyExtractor={item => `${item.IdIng}`}/>
      </View>
      <View style={styles.formView}>
        <RNPickerSelect
          value={selectedIngrediente}
          onValueChange={(value) => {
            let uni = [];
            if(value != null){
              if(value.unidadMedida == 'g'){
                uni = [
                  { label: "Gramos", value: "g" },
                  { label: "Cucharadas", value: "c" },
                  { label: "Tazas", value: "t" },
                  { label: "Kilogramos", value: "Kg" }
                ];
              }else if(value.unidadMedida == 'ml'){
                uni = [
                  { label: "Mililitros", value: "ml" },
                  { label: "Cucharadas", value: "c" },
                  { label: "Tazas", value: "t" },
                  { label: "Litros", value: "L" },
                ];
              }
            }

            setSelectedIngrediente(value);
            setOpcionMedida(uni);
            setSelectedUnidad(null);
          }}
          style={pickerSelectStyles}
          placeholder={{
            label: "Seleccionar Ingrediente",
            value: null,
          }}
          items={ingredientes}
        />
        <View style= {styles.container}>
          <TextInput
            placeholder="Cantidad" 
            style={styles.formTextCantidad}
            keyboardType = 'numeric'
            value={cantidad}
            onChange={(e) => {
              let cant = parseFloat(e.nativeEvent.text);
              setCantidad(e.nativeEvent.text);
              if(isNaN(cant)){
                  setCantFinal(0);
              }else{
                  setCantFinal(cant);
              }
            }}/>
          <RNPickerSelect
          value={selectedUnidad}
            onValueChange={(value) => {
              setSelectedUnidad(value);
            }}
            style={pickerSelectUnidad}
            placeholder={{
              color: 'black',
              label: "Unidad",
              value: null,
            }}
            items={opcionMedida}
          />
        </View>
      </View>
      <Text style={styles.textError}>{textError}</Text>
      <TouchableOpacity
        style={styles.ingredienteButtonView}
        onPress={() => {
          addIngrediente();
        }}
      >
        <Text style={styles.ingText}>Agregar Ingrediente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ingredienteButtonView}
        onPress={() => {
          addPlatillo();
          //navigation.goBack();
        }} >
        <Text style={styles.ingText}>Agregar Platillo</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  formView: {
    marginLeft: 20,
    marginRight: 20,
  },
  agregarText: {
    fontSize: 30,
    fontFamily: "sans-serif-medium",
    marginTop: "10%",
    marginBottom: 10,
    color: "#000000",
  },
  formTextInput: {
    marginBottom: 7,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  container: {
    flexDirection: "row",
    width: '100%'
  },
  ingredienteButtonView: {
    height: 60,
    marginVertical: 10,
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
  formTextCantidad: {
    marginBottom: 22,
    marginRight: 5,
    width: '50%',
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },


  list: {
    height: '20%',
    marginLeft: 5, marginRight: 5,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: '#de0010',
    borderBottomColor: '#de0010',
    marginBottom: 10,
},
elementView: {
  flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 2
},
elementText: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom:10,
    fontSize: 30,
    fontFamily: 'sans-serif',
    color: '#000000'
},

textError: {
  color: 'red', 
  textAlign: 'center',
  fontSize: 18,
  height: 50,
  marginLeft: 20,
  marginRight: 20,
  textAlignVertical: 'center'
},
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    marginBottom: 20,
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
  },
});

const pickerSelectUnidad = StyleSheet.create({
  inputAndroid: {
    width: '50%',
    fontSize: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    color: "black",
    paddingRight: 168,
    marginBottom: 20,
  },
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 12,
    color: "black",
    paddingRight: 100,
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
  },
});