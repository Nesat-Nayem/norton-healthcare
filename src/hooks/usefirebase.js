import { getAuth, signInWithPopup,createUserWithEmailAndPassword ,signInWithEmailAndPassword , GoogleAuthProvider, onAuthStateChanged,updateProfile, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../components/Shared/Login/firebase/firebase.init";
authInit();

const useFirebase = () => {
    const auth = getAuth();

    // constom

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // constom

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // console.log(user);

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)

            })
            .finally(() => setIsLoading(false));
    }


    // constom
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }

    const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }


      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
            processLogin(email, password);
          }
        else {
          registerNewUser(email, password);
        }
    
      }

      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
           
            setUserName();
           
          
          })
          .catch(error => {
            setError(error.message);
          })
      }

      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
     
    

    // constom

    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({ })
            }
            setIsLoading(false)
        });
        return () => unsubcribed;
    }, [isLoading])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }
    return {
        user,
        googleSignIn,
        isLoading,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        isLogin,
        
       
        handleRegistration,
        error,
        logOut

    }

};

export default useFirebase;