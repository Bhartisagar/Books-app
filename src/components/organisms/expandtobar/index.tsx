import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
    container:{ 
      position:'fixed',    
      left:'0',
      right:'0',
      top:'6%',
      backgroundColor:'rgba(0,0,0,.7)',
      height:'100vh',
      width:'100%',
      zIndex:2,
      display:'grid',
      justifyContent:'center'
  },
  inner:{
      
      position:'absolute',   
      width:'100vw',
      backgroundColor:'#F1F6F4',
      color:'black',
      height:'300px'
  }

  
  })

function Modal(props) {
    const {open,DropComp}=props;

    const classes = useStyles();

    if(open===true){
        return (
            <div className={classes.container} data-testid="explore">
                
               <div className={classes.inner}>
                   <DropComp/>
              </div> 
            </div>
          )
    }
    else{
        return null
    }
  
}

export default Modal