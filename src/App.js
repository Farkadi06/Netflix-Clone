import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
