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

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
        setUser({
          email: userAuth.email,
          uid: userAuth.uid
        });
      }else{
        dispatch(logout);
      }
    });
    return  unsubscribe;
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? 
         ( 
           <LoginScreen />
        ):
         (
          <Switch>
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
