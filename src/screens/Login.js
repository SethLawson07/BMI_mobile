import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";








export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    
 
   // Login user
    const handleLogin = () => {
     if(email==null && password ==null){
        alert("Incorrect information, please fill in your login information")
     }
     else{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          
            navigation.replace("Calculate",{ id: user.uid})
         
            //console.log('Registered with:', user.uid);
            // ...
          })
          .catch((error) => {
            alert("Incorrect information, please fill in your login information")
            //const errorCode = error.code;
            //const errorMessage = error.message;
          });
     }
    }

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
       /// onPress={verification} >
     onPress={handleLogin } >
        <Text style={{color:"white"}}>Se connecter</Text>
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

