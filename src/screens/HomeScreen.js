import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';


export default function HomeScreen({navigation}) {
    return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        
        source={require('../../assets/logo.png')}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>  navigation.navigate('Login')} >
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() =>   navigation.navigate('Register')} >
        <Text style={{color:"white"}}>Register</Text>
      </TouchableOpacity>
     

    </View>
  
  );  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    marginTop:20,
    
  width:200,
  height:100,
  alignContent:'center'
} ,
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


