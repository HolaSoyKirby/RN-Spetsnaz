import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firebase from '../utils/firebase';

export default function IngredientesPlatilloPage({navigation, route}){
    const { platillo } = route.params;

    const prepararPlatillo = async () => {
        let showAlert = false;

        let almacen = [];
        let ingsActualizados = [];

        const docs = firebase.firestore().collection('almacen');

        for(const ing of platillo.ingredientes){
            const doc = docs.doc(ing.IdIng);
            const getIng = await doc.get();

            let cantProcesada = ing.cantidad;
            if(ing.uMedida == 'c'){
                cantProcesada *= 15;
            }else if(ing.uMedida == 't'){
                cantProcesada *= 250;
            }else if(ing.uMedida == 'Kg' || ing.uMedida == 'L'){
                cantProcesada *= 1000;
            }

            almacen.push({
                id: ing.IdIng,
                ...getIng.data(),
                cantProcesada});
        }

        console.log("INGS ALMACEN");
        console.log(almacen);

        console.log("\nINGREDIENTES");
        console.log(platillo.ingredientes);

        almacen.forEach((ing) => {
            let cantFinal = ing.cantidad - ing.cantProcesada;

            if(cantFinal <= 0){
                cantFinal = 0;
                showAlert = true;
            }

            ingsActualizados.push({
                id: ing.id,
                cant: cantFinal
            });
        });

        console.log("\nFINAL");
        console.log(ingsActualizados);

        if(showAlert){
            Alert.alert(
                "Alerta",
                `No tienes los suficientes ingredientes para preparar ${platillo.nombreP}, ¿desea prepararlo de todas formas?`,
                [
                  {
                    text: "NO",
                    onPress: () => {
                        console.log("\nRECHAZADO");
                        navigation.goBack();
                    },
                    style: "cancel"
                  },
                  { text: "SI", onPress: async () => {
                    for(const ing of ingsActualizados){
                        const doc = docs.doc(ing.id);
                        await doc.update({
                            cantidad: ing.cant
                        });
                    }
                    console.log("\nACTUALIZADO");
                    navigation.goBack();
                  } }
                ]
            );
        }else{
            for(const ing of ingsActualizados){
                const doc = docs.doc(ing.id);
                await doc.update({
                    cantidad: ing.cant
                });
            }
            console.log("\nACTUALIZADO");
            navigation.goBack();
        }
        
    }    

    return(
        <>
            <View style={styles.formView}>
                <Text style={styles.agregarText}>{platillo.nombreP}</Text>
            </View>
            <View style={styles.listaView}>
                <Text style={styles.titleLista}>Ingredientes</Text>
                <FlatList
                data={platillo.ingredientes}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.elementLista}>{`-  ${item.cantidad} ${item.uMedida} ${item.nombreIng}`}</Text>
                    </View>
                )}
                keyExtractor={item => `${item.IdIng}`}/>
            </View>
            <TouchableOpacity
                style={styles.ingredienteButtonView}
                onPress={() => {
                    prepararPlatillo();
                    //navigation.goBack();
                }}
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