import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import fire from './fire.js';
import Login from './components/session/Login';
import ListAllNumbers from './components/phonebook/ListAllNumbers';
import AddNumber from './components/phonebook/AddNumber';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  const signOut = () => {
    fire.auth().signOut()
  };
  
  console.log(isLoggedIn);
  return (
    <div className="App">
      <Router>
        {!isLoggedIn
          ? (
            <>
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
            </>
          ) 
          : (
            <>
            <span onClick={signOut}>
              <a href="#">Sign out</a>
            </span>
            <Switch>
              <Route path="/add-number">
                <AddNumber />
              </Route>
              <Route path="/">
                <ListAllNumbers />
              </Route>
            </Switch>
            </>
          
          )}
      </Router>
    </div>
  );
}

export default App;
