import initalizeAuthnentiction from "../Firebase/firebase.init";

import { getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut ,
    createUserWithEmailAndPassword , 
    signInWithEmailAndPassword ,
    onAuthStateChanged ,
    GithubAuthProvider  } 
    from "firebase/auth";
   import { useEffect, useState } from "react";


initalizeAuthnentiction()

const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();
const auth = getAuth();

const useFirebase = () =>{
    const [user, setUser]= useState({})
    const [error, setError]= useState("")
    const [isLoading , setLoading] = useState(true);
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    


    //google sign in
    function signInWithGoogle (){
        setLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result => {
            setUser(result.user);
            
        })

        .catch( error =>{
            setError(error.message)
        })
    }

    //github sign in
    function signInWithGitHub (){
        setLoading(true)
        signInWithPopup(auth,GitHubProvider)
        .then(result => {
            setUser(result.user);
            
        })

        .catch( error =>{
            setError(error.message)
        })
    }



    function handleRegister (e) {
        e.preventDefault()
        console.log(email , password);
        if(password.length<6){
            setError('Password Must be a least 6 charaters long')
            return;
        }

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Password Must Contain 2 uper case')
            return;
        }

        createUserWithEmailAndPassword(auth ,email , password)
        .then(result => {
            const user=result.user;
            console.log(user)  
            setError('')
        })

        .catch( error =>{
            setError(error.message)
        })
        
      
    }

    function loginEmail (){
        signInWithEmailAndPassword(auth , email ,password)
        .then(result => {
            const user=result.user;
            console.log(user)  
           
        })
        .catch( error =>{
            setError(error.message)
        })
        
    }



    function handleEmailChange (e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange (e) {
        setPassword(e.target.value)
    }



    // set the current sign in user
    useEffect( () =>{
     const unsubscribed = onAuthStateChanged (auth , (user) =>{
            if(user){
                setUser(user);
            }
        })
        return () => unsubscribed;
    }, []);



    //sign out 
    function userLogOut (){
        signOut(auth)
        .then(() => {
            setUser({})
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            setError(error.message)
          });

    }


    return {
        user,
        error,
        signInWithGoogle,
        signInWithGitHub,
        userLogOut ,
        isLoading ,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        loginEmail
       
       
    }
    

}

export default useFirebase;