import React from 'react';
import Education from '../../components/education/index'
import {useState} from 'react'
import Welcome from '../../components/welcome/index';
import AddName from '../../components/addName';
import { Button } from '@material-ui/core';
// import './style.css';

function WelcomePage() {

  const [nameState,
    setNameState] = useState('')
  const [userName,
    setUserName] = useState()

  const addName = (value) => {
    setUserName(value)
  }

  const setName = () => {
    setNameState(userName)
  }

  return ((nameState === '')
    ? (
      <Welcome>
        <AddName onChange={addName}  ></AddName>
          <Button onClick={setName} className="btn-add" variant="contained" color="primary" >
          Enter
          </Button>
      </Welcome>
    )
    : <Education name={nameState}/>);
}

export default WelcomePage;
