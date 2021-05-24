import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './features/counter/firebase';

function App() {
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        console.log(userAuth)
      }else{
        //logged out
      }
    });
    return  unsubscribe;
  })

  const user = null;
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
