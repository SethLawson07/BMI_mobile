import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {db} from "../../firebase";
import { doc, setDoc } from "firebase/firestore"; 




export default function BmiScreen({navigation,route}) {
    
    const [weight, onChangeWeight] = React.useState();
    const [height, onChangeHeight] = React.useState(null);
  

    const verification = () => (weight==null || height==null) ?   alert("Incorrect information, please fill in your login information") : ''

   
    //Generer l'ID
    const makeid = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

   //Calculer l'IMC
   const test = () => {
    const res= weight/(Math.pow(height,2))*10000
    return res
   }

   //Interpretation de L'IMC
   const commentaire = () => {
      const res=test();
       if(res<18.5) return "Poids insuffisant"
       else if (res>18.5 && res<24.9) return "Poids normal "
       else if (res>25 && res<29.9) return "Surpoids"
       else return "Obésité"
   }

   //Insertion dans la BD
    const Create = async() => {
        if(weight==null && height==null){
            alert("Incorrect information, please fill in your login information")
        }
        else{
            
            // MARK: Creating New Doc in Firebase
        // Before that enable Firebase in Firebase Console
        const myDoc = doc(db, "BMI", makeid(5))
    
        //const res= (weight/Math.pow(height,2))*10000
        // Your Document Goes Here
        const docData = {
          "height": height,
            "weight": weight,
           "resultat":test(),
           "commentaire":commentaire(),
           "user_id":route.params.id
          
        }
   
       setDoc(myDoc, docData)
      
          // Handling Promises
          .then(() => {
            // MARK: Success
            alert("Votre IMC = "+test()+ "\n\n Commentaire : "+commentaire())
          })
          .catch((error) => {
            alert("Incorrect information, please fill in your login information")
            // MARK: Failure
           // alert(error.message)
          })

        }
        
      }    


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

