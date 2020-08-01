import React ,{useState} from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import AddName from '../addName';
import Education from '../education';
import Button from '@material-ui/core/Button'

function Welcome() {
  

  const [nameState,setNameState] = useState('')
  const [userName,setUserName] = useState()

  const addName = (value) => {
    setUserName(value)
  }

  const setName = () => {
    setNameState(userName)
}

return (
    
    (nameState === '') ? (<div className="main-welcome">
    <Card className="main-car-welcome">
      <div className="main-wrapper-welcome">
        <div className="title-welcome">
          <h1>Hi there! Welcome to your education showcase</h1>
        </div>
        <div className="add-name">
          <p>Type your name and click "Enter" below to begin!</p>
          <AddName onChange={addName}  ></AddName>
          <Button onClick={setName} className="btn-add" variant="contained" color="primary" >
          Enter
          </Button>
        </div>
      </div>
    </Card>
  </div>) : <Education name={nameState}/>
    
  );
}

export default Welcome;
