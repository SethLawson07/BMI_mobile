import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import handleLogin from "../function";

export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null); 

    return (
    <View style={styles.container}>
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
      />

      <TouchableOpacity
        style={styles.button}      
        onPress={handleLogin } >
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>

      
     
    </View>
);}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

