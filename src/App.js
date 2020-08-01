import React from 'react';
import Welcome from './components/welcome';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Welcome} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
