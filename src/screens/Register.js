import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput ,TouchableOpacity,ScrollView} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {db} from "../../firebase";
//import { doc, setDoc } from "firebase/firestore"; 

export default function RegisterScreen({navigation}) {
    const [email, onChangeEmail] = React.useState(null);
   
    const [password, onChangePassword] = React.useState(null);
   
    

    /*useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace("LoginScreen")
        }
      })
  
      return unsubscribe
    }, [])*/


   
    
    
    //Create new user
    const handleSignUp = () => {


       if(email == null && password ==null ){
        alert("Incorrect information, please fill in your login information")
       }
       else{

        const auth=getAuth();
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       // console.log('Registered with:', user.email);
        alert("Account Created!")
        //Redirect
        navigation.replace("Login")
       
      
      })
      .catch((error) => {
        alert("Incorrect information, please fill in your login information")
        //const errorCode = error.code;
        //const errorMessage = error.message;
        // ..
      });
       }
      }


  
   /* const handleSignUp = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
    }*/
  
   

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
        onPress={handleSignUp} >
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
});

