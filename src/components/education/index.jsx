import React, { useState } from 'react';
import './style.css';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import NewModal from '../newModal/newModal';
import Info from '../info/Info'
import LeftCard from '../LeftCard/LeftCard';

function Education(props) {


  const [status ,setStatus] = useState(true)


 const showTradeModal = () => {
    setStatus(!true)
  }


  return (

    <div className="main">
      <div className="main-card">
        <div className="title">
          <h1>Welcome to {props.name}'s education page</h1>
          <Button onClick={showTradeModal} className="btn" variant="contained" color="primary">
            Add new education
          </Button>
        </div>
        <div className="main-wrapper">
          <div className="content">
          {status ? <Info/> : <NewModal/>}
          </div>
          <LeftCard/>
        </div>
      </div>
    </div>

  );
}

export default Education;