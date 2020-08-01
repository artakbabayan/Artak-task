import React, { useState } from 'react';
import './style.css';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import NewModal from '../newModal/newModal';

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
          {status ? (<Card className="info">
              <h3>Graduate Computer Science @ Showwcase University</h3>
              <div>
                <p>August 2019 - Present</p>
                <li>"Not all those who wander are lost"</li>
                <li>"Not all those who wander are lost"</li>
                <li>"Not all those who wander are lost"</li>
              </div>
            </Card>) : (<NewModal/>)}
          </div>
          <div>
            <Card className="left-card">
              <h4>Showwcase University</h4>
              <p>Forward Bootcamp</p>
            </Card>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Education;