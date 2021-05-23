import React, { useState } from 'react'
import "./LoginScreen.css"

function LoginScreen() {
    const [signIn, setSignIn] =  useState(true)
    return (
        <div className="LoginScreen">
            <div className="LoginScreen__background">
                <img 
                    className="LoginScreen__logo"
                    src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png"
                    alt="" />
                    {/**https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg */}
                <button onClick={() => setSignIn(true)} className="LoginScreen__button">Sign in</button>
                <div className="LoginScreen__gradient" />
            </div>
            <div className="LoginScreen__body">
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch Anywhere. Cancel Anytime. </h2>
                    <h3>Ready to watch. Enter your Email adress to create or restart your membership</h3>
                    <div className="LoginScreen__input">
                        <form action="">
                            <input type="email" placeholder="Email Address" />
                            <button onClick={() => setSignIn(true)} className="LoginScreen__getStarted">GET STARTED</button>
                        </form>
                    </div>
                </>
            </div>
        </div>
    )
}

export default LoginScreen
