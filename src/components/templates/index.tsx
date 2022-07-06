import React from 'react';
import { MyTabs } from '../organisms/currentTab/tabs';
import FooterComp from '../molecules/Footer';
import { makeStyles, Typography } from '@material-ui/core';
import AppBars from '../organisms/headers/AppBars';


const useStyles=makeStyles({
  mylibrary:{
    left:'55vw',     
    
   },
   heading:{
       margin:'50px 130px 20px',
       padding:'30px',
       paddingLeft:'8vw'
   }
});
const Templates=()=>{
    const classes=useStyles();
    
  return (
   <>
      <AppBars/>
      <div className={classes.heading}>
        
       <Typography className={classes.mylibrary} variant="h1">My Library</Typography>
      </div>
    
      <MyTabs/>     
    <FooterComp/>
    </>
    
  )
}

export default Templates