import React from 'react';
import TextField from "@material-ui/core/TextField";
import './style.css'


function AddName(props) {

    
  return (

    <div className="add-name">
      <TextField 
      id="outlined-name" 
      label="Your Name"  
      variant="outlined" 
      onChange={(event) => props.onChange(event.target.value)}
      /> 
    </div>
    
  );
}

export default AddName;
