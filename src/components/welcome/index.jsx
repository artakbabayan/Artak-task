import React ,{useState} from 'react';
// import './style.css';
import Card from '@material-ui/core/Card';
import AddName from '../addName';
import Education from '../education';
import Button from '@material-ui/core/Button'
import WelcomeTitle from '../welcomeTitle/welcomeTitle';
import Text from '../text/Text'


function Welcome() {
  
return (
    
    <Card className="main-car-welcome">
      <div className="main-wrapper-welcome">
        <WelcomeTitle/>
        <Text/>
      </div>
    </Card>
    
  );
}

export default Welcome;
