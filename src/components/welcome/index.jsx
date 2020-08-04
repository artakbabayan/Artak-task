import React ,{useState} from 'react';
import Card from '@material-ui/core/Card';
import WelcomeTitle from '../welcomeTitle/welcomeTitle';
import Text from '../text/Text'


function Welcome() {
  
return (
    
      <div className="main-wrapper-welcome">
        <WelcomeTitle/>
        <Text/>
      </div>
      
  );
}

export default Welcome;
