import React, {useRef} from 'react'
import { auth } from '../features/counter/firebase';
import './SignUpScreen.css'

function SignUpScreen() {
    const EmailRef = useRef(null);
    const PasswordRef = useRef(null)

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            EmailRef.current.value,
            PasswordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    };

    const signIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="SignUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={EmailRef} type="Email" placeholder="Email" />
                <input ref={PasswordRef} type="password" placeholder="Password" />
                <button onClick={signIn} type="submit">Sign In</button>
                <h4>
                <span className='SignUpScreen__gray'>New to Netflix? </span>
                <span className='SignUpScreen__link' onClick={register} > Sign Up now. </span>
                  </h4>
            </form>
            
        </div>
    )
}

export default SignUpScreen
