import React  from 'react';
import Education from '../../components/education/index'
import {useState} from 'react'
import Welcome from '../../components/welcome/index';
// import './style.css';


function WelcomePage() {
  

  const [nameState,setNameState] = useState('')
  const [userName,setUserName] = useState()

  const addName = (value) => {
    setUserName(value)
  }

  const setName = () => {
    setNameState(userName)
}

return (
    
    (nameState === '') ? 
    (
    <Welcome>

    </Welcome>
    ) : 
    <Education name={nameState}/>
    
  );
}

export default WelcomePage;
