import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
    buttons:{
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
          backgroundColor: 'rgba(44, 224, 128, 1)',
          color: 'black'
     },
     marginLeft:'48vw'
    }
})

 const LoginButton = () => {
     const {loginWithRedirect} = useAuth0();
     const classes=useStyles();
  return (
    <Button
    onClick={()=>loginWithRedirect()} variant='outlined' 
     size='large' className={classes.buttons}
    >Login</Button>
  )
}
export default LoginButton