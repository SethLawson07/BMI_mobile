
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

export  {verification,makeid,test,commentaire,create,handleLogin,handleSignUp};