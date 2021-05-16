import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

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

export default function AgregarPlatPage({ navigation }) {
  return (
    <>
      <View style={styles.formView}>
        <Text style={styles.agregarText}>Agregar Platillo</Text>
        </View>
        <View style={{marginHorizontal: 15, marginBottom: 5}}>
        <TextInput placeholder="Nombre del Platillo:" style={styles.formTextInput} />
      </View>

      <View style={{marginVertical: 15}}>
      <FlatList 
            style={styles.list}
            data={ingredientes}
            renderItem={({ item }) => (
                <View style={styles.elementView}>
                    <Text style={{...styles.elementText, width:'60%'}}>{item.Nombre}</Text>
                    <Text style={{...styles.elementText, width: '40%'}}>{item.Cantidad}</Text>
                </View>
              )}
            keyExtractor={item => `${item.Nombre}`}/>
      </View>
      <View style={styles.formView}>
        <Text style={styles.formText}>Ingredientes:</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          style={pickerSelectStyles}
          placeholder={{
            label: "Ingrediente",
            value: null,
          }}
          items={[
            { label: "Gramos", value: "g" },
            { label: "Cucharadas (sólidos)", value: "cucharadasS" },
            { label: "Tazas (sólidos)", value: "tazasS" },
            { label: "Kilogramos", value: "kg" },
            { label: "Mililitros", value: "ml" },
            { label: "Cucharadas (líquidos)", value: "cucharadasL" },
            { label: "Tazas (líquidos)", value: "tazasL" },
            { label: "Litros", value: "L" },
          ]}
        />
          <View style= {styles.container}>
          <TextInput placeholder="Cantidad" style={styles.formTextCantidad} />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            style={pickerSelectUnidad}
            placeholder={{
              label: "Unidad",
              value: null,
            }}
            items={[
              { label: "Gramos", value: "g" },
              { label: "Cucharadas (sólidos)", value: "cucharadasS" },
              { label: "Tazas (sólidos)", value: "tazasS" },
              { label: "Kilogramos", value: "kg" },
              { label: "Mililitros", value: "ml" },
              { label: "Cucharadas (líquidos)", value: "cucharadasL" },
              { label: "Tazas (líquidos)", value: "tazasL" },
              { label: "Litros", value: "L" },
            ]}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.ingredienteButtonView} onPress={() => {}}>
        <Text style={styles.ingText}>Agregar Ingrediente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ingredienteButtonView}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.ingText}>Agregar Platillo</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  formView: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  agregarText: {
    fontSize: 30,
    fontFamily: "sans-serif-medium",
    marginTop: "10%",
    marginBottom: 10,
    color: "#000000",
  },
  formText: {
    fontSize: 18,
    color: "red",
    fontFamily: "sans-serif",
    marginBottom: 5,
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
    backgroundColor: "#aaaaaa",
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
    backgroundColor: "#aaaaaa",
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