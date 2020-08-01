import React from 'react';
import './style.css';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';

function NewModal() {

  return (

    <Card className="info-modal">
      <Button className="btn-modal" variant="contained" color="primary">
        Save
      </Button>
    </Card>

  );
}

export default NewModal;