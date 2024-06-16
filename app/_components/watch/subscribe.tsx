import * as React from 'react';
import  { useState } from "react";
import Fab from '@mui/material/Fab';

export default function Dot() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
    };
  return (
    <React.Fragment>
      
      <Fab variant="extended" size="small" color="white" sx={{ ml: 0.4, mt: 3, textTransform: 'none' }}
      onClick={handleClick}>
            
              { active ? "Subscribed" : "Subscribe"}
            </Fab>
    </React.Fragment>
  );
}