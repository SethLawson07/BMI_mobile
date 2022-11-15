import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput ,TouchableOpacity,ScrollView} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {db} from "../../config/firebase";
import {handleSignUp} from "../function";

export default function RegisterScreen({navigation}) {
    
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
  
   

    return (
      
    <View style={styles.container} >

     
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
       value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      
     
       <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
        returnKeyType='go'
        autoCorrect={false}
      />
      

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp()} >
        <Text style={{color:"white"}}>Register</Text>
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
    marginTop:10,
  marginBottom:20,
  alignItems: "center",
  backgroundColor: "#FF7F00",
  borderRadius:10,
  paddingLeft:45,
  paddingRight:45,
 paddingTop:10,
 paddingBottom:10,
 marginLeft:40,
 marginRight:40
},
});

