import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './features/counter/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/counterSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user= useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
        console.log("user ::"+user);
      }else{
        dispatch(logout());
      }
    });
    return  unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? 
         ( 
           <LoginScreen />
        ):
         (
          <Switch>
            <Route path="/profile">
              <ProfileScreen/>
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
         )}
      </Router>
    </div>
  );
}

export default App;
