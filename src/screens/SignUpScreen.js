import React from 'react'
import './SignUpScreen.css'

function SignUpScreen() {
    return (
        <div className="SignUpScreen">
            <form>
                <h1>Sign In</h1>
                <input type="Email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                <h4>
                <span className='SignUpScreen__gray'>New to Netflix? </span>
                <span className='SignUpScreen__link'> Sign Up now. </span>
                  </h4>
            </form>
            
        </div>
    )
}

export default SignUpScreen
