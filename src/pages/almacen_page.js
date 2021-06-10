import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import firebase from '../utils/firebase';

export default function AlmacenPage({navigation}){
    const [ingredientes, setIngredientes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getIngredientes();
    }, []);

    const getIngredientes = async () => {
        setLoading(true);

        let ings = [];
        let snapshot = await firebase.firestore().collection("almacen").get();
        snapshot.forEach((doc) => {
            let cant = doc.data().cantidad;
            let uMed = doc.data().uMedida;
            if(cant >= 1000){
                cant /= 1000;
                if(uMed == 'g'){
                    uMed = 'Kg';
                }else{
                    uMed = 'L';
                }
            }
            ings.push({
                id: doc.id,
                ingrediente: doc.data().ingrediente,
                cantidad: cant,
                uMedida: uMed
            });
            console.log("id ", doc.id);
        });

        ings.sort((a,b)=> (a.ingrediente > b.ingrediente ? 1 : -1));

        setIngredientes(ings);
        console.log(ingredientes);

        setLoading(false);
    }

    return(
        <>
            <ActivityIndicator size="large" animating={loading} color="#ff0000"/>
            <View
                style={styles.formView}>
                <Text
                    style={styles.almacenText}>Almacén</Text>
            </View>
            <FlatList
            style={styles.list}
            data={ingredientes}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress = {()=>navigation.navigate('AgregarCantidad', { ing: item, onGoBack: getIngredientes })}>
                    <View style={styles.elementView}>
                        <Text style={styles.elementText1}>{item.ingrediente}</Text>
                        <Text style={styles.elementText2}>{`${item.cantidad} ${item.uMedida}`}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => `${item.id}`}/>
            <TouchableOpacity
                style={styles.addButton}
                onPress = {()=>navigation.navigate('AgregarIngrediente', { onGoBack:  getIngredientes })}>
                    <Text
                        style= {styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      },
    /////////////// TITLE ////////////////
    formView: {
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