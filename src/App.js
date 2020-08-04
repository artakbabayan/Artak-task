import React from 'react';
import WelcomePage from '../src/pages/welcome/welcome';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={WelcomePage} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
