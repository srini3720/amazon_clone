import React,{ useState} from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import {auth} from "./firebase";



function Login() {
    const history = useHistory();
    const [email, setEamil] = useState("");
    const [password, setpassword] = useState("");
    
    
    const signIn =e => {
        e.preventDefault()
        //firebase

        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))


    }

    const register =e => {
        e.preventDefault();
        //firebase
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //created username and password
            if (auth) {
                history.push("/")
            }

        })
        .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
            alt=""
             />
             </Link>
             
             <div className="login__container">
                 <h1>Sign-in</h1>

                 <form>
                     <h5>Email</h5>
                     <input type="text" value={email} onChange=
                     {e => setEamil(e.target.value)}/>

                     <h5>Password</h5>
                     <input type="Password"  value={password}
                     onChange={e=> setpassword(e.target.value)}/>

                     <button type='submit' onClick={signIn}
                     className="login__signInButton">
                         Sign In</button>                    
                 </form>

                 <p>
                     By sigining-in you agree to the Amazon-clone
                     conditions of use & sale. Please see our privacy Notice
                     our Cookies Notice and our Interest-Based Ads Notice
                 </p>

                 <button onClick={register}
                 className="login__registerButton">
                     Create your Amazon Account
                 </button>


             </div>

        </div>
    )
}

export default Login
