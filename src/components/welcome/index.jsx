import React ,{useState} from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import AddName from '../addName';
import Education from '../education';
import Button from '@material-ui/core/Button'

function Welcome() {
  

return (
    
    <div className="main-welcome">
    <Card className="main-car-welcome">
      <div className="main-wrapper-welcome">
        
        <div className="add-name">
          <p>Type your name and click "Enter" below to begin!</p>
         
        </div>
      </div>
    </Card>
  </div>
    
  );
}

export default Welcome;
