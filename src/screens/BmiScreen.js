import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {db} from "../../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import {verification,makeid,test,commentaire,create} from "../function";

export default function BmiScreen({navigation,route}) {
    
    const [weight, onChangeWeight] = React.useState();
    const [height, onChangeHeight] = React.useState(null); 

    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
      
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeHeight}
       value={height}
        placeholder="Enter your height (Taille en Cm)"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeWeight}
        value={weight}
        placeholder="Enter your weight (Poids en Kg) "
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={Create} >
        <Text style={{color:"white"}}>Calculate</Text>
      </TouchableOpacity>   
     
    </View>
);}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  //  flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:100
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft:20,
    marginRight:20,
    borderRadius:7

  },
  button : {
    marginTop:50,
  marginBottom:20,
  alignItems: "center",
  backgroundColor: "#FF7F00",
  borderRadius:10,
  paddingLeft:45,
  paddingRight:45,
 paddingTop:10,
 paddingBottom:10
},
button2 : {
  marginBottom:20,
  alignItems: "center",
  backgroundColor: "#DDDDDD",
  borderRadius:10,
  paddingLeft:45,
  paddingRight:45,
 paddingTop:10,
 paddingBottom:10
},
});

