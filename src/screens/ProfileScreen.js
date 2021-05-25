import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar'
import { selectUser } from '../features/counter/counterSlice'
import { auth } from '../features/counter/firebase';
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" alt="" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3 className="profileScreen__CurrentPlan">Plans (Current Plan: Premium)</h3>
                             <h4 className="profileScreen__RenewalDate">Renewal date : 04/03/2021</h4>

                             <div className="profileScreen__Subscription">
                                 <h5>Netflix Standard <br/>1080p</h5>
                                 <button className="profileScreen__subscribe">subscribe</button>
                             </div>

                             <div className="profileScreen__Subscription">
                                 <h5>Netflix Basic <br/>480p</h5>
                                 <button className="profileScreen__subscribe">subscribe</button>
                             </div>

                             <div className="profileScreen__Subscription">
                                 <h5>Netflix Premium <br/>4k+HDR</h5>
                                 <button className="profileScreen__CurrentPackage">Current Package</button>
                             </div>
                            <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
